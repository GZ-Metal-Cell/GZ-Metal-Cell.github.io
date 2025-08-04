import logging
import math
import numpy as np
import gc
from random import randrange
from copy import deepcopy

from numba import njit

EPS = 1e-8
NAN = -42.
k = 0.5
MINFLOAT = float('-inf')
magic_seeds = [31416, 1, 14142, 42, 27183, 2, 16180, 7]

log = logging.getLogger(__name__)


class MCTS():
    """
    This class handles the MCTS tree.
    """

    def __init__(self, game, nnet, args, dirichlet_noise=False, batch_info=None):
        self.game = game  # 游戏实现类
        self.nnet = nnet  # 神经网络
        self.args = args  # 算法相关参数
        self.dirichlet_noise = dirichlet_noise

        # Contains tuple of Es, Vs, Ps, Ns, Qsa, Nsa
        #       Es stores game.getGameEnded ended for board s
        #       Vs stores game.getValidMoves for board s
        #       Ps stores initial policy (returned by neural net)    
        #       Ns stores #times board s was visited
        #       Qsa stores Q values for s,a (as defined in the paper)
        #       Nsa stores #times edge s,a was visited
        #       r stores round number
        #       Qs stores Q value for s
        # 创建一个字典 nodes_data 用于存储每个节点的数据，包括：
        # Es: 游戏结束状态。
        # Vs: 当前棋盘状态的合法动作。
        # Ps: 由神经网络返回的初始策略。
        # Ns: 棋盘被访问的次数。
        # Qsa: 状态 s 下，动作 a 的 Q 值。
        # Nsa: 从状态 s 到动作 a 的次数。
        # r: 当前回合数。
        # Qs: 状态 s 的 Q 值。
        self.nodes_data = {} # stores data for each nodes in a single dictionary
        # 为每个动作的 Q 值初始化为 NAN，长度与合法动作数一致。
        self.Qsa_default = np.full (self.game.getActionSize(), NAN, dtype=np.float64)
        # 每个动作的访问次数初始化为 0。
        self.Nsa_default = np.zeros(self.game.getActionSize()     , dtype=np.int64)
        # 使用 NumPy 内置的随机数生成器创建一个实例。
        self.rng = np.random.default_rng()
        # 步骤计数器
        self.step = 0
        # 上次清理的回合数
        self.last_cleaning = 0
        self.batch_info = batch_info
        self.random_seed = -1

    def getActionProb(self, canonicalBoard, temp=1, force_full_search=False):
        """
        This function performs numMCTSSims simulations of MCTS starting from
        canonicalBoard.

        Returns:
            probs: a policy vector where the probability of the ith action is
                   proportional to Nsa[(s,a)]**(1./temp)
        从一个给定的状态（canonicalBoard）开始进行模拟，计算出每个可能动作的概率分布。下面我们逐步分析每个部分。
        canonicalBoard: 当前的棋盘状态。
        temp: 温度参数，用于控制探索和利用的平衡。
        force_full_search: 强制进行完整搜索的标志。
        """
        # 判断是否进行完整的模拟。
        is_full_search = force_full_search or (self.rng.random() < self.args.prob_fullMCTS)
        # 确定进行的模拟次数，如果是完整搜索，则为numMCTSSims，否则为其一部分。
        nb_MCTS_sims = self.args.numMCTSSims if is_full_search else self.args.numMCTSSims // self.args.ratio_fullMCTS
        # 如果是完整搜索且有强制模拟，则设置为真。
        forced_playouts = (is_full_search and self.args.forced_playouts)

        # 通过循环进行 nb_MCTS_sims 次 MCTS 模拟。
        # 每次模拟时，会调用 self.search() 方法，在当前棋盘状态基础上进行搜索，并可能引入狄利克雷噪声（如果是首轮模拟且设置了噪声）。
        for self.step in range(nb_MCTS_sims):
            self.random_seed = magic_seeds[self.step % self.args.universes] if self.args.universes > 0 else -1
            dir_noise = (self.step == 0 and is_full_search and self.dirichlet_noise)
            self.search(canonicalBoard, dirichlet_noise=dir_noise, forced_playouts=forced_playouts)

        # 根据当前棋盘状态生成字符串表示 stringRepresentation 并从 nodes_data 中获取访问次数 Nsa。
        s = self.game.stringRepresentation(canonicalBoard)
        counts = [self.nodes_data[s][5][a] for a in range(self.game.getActionSize())] # Nsa

        # Compute Q at root node
        # 计算根节点的 Q 值，并为每个玩家生成相应的 Q 值列表。
        # 在强化学习中，Q值（Q-value）是用来表示在特定状态下采取某个动作的长期收益的度量。
        # Q 值的全称是行动-价值函数（Action-Value Function），通常表示为 Q(s,a)，其中：
        # s 是某个状态。
        # a 是在状态 s 下采取的动作。
        q_player0 = self.nodes_data[s][7]
        q = [q_player0 if n == 0 else -q_player0/(self.game.num_players-1) for n in range(self.game.num_players)]

        # Policy target pruning
        # 如果是强制模拟，调整策略（Ps）的目标值，以帮助选择最佳动作。
        # 当 forced_playouts 为真时，算法会优先选择访问次数最多的动作。best_count 获得当前访问次数的最大值。
        # Psas 提取与当前状态 s 相对应的策略值。
        # 通过调整访问次数 Nsa，对于访问次数不等于最佳的动作，计算其新访问值；若它是最佳动作，则不做调整。
        # 最终筛选出访问较少的动作的调整后的计数大于 1，否则为 0。
        if forced_playouts:
            best_count = max(counts)
            Psas   = [self.nodes_data[s][2][a] for a in range(self.game.getActionSize())] # Ps[a]
            adjusted_counts = [Nsa-int(math.sqrt(k*Psa*nb_MCTS_sims)) if Nsa != best_count else Nsa for (Nsa, Psa) in zip(counts, Psas)]
            adjusted_counts = [c if c > 1 else 0 for c in adjusted_counts]
            counts = adjusted_counts
        # 将 counts 转换为 NumPy 数组并归一化，使得所有概率之和为 1。
        probs = np.array(counts)
        probs = probs / probs.sum()

        # Clean search tree from very old moves = less memory footprint and less keys to search into
        # 检查是否启用内存优化，若是，则根据当前轮次r清理较旧的节点，以节省内存空间。
        # 删除那些在当前轮次r之前五回合就已经访问过旧状态的节点。
        if not self.args.no_mem_optim:
            r = self.game.getRound(canonicalBoard)
            if r > self.last_cleaning + 20:
                for node in [n for n in self.nodes_data.keys() if self.nodes_data[n][6] < r-5]:
                    del self.nodes_data[node]
                self.last_cleaning = r

        # 如果温度 temp 为 0，表示算法确定性选择最优动作。
        # 通过计算最大访问次数的动作并随机选择一个，将其在概率分布中设置为 1，其余为 0。
        if temp == 0:
            bestAs = np.array(np.argwhere(counts == np.max(counts))).flatten()
            bestA = np.random.choice(bestAs)
            probs = [0] * len(counts)
            probs[bestA] = 1
            return probs, q, is_full_search
        # 若温度大于0，通过温度平滑计算出每个动作的概率分布，然后归一化。
        counts = [x ** (1. / temp) for x in counts]
        counts_sum = float(sum(counts))
        probs = [x / counts_sum for x in counts]
        return probs, q, is_full_search

    def search(self, canonicalBoard, dirichlet_noise=False, forced_playouts=False):
        """
        This function performs one iteration of MCTS. It is recursively called
        till a leaf node is found. The action chosen at each node is one that
        has the maximum upper confidence bound as in the paper.

        Once a leaf node is found, the neural network is called to return an
        initial policy P and a value v for the state. This value is propagated
        up the search path. In case the leaf node is a terminal state, the
        outcome is propagated up the search path. The values of Ns, Nsa, Qsa are
        updated.

        NOTE: the return values are the negative of the value of the current
        state. This is done since v is in [-1,1] and if v is the value of a
        state for the current player, then its value is -v for the other player.

        Returns:
            v: the negative of the value of the current canonicalBoard
        通过递归方式探索游戏状态空间，以便找到最佳的行动策略。
        """
        # 状态表示
        s = self.game.stringRepresentation(canonicalBoard)
        # 从节点数据获取信息
        Es, Vs, Ps, Ns, Qsa, Nsa, r, Qs = self.nodes_data.get(s, (None, )*8)
        if r is None:
            r = self.game.getRound(canonicalBoard)

        # 终止状态检测
        if Es is None:
            Es = self.game.getGameEnded(canonicalBoard, 0)
            if Es.any():
                # terminal node
                self.nodes_data[s] = (Es, Vs, Ps, Ns, Qsa, Nsa, r, Qs)
                return Es
        elif Es.any():
            # terminal node
            return Es
        # 首次探索状态
        if Ps is None:
            # First time that we explore state s
            Vs = self.game.getValidMoves(canonicalBoard, 0)
            if self.batch_info is None:
                Ps, v = self.nnet.predict(canonicalBoard, Vs)
            else:
                Ps, v = self.nnet.predict_client(canonicalBoard, Vs, self.batch_info)
            if dirichlet_noise:
                Ps = softmax(Ps, self.args.temperature[0])
                self.applyDirNoise(Ps, Vs)
            normalise(Ps)

            Ns, Qsa, Nsa = 0, self.Qsa_default.copy(), self.Nsa_default.copy()
            self.nodes_data[s] = (Es, Vs, Ps, Ns, Qsa, Nsa, r, v[0])
            return v
        # 添加狄利克雷噪声
        if dirichlet_noise:
            # We already visited this node, adding dirichlet noise this time
            Ps = softmax(Ps, self.args.temperature[0])
            self.applyDirNoise(Ps, Vs)
            normalise(Ps)
        # 选择最佳行动
        # pick the action with the highest upper confidence bound
        # get next state and get canonical version of it
        a, next_s, next_player = get_next_best_action_and_canonical_state(
            Es, Vs, Ps, Ns, Qsa, Nsa, Qs,
            self.args.cpuct,
            self.game.board,
            canonicalBoard,
            forced_playouts,
            self.step,
            self.args.fpu,
            self.random_seed,
        )
        # 递归搜索下一个状态
        v = self.search(next_s)
        v = np_roll(v, next_player)

        Qsa[a] = (Nsa[a] * Qsa[a] + v[0]) / (Nsa[a] + 1) # if Qsa[a] is NAN, then Nsa is zero
        Qs = ((Ns+1) * Qs + v[0]) / (Ns+2) # Qs can't be None here
        Nsa[a] += 1
        Ns += 1

        self.nodes_data[s] = (Es, Vs, Ps, Ns, Qsa, Nsa, r, Qs)
        return v

    # 在 Monte Carlo Tree Search (MCTS) 算法中为策略向量 Ps 应用 Dirichlet 噪声，以增强对未探索动作的探索。
    def applyDirNoise(self, Ps, Vs):
        if self.args.dirichletAlpha > 0:
            dir_values = self.rng.dirichlet([self.args.dirichletAlpha] * np.count_nonzero(Vs))
        elif self.args.dirichletAlpha < 0:
            # Automatic value
            dir_values = self.rng.dirichlet([10 / np.count_nonzero(Vs)] * np.count_nonzero(Vs))
        dir_idx = 0
        for idx in range(len(Ps)):
            if Vs[idx]:
               Ps[idx] = (0.75 * Ps[idx]) + (0.25 * dir_values[dir_idx])
               dir_idx += 1

    @staticmethod
    def reset_all_search_trees():
        for obj in [o for o in gc.get_objects() if type(o) is MCTS]: # dirtier than isinstance, but that would trigger a pytorch warning
            obj.nodes_data = {}
            obj.last_cleaning = 0
        
@njit(cache=True, fastmath=True, nogil=True)
def np_roll(arr, n):
    """
    实现对数组的循环右移（或左移）。
    """
    return np.roll(arr, n)

# pick the action with the highest upper confidence bound
@njit(cache=True, fastmath=True, nogil=True)
def pick_highest_UCB(Es, Vs, Ps, Ns, Qsa, Nsa, Qs, cpuct, forced_playouts, n_iter, fpu):
    """
    选择具有最高上置信界（UCB）的动作。
    """
    cur_best = MINFLOAT
    best_act = -1
    fpu_init = Qs-fpu if fpu > 0 else fpu

    for a, valid in enumerate(Vs):
        if valid:
            if forced_playouts:
                if Nsa[a] < int(math.sqrt(k * Ps[a] * n_iter)): # Nsa is zero when not set
                    return a

            if Qsa[a] != NAN:
                u = Qsa[a] + cpuct * Ps[a] * math.sqrt(Ns) / (1 + Nsa[a])
            else:
                u = fpu_init + cpuct * Ps[a] * math.sqrt(Ns + EPS)

            if u > cur_best:
                cur_best, best_act = u, a

    return best_act


@njit(fastmath=True, nogil=True) # no cache because it relies on jitclass which isn't compatible with cache
def get_next_best_action_and_canonical_state(Es, Vs, Ps, Ns, Qsa, Nsa, Qs, cpuct, gameboard, canonicalBoard, forced_playouts, n_iter, fpu, random_seed):
    """
    根据当前状态选择最佳动作并更新游戏状态。
    """
    a = pick_highest_UCB(Es, Vs, Ps, Ns, Qsa, Nsa, Qs, cpuct, forced_playouts, n_iter, fpu)

    # Do action 'a'
    gameboard.copy_state(canonicalBoard, True)
    next_player = gameboard.make_move(a, 0, random_seed=random_seed)
    # next_s = gameboard.get_state()

    # Get canonical form
    if next_player != 0:
        # gameboard.copy_state(next_s, True)
        gameboard.swap_players(next_player)
    next_s = gameboard.get_state()

    return a, next_s, next_player

@njit(cache=True, fastmath=True, nogil=True)
def normalise(vector):
    """
    归一化输入向量，使其总和为 1。
    """
    sum_vector = np.sum(vector)
    vector /= sum_vector

@njit(cache=True, fastmath=True, nogil=True)
def softmax(Ps, softmax_temp):
    """
    计算软最大化值，将输入向量转换为概率分布。
    """
    if softmax_temp == 1.:
        return Ps
    result = Ps ** (1. / softmax_temp)
    normalise(result)
    return result.astype(np.float32)
