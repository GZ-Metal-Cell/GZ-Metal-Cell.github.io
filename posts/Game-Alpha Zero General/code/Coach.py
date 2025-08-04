import logging
import os
import sys
from collections import deque
import pickle
import zlib
from tqdm import tqdm, trange
from queue import SimpleQueue
from threading import Thread, Lock
from time import sleep

from random import shuffle
import numpy as np

from Arena import Arena
from MCTS import MCTS

log = logging.getLogger(__name__)


class Coach:
    """
    This class executes the self-play + learning. It uses the functions defined
    in Game and NeuralNet. args are specified in main.py.
    这个 class执行 self-play 和 学习。它使用 Game（游戏） 和 NeuralNet（神经网络） 中定义的函数。args 在 main.py 中指定。
    """

    def __init__(self, game, nnet, args):
        # 游戏对象
        self.game = game
        # 神经网络对象
        self.nnet = nnet
        # the competitor network 竞争对手的网络，用于与当前网络对比
        self.pnet = self.nnet.__class__(self.game, self.nnet.args)
        self.args = args  # 训练参数
        # 蒙特卡洛树搜索对象，用于选择可能的行动
        self.mcts = MCTS(
            self.game,
            self.nnet,
            self.args,
            dirichlet_noise=(self.args.dirichletAlpha != 0),
        )
        # 用于存储训练示例的历史记录
        self.trainExamplesHistory = (
            []
        )  # history of examples from args.numItersForTrainExamplesHistory latest iterations
        # 指示是否跳过第一次自我对弈
        self.skipFirstSelfPlay = (
            nnet.requestKnowledgeTransfer
        )  # can be overriden in loadTrainExamples() 存储最新训练样本的历史记录
        # 用于计数在训练迭代中连续的失败次数。这个计数器在接受新网络（如果其表现优于旧网络）时归零。如果超过阈值，可能会停止训练过程，以避免长期的无效学习。
        self.consecutive_failures = 0
        # 该参数表示并行推理使用的线程数。可以根据计算资源设定，以提高自我对弈和训练的效率。
        self.nb_threads = self.args.parallel_inferences

    def executeEpisode(self, my_mcts=None, my_game=None):
        """
        This function executes one episode of self-play, starting with player 1.
        As the game is played, each turn is added as a training example to
        trainExamples. The game is played till the game ends. After the game
        ends, the outcome of the game is used to assign values to each example
        in trainExamples.
        
        这个函数执行一局自我对弈，从玩家 1（序号 0？） 开始。
		在游戏进行过程中，每一步都会作为训练示例添加到 trainExamples 中。
  		游戏一直进行到结束。游戏结束后，游戏的结果会被用来给 trainExamples 中的每个示例分配值。

        It uses a temp=1 if episodeStep < tempThreshold, and thereafter
        uses temp=0.
        如果 episodeStep < tempThreshold，则使用 temp=1，否则使用 temp=0。

        Returns:
              trainExamples: a list of examples of the form (canonicalBoard, currPlayer, pi,v)
                                   pi is the MCTS informed policy vector, v is +1 if
                                   the player eventually won the game, else -1.
        如果 episodeStep < tempThreshold，则使用 temp=1，否则使用 temp=0。
        """
        
        # 初始化 MCTS 和游戏对象。如果未传入特定的 MCTS 或游戏对象，则使用类中已有的实例。
        if my_mcts is None:
            my_mcts = self.mcts
        if my_game is None:
            my_game = self.game
        trainExamples = []  # 初始化为空列表，用于存储训练示例。
        board = my_game.getInitBoard()  # 使用游戏对象的方法获取初始棋盘状态。
        curPlayer = 0  # 指定当前玩家，初始值为 0（第一个玩家）。
        episodeStep = 0  # 记录当前回合的步数，初始为 0。

        while True:
            # 循环不断进行每一步的操作
            episodeStep += 1
            # 获取当前玩家对应的棋盘标准形式。
            canonicalBoard = my_game.getCanonicalForm(board, curPlayer)
            # pi 是当前状态下的行动概率分布，q 表示 Q 值（行动价值），is_full_search 表示是否进行了完整搜索。
            pi, q, is_full_search = my_mcts.getActionProb(canonicalBoard, temp=1.0)
            # 根据获取的行动概率分布 pi 进行随机选择行动。温度参数在初期较高，之后逐步降低，以在早期探索更多可能性。
            action = random_pick(
                pi,
                temperature=(
                    2
                    if episodeStep < self.args.tempThreshold
                    else self.args.temperature[1]
                ),
            )

			# 如果进行了完整搜索（is_full_search 为真），则获取当前状态下的有效行动并计算对称性（所有可能的棋盘状态和对应策略）。
            if is_full_search:
                valids = my_game.getValidMoves(canonicalBoard, 0)
                sym = my_game.getSymmetries(canonicalBoard, pi, valids)
                # 对每一个对称形式，将其加入 trainExamples 列表。
                for b, p, v in sym:
                    trainExamples.append([b, p, curPlayer, v, q])

			# 根据当前行动更新棋盘状态和当前玩家。
            board, curPlayer = my_game.getNextState(board, curPlayer, action)

			# 检查游戏是否结束，如果结束则返回结果（胜利者）。
            r = my_game.getGameEnded(board, curPlayer)
            
            # 处理游戏结束后的示例
            if r.any():
                # 计算每个玩家的最终得分，并整合训练示例。
                final_scores = [
                    my_game.getScore(board, p) for p in range(my_game.num_players)
                ]
                # 根据游戏结果 r 处理得分信息并更新训练示例。
                trainExamples = [
                    (
                        x[0],  # board
                        x[1],  # policy
                        np.roll(r, -x[2]),  # winner
                        x[3],  # valids
                        x[4],  # Q estimates
                    )
                    for x in trainExamples
                ]

				# 根据参数 args.no_compression 决定是否压缩返回的训练示例，最终将其返回。
                return (
                    trainExamples
                    if self.args.no_compression
                    else [
                        zlib.compress(pickle.dumps(x), level=1) for x in trainExamples
                    ]
                )

    def executeEpisodes_batch(self, i_thread, shared_memory, locks):
        # 管理多个线程并行执行自我对弈的游戏过程。
        # Execute an episode in a thread until need to evaluate NN
        # then unlock next threads, etc until batch of inferences to do is full
        # then server runs inferences on batch.
        # Each thread loops until receiving a signal to stop
        locks[i_thread].acquire()
        batch_info = (i_thread, i_thread + self.nb_threads, shared_memory, locks)
        while shared_memory[-1] == 0:  # Signal 0 means to continue computing
            my_game = self.game.__class__()
            my_game.getInitBoard()
            my_mcts = MCTS(
                my_game,
                self.nnet,
                self.args,
                dirichlet_noise=(self.args.dirichletAlpha != 0),
                batch_info=batch_info,
            )
            episode = self.executeEpisode(my_mcts, my_game)
            self.examplesQueue.put(episode)

        while (
            shared_memory[-1] == 1
        ):  # We received signal 1, wait for other threads to complete
            locks[i_thread + 1].release()
            locks[i_thread].acquire()
        locks[i_thread + 1].release()

    def executeEpisodes(self):
        """
        管理自我对弈过程，以收集游戏样本供后续训练使用。
        通过支持单线程和多线程执行，该方法能够在不同的计算资源下高效地并发执行自我对弈以获取大量训练示例，进而提升神经网络的训练质量。
        """
        # 使用 deque（双向队列）来存储当前迭代中的训练样本，最大长度由参数 maxlenOfQueue 确定，以控制内存使用和防止溢出。
        iterationTrainExamples = deque([], maxlen=self.args.maxlenOfQueue)
        if self.nb_threads == 1:  # 单线程执行
            for _ in trange(self.args.numEps, desc="Self Play", ncols=120):
                # 通过循环调用 executeEpisode() 方法进行一次自我对弈，每次将生成的训练样本添加到 iterationTrainExamples 中。
                iterationTrainExamples += self.executeEpisode()
                self.MCTS = MCTS(
                    self.game,
                    self.nnet,
                    self.args,
                    dirichlet_noise=(self.args.dirichletAlpha != 0),
                )
                # 如果样本数量达到最大值，发出警告并停止进一步的样本收集。
                if len(iterationTrainExamples) == self.args.maxlenOfQueue:
                    log.warning(
                        f"saturation of elements in iterationTrainExamples, think about decreasing numEps or increasing maxlenOfQueue"
                    )
                    break
        else:
            # N slots for NN inputs, N slots for NN ouputs, 1 slot for signaling
            # signal: 0 = compute, 1 = stop after current episode, 2 = stop
            shared_memory = [None] * (2 * self.nb_threads) + [0]
            # list of Locks: "0;n-1" are MCTSs and "n" is the batch NN processor
            locks = [Lock() for _ in range(self.nb_threads + 1)]

            self.examplesQueue = SimpleQueue()
            [l.acquire() for l in locks]
            threads_list = [
                Thread(
                    target=self.executeEpisodes_batch,
                    args=(i_thread, shared_memory, locks),
                )
                for i_thread in range(self.nb_threads)
            ]
            threads_list.append(
                Thread(
                    target=self.nnet.predict_server,
                    args=(self.nb_threads, shared_memory, locks),
                )
            )
            [t.start() for t in threads_list]

            progress = tqdm(
                total=self.args.numEps,
                desc="Self Play",
                ncols=120,
                smoothing=0.1,
                disable=None,
            )
            nb_examples, max_nb_episodes = 0, self.args.numEps
            while True:
                sleep(1)
                for _ in range(self.examplesQueue.qsize()):
                    iterationTrainExamples += self.examplesQueue.get_nowait()
                    nb_examples += 1
                    progress.update()
                # Check if we have collected enough samples
                if nb_examples >= self.args.numEps - self.nb_threads:
                    if nb_examples >= max_nb_episodes:
                        shared_memory[-1] = (
                            2  # send signal 2 = all threads can be stopped
                        )
                        break
                    elif shared_memory[-1] == 0:
                        max_nb_episodes = nb_examples + self.nb_threads
                        progress.total = max_nb_episodes
                        shared_memory[-1] = (
                            1  # send signal 1 = threads can stop after their current episode
                        )
            [t.join() for t in threads_list]
            progress.close()

        MCTS.reset_all_search_trees()
        return iterationTrainExamples

    def learn(self):
        """
        Performs numIters iterations with numEps episodes of self-play in each
        iteration. After every iteration, it retrains neural network with
        examples in trainExamples (which has a maximum length of maxlenofQueue).
        It then pits the new neural network against the old one and accepts it
        only if it wins >= updateThreshold fraction of games.
        在每次迭代中执行 `numIters` 次迭代，每次迭代包含 `numEps` 局自我对弈。
        每次迭代后，使用 `trainExamples` 中的示例（其最大长度为 `maxlenofQueue`）重新训练神经网络。
        然后，将新训练的神经网络与旧神经网络进行对战，只有当新网络赢得的游戏数量达到 >= `updateThreshold` 的比例时，才接受新网络。
        """

		# 循环从 1 到指定的迭代次数 numIters，每次循环代表一次完整的学习迭代。
        for i in range(1, self.args.numIters + 1):
            # examples of the iteration
            # 检查是否需要跳过第一次自我对弈。如果不跳过或已经是第二次迭代，则进行自我对弈。
            if not self.skipFirstSelfPlay or i > 1:
                # 调用 executeEpisodes 方法进行自我对弈并收集产生的训练示例。
                iterationTrainExamples = self.executeEpisodes()
                # 检查是否达到训练示例的最大长度，并发出警告以防止内存溢出。
                if len(iterationTrainExamples) == self.args.maxlenOfQueue:
                    log.warning(
                        f"saturation of elements in iterationTrainExamples, think about decreasing numEps or increasing maxlenOfQueue"
                    )

                # save the iteration examples to the history
                # 将当前的自我对弈示例保存到历史记录中。
                self.trainExamplesHistory.append(iterationTrainExamples)

                # Check average number of valid moves, and compare to Dirichlet
                # 计算自我对弈过程中每个状态下的有效动作数量的平均值，帮助动态调整超参数如 Dirichlet 噪声。
                nb_valid_moves = [
                    sum(pickle.loads(zlib.decompress(x))[3])
                    for x in iterationTrainExamples
                ]
                avg_valid_moves = sum(nb_valid_moves) / len(nb_valid_moves)
                
                # 根据有效行动的数量比较并建议调整 Dirichlet 超参数。
                if self.args.dirichletAlpha > 0 and not (
                    1 / 1.5 < self.args.dirichletAlpha / (10 / avg_valid_moves) < 1.5
                ):
                    print(
                        f"There are about {avg_valid_moves:.1f} valid moves per state, so I advise to set dirichlet to {10/avg_valid_moves:.1f} instead"
                    )
                    
			# 性能分析模式下，直接返回。
            if self.args.profile:
                return
			# 限制历史记录大小：
            if len(self.trainExamplesHistory) > self.args.numItersHistory:
                self.trainExamplesHistory.pop(0)
            # backup history to a file
            # 备份历史记录到文件：
            self.saveTrainExamples()
            # shuffle examples before training
            # 对训练示例进行随机洗牌：
            trainExamples = []
            for e in self.trainExamplesHistory:
                trainExamples.extend(e)
            shuffle(trainExamples)

            # training new network, keeping a copy of the old one
            # 保存当前网络状态（检查点）：
            # 这段代码将当前的神经网络状态保存为一个临时文件 temp.pt。
            # 保存当前网络的状态是为了能够在后续操作中进行比较，确保在训练过程中不会丢失最新的网络状态。
            self.nnet.save_checkpoint(
                folder=self.args.checkpoint,
                filename="temp.pt",
                additional_keys=vars(self.args),
            )
            # 加载刚刚保存的神经网络状态到 pnet（旧版本网络）。
            self.pnet.load_checkpoint(folder=self.args.checkpoint, filename="temp.pt")
            # 创建一个蒙特卡洛树搜索对象 pmcts，用于与旧版本的网络一起评估当前游戏状态。这个对象将用于在后续的对局中获取动作概率分布。
            pmcts = MCTS(self.game, self.pnet, self.args)

			# 训练得到新的神经网络
            self.nnet.train(trainExamples)
            nmcts = MCTS(self.game, self.nnet, self.args)

            # log.info('PITTING AGAINST PREVIOUS VERSION')
            # 新网络 nmcts 与老网络 pmcts 的对战：
            arena = Arena(
                # 这个函数用于获取新版本神经网络（nmcts）在给定状态 x 下的最佳行动。
                # 函数内部调用了 nmcts 的 getActionProb 方法来获取在状态 x 下的行动概率分布。
                # 温度 temp 被设置为 0.5（当迭代次数 n 小于或等于6时）或者 0（当大于 6 时），
                # 这意味着在前几轮中保持一定程度的随机性，而在后续的多次对弈中则直接选择最高概率的行动。
                # 最后，通过 np.argmax 获取具有最大概率的行动。
                lambda x, n: np.argmax(
                    nmcts.getActionProb(
                        x, temp=(0.5 if n <= 6 else 0.0), force_full_search=True
                    )[0]
                ),
                # 这个函数作用类似，但它是针对旧版本神经网络（pmcts）。同样，选择的策略取决于迭代次数以控制随机性。
                lambda x, n: np.argmax(
                    pmcts.getActionProb(
                        x, temp=(0.5 if n <= 6 else 0.0), force_full_search=True
                    )[0]
                ),
                self.game,
            )
            # 调用 arena 对象的 playGames 方法进行多局游戏对抗，具体对局的次数由 self.args.arenaCompare 指定。
            # 此方法返回新网络（nmcts）的胜利次数 nwins、旧网络（pmcts）的胜利次数 pwins 以及平局次数 draws。
            nwins, pwins, draws = arena.playGames(self.args.arenaCompare)
            
			# 结果评估与决策：
            if (
                pwins + nwins == 0  # 如果新旧网络在对抗中都没有获胜（pwins + nwins == 0），则意味着无论哪个网络都没有表现出足够的能力。
                or float(nwins) / (pwins + nwins) < self.args.updateThreshold  # 如果新网络的胜利次数与总对战数的比例低于一个指定的更新阈值。
            ):
                # 训练失败次数 +1
                self.consecutive_failures += 1
                log.info(
                    f"Iter #{i} - new vs previous: {nwins}-{pwins}  ({draws} draws) --> REJECTED ({self.consecutive_failures})"
                )
                if (
                    self.consecutive_failures >= self.args.stop_after_N_fail
                    and i < self.args.numIters
                ):
                    # 这里再次检查，如果当前的连续失败计数达到了一个事先设定的停止阈值（stop_after_N_fail），
					# 并且当前迭代数尚未达到最大迭代次数，则记录错误日志并终止程序。
					# 这个逻辑用于防止模型在性能不佳的情况下无休止地进行训练。
                    log.error(
                        "Exceeded threshold number of consecutive fails, stopping process"
                    )
                    exit()
                self.nnet.load_checkpoint(
                    folder=self.args.checkpoint, filename="temp.pt"
                )
            else:
                # 接受新网络
                log.info(
                    f"Iter #{i} - new vs previous: {nwins}-{pwins}  ({draws} draws) --> ACCEPTED"
                )
                # 
                self.nnet.save_checkpoint(
                    folder=self.args.checkpoint,
                    filename=self.getCheckpointFile(i),
                    additional_keys=vars(self.args),
                )
                # 将新网络的状态保存到检查点，并命名为当前迭代的文件名以及另一个最佳状态文件 best.pt。
                self.nnet.save_checkpoint(
                    folder=self.args.checkpoint,
                    filename="best.pt",
                    additional_keys=vars(self.args),
                )
                # 将 consecutive_failures 重置为 0，表示当前没有连续失败。
                self.consecutive_failures = 0

    def getCheckpointFile(self, iteration):
        # 生成检查点文件的名称。
        return "checkpoint_" + str(iteration) + ".pt"

    def saveTrainExamples(self):
        # 将当前的训练示例历史记录保存到文件中。
        folder = self.args.checkpoint
        if not os.path.exists(folder):
            os.makedirs(folder)
        filename = os.path.join(folder, "checkpoint.examples")
        with open(filename, "wb") as f:
            pickle.dump(self.trainExamplesHistory, f)

    def loadTrainExamples(self):
        # 加载先前保存的训练示例。
        modelFile = self.args.load_folder_file
        examplesFile = os.path.dirname(modelFile) + "/checkpoint.examples"
        # 处理压缩和数据清理
        if not os.path.isfile(examplesFile):
            log.warning(f'File "{examplesFile}" with trainExamples not found!')
            if not self.args.useray:
                r = input("Continue? [y|n]")
                if r != "y":
                    sys.exit()
            return

        log.info("File with trainExamples found. Loading it...")
        with open(examplesFile, "rb") as f:
            self.trainExamplesHistory = pickle.load(f)

        # Harmonize compression use in loaded examples
        if (
            type(self.trainExamplesHistory[0][0]) is tuple
            and not self.args.no_compression
        ):
            for i in range(len(self.trainExamplesHistory)):
                for j in range(len(self.trainExamplesHistory[i])):
                    self.trainExamplesHistory[i][j] = zlib.compress(
                        pickle.dumps(self.trainExamplesHistory[i][j]), level=1
                    )
        elif (
            type(self.trainExamplesHistory[0][0]) is not tuple
            and self.args.no_compression
        ):
            for i in range(len(self.trainExamplesHistory)):
                for j in range(len(self.trainExamplesHistory[i])):
                    self.trainExamplesHistory[i][j] = pickle.loads(
                        zlib.decompress(self.trainExamplesHistory[i][j])
                    )
        log.info("Loading done!")

        # cleaning
        # 数据清理
        if len(self.trainExamplesHistory) > self.args.numItersHistory:
            self.trainExamplesHistory = self.trainExamplesHistory[
                -self.args.numItersHistory :
            ]
            log.info("Reduced history in loaded examples")
        for history in self.trainExamplesHistory:
            if len(history) > self.args.maxlenOfQueue:
                for _ in range(len(history), self.args.maxlenOfQueue, -1):
                    history.pop()
                log.info("Reduced nb of items in one history of loaded examples")


def applyTemperatureAndNormalize(probs, temperature):
    """
    接收两个参数，probs 是一个包含概率的列表，temperature 是影响选择随机性的一个浮点数。
    """
    if temperature == 0:
        # 如果 temperature 为 0，只走概率最大的那个动作（概率为 1，其它全为 0）。
        bests = np.array(np.argwhere(probs == np.max(probs))).flatten()
        result = [0] * len(probs)
        result[np.random.choice(bests)] = 1
    else:
        result = [x ** (1.0 / temperature) for x in probs]
        result_sum = float(sum(result))
        result = [x / result_sum for x in result]
    # 返回执行的概率分布。
    return result


def random_pick(probs, temperature=1.0):
    # 接受一个概率列表 probs 和一个温度参数（默认值为 1.0）。
    # 调用 applyTemperatureAndNormalize 函数来获取应用温度和归一化后的概率分布 probs_with_temp。
    probs_with_temp = applyTemperatureAndNormalize(probs, temperature)
    # 使用 np.random.choice 函数，根据 probs_with_temp 中的概率进行随机选择，返回选中的索引。
    pick = np.random.choice(len(probs_with_temp), p=probs_with_temp)
    return pick


if __name__ == "__main__":
    """
    加载多个 .examples 文件，处理文件中的数据（可以选择性地将策略向量二值化），并将处理后的数据保存为新的文件。
    """
    import argparse

    parser = argparse.ArgumentParser(description="Examples loader")
    parser.add_argument(
        "input",
        metavar="example filename",
        nargs="*",
        help="list of examples to load (.examples files)",
    )
    parser.add_argument(
        "--output",
        "-o",
        action="store",
        default="../results/new",
        help="Prefix for output files",
    )
    parser.add_argument(
        "--binarize", "-b", action="store_true", help="Transform policy into binary one"
    )
    args = parser.parse_args()

    training, testing = [], []
    for filename in args.input:
        print(f"Loading {filename}...")
        with open(filename, "rb") as f:
            new_input = pickle.load(f)
            print(
                f"size = {[len(x) for x in new_input]}, total = {sum([len(x) for x in new_input])}"
            )
            training += new_input[:-1]
            testing += [list(x)[::8] for x in new_input[-1:]]  # Remove symmetries

    # for filename in args.input:
    #     print(f'Loading {filename}...')
    #     with open(filename, "rb") as f:
    #         new_input = pickle.load(f)
    #         print(f'size = {[len(x) for x in new_input]}, total = {sum([len(x) for x in new_input])}')
    #         training += new_input[-3:]
    # testing = [list(training[-1])[::8]]
    # training = training[:-1]

    if args.binarize:
        print("Binarizing policy...")
        for t in [training, testing]:
            for i in range(len(t)):
                print(i, end=" ")
                for j in range(len(t[i])):
                    data = pickle.loads(zlib.decompress(t[i][j]))
                    policy = data[1]
                    bestA = np.argmax(policy)
                    new_policy = np.zeros_like(policy)
                    new_policy[bestA] = 1
                    data = (data[0], new_policy, data[2], data[3], data[4], data[5])
                    t[i][j] = zlib.compress(pickle.dumps(data), level=1)
            print()

    # breakpoint()

    for t, name in [(training, "training"), (testing, "testing")]:
        filename = args.output + "_" + name + ".examples"
        print(
            f"total size {name} = {sum([len(x) for x in t])} --> writing to {filename}"
        )
        with open(filename, "wb") as f:
            pickle.dump(t, f)
        # print(f'Testing...')
        # with open(filename, "rb") as f:
        #     new_input = pickle.load(f)
        #     print(f'size = {[len(x) for x in new_input]}, total = {sum([len(x) for x in new_input])}')
