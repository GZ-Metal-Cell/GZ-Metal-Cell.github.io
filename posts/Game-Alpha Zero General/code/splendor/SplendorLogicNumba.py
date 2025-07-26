from .SplendorLogic import np_all_nobles, np_all_cards_1, np_all_cards_2, np_all_cards_3, len_all_cards, np_different_gems_up_to_2, np_different_gems_up_to_3, np_cards_symmetries, np_reserve_symmetries
import numpy as np
from numba import njit
import numba

############################## BOARD DESCRIPTION ##############################
##############################      棋盘描述      ##############################
# Board is described by a 56x7 array (1st dim is larger with 3-4 players)
# 棋盘由一个 56x7 的数组描述（当有 3-4 个玩家时，第一个维度较大）
# Gems and Nobles are represented using 1 line. Each is described by 7 values
# 宝石和贵族使用 1 行表示。每个由 7 个值描述。
#####   0      1      2      3      4      5      6
##### White  Blue   Green   Red   Black   Gold  Points 
#
# Cards are represented using 2 lines
# 卡牌使用 2 行表示
#####          0      1      2      3      4      5      6
##### line0: White  Blue   Green  Red    Black    -      -     [ cost ]
##### line1: White  Blue   Green  Red    Black    -   Points   [ gain ]
# First line describes what is needed to buy the card, second line describes
# the card offers once bought (one of the color has value 1, others are 0)
# 第一行描述购买卡牌所需的宝石，
# 第二行描述购买卡牌后的收益（每种颜色只有一个值为 1，其余为 0）（独热编码）
#
# Here is the description of each line of the board. For readibility, we defined
# "shortcuts" that actually are views (numpy name) of overal board.
# 以下是棋盘每一行的描述。为了易读性，我们定义了“快捷方式”，这些快捷方式实际上是整个棋盘的视图（numpy 名称）。
##### Index  Shortcut              Meaning
#####  索引   快捷方式                含义
#####   0    self.bank             Number of gems in bank, including gold 银行中的宝石数量，包括黄金
#####  1-2   self.cards_tiers      Description of 1st visible card (bottom left) 描述第一个可见卡牌（底部左侧）
#####  3-4       =                 Description of 2nd visible card (bottom) 描述第二个可见卡牌（底部）
#####  5-6       =                 Description of 3rd visible card (bottom) 描述第三个可见卡牌（底部）
#####  7-8       =                 Description of 4th visible card (bottom right) 描述第四个可见卡牌（底部右侧）
#####  9-10      =                 Description of 5th visible card (middle left) 描述第五个可见卡牌（中左）
#####  ...       =
#####  25    self.nb_deck_tiers    How many cards of each color in bottom deck 底部卡牌堆中每种颜色的卡牌数量
#####  26        =                 Bitfield listing which cards are in bottom deck 一个位域，列出哪些卡牌在底部卡牌堆中
#####  27        =                 How many cards of each color in middle deck 一个位域，列出哪些卡牌在底部卡牌堆中
#####  ...       =
#####  31    self.nobles           Description of 1st noble in bank  银行中第一个贵族的描述
#####  32        =                 Description of 2nd noble in bank  银行中第二个贵族的描述
#####  33        =                 Description of 3rd noble in bank  银行中第三个贵族的描述
#####  34    self.players_gems     Number of gems owned by Player0, including gold 玩家 0 拥有的宝石数量，包括黄金
#####  35        =                 Number of gems owned by Player1, including gold 玩家 1 拥有的宝石数量，包括黄金
#####  36    self.players_nobles   Description of 1st noble owned by Player0 玩家 0 拥有的第一个贵族的描述
#####  ...       =
#####  39        =                 Description of 1st noble owned by Player1 玩家 1 拥有的第一个贵族的描述
#####  ...       =
#####  42    self.players_cards    Number of cards owned by Player0, including sum of ther points 玩家 0 拥有的卡牌数量，包括所有卡牌的点数总和
#####  43        =                 Number of cards owned by Player1, including sum of ther points 玩家 1 拥有的卡牌数量，包括所有卡牌的点数总和
##### 44-45  self.players_reserved Description of 1st reserved card by Player0 玩家 0 保留的第一个卡牌的描述
#####  ...       =
##### 50-51      =                 Description of 1st reserved card by Player1 self.players_reserved 玩家 1 保留的第一个卡牌的描述
#####  ...       =
# Indexes above are assuming 2 players, you can have more details in copy_state().
# 以上索引假设有 2 个玩家，你可以在 copy_state() 中查看更多详细信息。
# When a noble is won, its value is defined to zero, and other nobles stay in
# place (not shifted). The won noble uses same slot index on player side.
# 当一个贵族被赢得时，其值被设为零，其他贵族保持原位（不会移动）。被赢得的贵族使用相同的索引位置。
# When a card slot is empty (bank or player reserve), both lines are set to zero.
# 当卡牌槽为空（银行或玩家保留的卡牌槽），两行的值都设置为零。

############################## ACTION DESCRIPTION #############################
###################################  动作描述 ##################################
# We coded 81 actions, taking some shortcuts on combinations of gems that can be
# got or that can be given back, and forbidding to simultaneously get gems and
# give some back.
# 我们编写了 81 个动作，简化了可以获得或返还的宝石组合，并禁止同时获得和返还宝石。
# Here is description of each action:
##### Index  Meaning
#####   0    Buy 1st visible card (bottom left) 购买第一个可见卡牌（底部左侧）
#####   1    Buy 2nd visible card (bottom) 购买第二个可见卡牌（底部）
#####   2    Buy 3rd visible card (bottom) 购买第三个可见卡牌（底部）
#####   3    Buy 4th visible card (bottom right) 购买第四个可见卡牌（底部右侧）
#####   4    Buy 5th visible card (middle left) 购买第五个可见卡牌（中左）
#####  ...
#####   12   Reserve 1st visible card 保留第一个可见卡牌
#####  ...
#####   24   Reserve blindly card for bottom deck 保留底部卡牌堆中的卡牌
#####   25   Reserve blindly card for middle deck 保留中间卡牌堆中的卡牌
#####   26   Reserve blindly card for top deck 保留顶部卡牌堆中的卡牌
#####   27   Buy 1st card from player's reserve 从玩家的保留区购买第一个卡牌
#####   28   Buy 2nd card from player's reserve 从玩家的保留区购买第二个卡牌
#####   29   Buy 3rd card from player's reserve 从玩家的保留区购买第三个卡牌
#####   30   Get 1st combination of different gems (up to 3) 获取第一种不同宝石的组合（最多 3 种）
#####   31   Get 2nd combination of different gems (up to 3) 获取第二种不同宝石的组合（最多 3 种）
#####  ...
#####   55   Get 2 identical gems of color 0 = white 获取 2 个相同的白色宝石
#####  ...
#####   60   Give back 1st combination of different gems (up to 2) 返还第一种不同宝石的组合（最多 2 种）
#####  ...
#####   75   Give back 2 identical gems of color 0 = white 返还 2 个相同的白色宝石
#####  ...
#####   80   No action, pass 不进行任何操作，跳过
# List of combinations of gems for actions 30-79 are in variables
# list_different_gems_up_to_2 and list_different_gems_up_to_3 in file SplendorLogic
# 对于 30-79 号动作中宝石的组合列表，见 SplendorLogic 文件中的 list_different_gems_up_to_2 和 list_different_gems_up_to_3 变量。

# 定义了七个常量索引，分别对应不同颜色的宝石（白、蓝、绿、红、黑）、黄金宝石和积分。
idx_white, idx_blue, idx_green, idx_red, idx_black, idx_gold, idx_points = range(7)
# mask 用于按位操作，以便将数组中的特定位进行打包。这可以在后面的编码和解码过程中使用。
mask = np.array([128, 64, 32, 16, 8, 4, 2, 1], dtype=np.uint8)
# mask2 是和宝石颜色相关的掩码，用于其他的位操作。
mask2 = 2**(5*np.arange(idx_gold))

@njit(cache=True, fastmath=True, nogil=True)
def observation_size(num_players):
    """
    这个函数计算并返回游戏状态（观察值）的大小。参数 num_players 确定了玩家数量，根据玩家数量动态调整返回的数组尺寸。
    """
    return (32 + 10*num_players + num_players*num_players, 7)

@njit(cache=True, fastmath=True, nogil=True)
def action_size():
    """
    返回一个固定的动作数量（81），该数字由游戏的具体规则决定。
    """
    return 81

@njit(cache=True, fastmath=True, nogil=True)
def my_random_choice(prob):
    """
    该函数根据给定的概率数组 prob 进行随机选择。它首先计算累积概率，然后使用随机数决定选择哪个动作，返回的结果是选择的索引。
    """
    result = np.searchsorted(np.cumsum(prob), np.random.random(), side="right")
    return result

@njit(cache=True, fastmath=True, nogil=True)
def my_packbits(array):
    """
    该函数将传入的二进制数组 array 压缩成一个整数。
    """
    product = np.multiply(array.astype(np.uint8), mask[:len(array)])
    return product.sum()

@njit(cache=True, fastmath=True, nogil=True)
def my_unpackbits(value):
    """
    该函数将一个整数解压缩回一个二进制数组。
    """
    return (np.bitwise_and(value, mask) != 0).astype(np.uint8)

@njit(cache=True, fastmath=True, nogil=True)
def np_all_axis1(x):
    """
    该函数用于检查输入的二维数组 x 每一列的所有值是否均为 True（非零）。
    """
    out = np.ones(x.shape[0], dtype=np.bool_)
    for i in range(x.shape[1]):
        out = np.logical_and(out, x[:, i])
    return out


spec = [
    ('num_players'         , numba.int8),  # 游戏的玩家数量
    ('current_player_index', numba.int8),  # 当前进行回合的玩家索引
    ('num_gems_in_play'    , numba.int8),  # 在游戏中可用的宝石数量
    ('num_nobles'          , numba.int8),  # 在游戏中可用的贵族数量
    ('max_moves'           , numba.uint8),  # 游戏中的最大回合数
    ('score_win'           , numba.int8),  # 赢得游戏所需的分数

    ('state'           , numba.int8[:,:]),  # 游戏的状态，通常是一个二维数组
    ('bank'            , numba.int8[:,:]),  # 银行的状态，包括可用的宝石数量
    ('cards_tiers'     , numba.int8[:,:]),  # 表示不同阶层的卡牌状态
    ('nb_deck_tiers'   , numba.int8[:,:]),  # 表示牌堆中的卡牌数量，按色别分类
    ('nobles'          , numba.int8[:,:]),  # 表示存放贵族的状态
    ('players_gems'    , numba.int8[:,:]),  # 表示每个玩家所拥有的宝石数量
    ('players_nobles'  , numba.int8[:,:]),  # 表示每个玩家所拥有的贵族
    ('players_cards'   , numba.int8[:,:]),  # 表示每个玩家所持有的卡牌
    ('players_reserved', numba.int8[:,:]),  # 表示每个玩家所保留的卡牌
]


@numba.experimental.jitclass(spec)
class Board():
    def __init__(self, num_players):
        n = num_players
        # 存储玩家人数
        self.num_players = n
        # 当前进行游戏的玩家索引，初始化为 0（表示第一个玩家）
        self.current_player_index = 0
        # 根据玩家人数设置游戏中可用的宝石数量（2 名玩家为 4 颗，3 名玩家为 5 颗，4 名玩家为 7 颗）
        self.num_gems_in_play = {2: 4, 3: 5, 4: 7}[n]
        # 根据玩家人数设置可用的贵族数量（2 名玩家为 3 个，3 名玩家为 4 个，4 名玩家为 5 个）
        self.num_nobles = {2:3, 3:4, 4:5}[n]
        # 游戏的最大回合数（62 * 玩家数量）。
        self.max_moves = 62 * num_players
        # 设定获胜所需的分数为 15
        self.score_win = 15
        # 使用 observation_size 函数初始化状态数组，记录游戏状态
        self.state = np.zeros(observation_size(self.num_players), dtype=np.int8)
        # 调用初始化游戏的方法
        self.init_game()

    def get_score(self, player):
        """
        计算并返回指定玩家的当前得分。
		得分由玩家所拥有的卡牌积分和贵族积分相加而成。
        """
        card_points  = self.players_cards[player, idx_points]
        noble_points = self.players_nobles[player*3:player*3+3, idx_points].sum()
        return card_points + noble_points

    def init_game(self):
        # 方法将当前状态拷贝为一个零状态
        self.copy_state(np.zeros(observation_size(self.num_players), dtype=np.int8), copy_or_not=False)

        # Bank
        # 银行的初始状态设置为可用宝石的数量与当前积分。
        self.bank[:] = np.array([[self.num_gems_in_play]*5 + [5, 0]], dtype=np.int8)
        # Decks
        for tier in range(3):
            nb_deck_cards_per_color = len_all_cards[tier]
            # HOW MANY cards per color are in deck of tier 0, pratical for NN
            self.nb_deck_tiers[2*tier,:idx_gold] = nb_deck_cards_per_color
            # WHICH cards per color are in deck of tier 0, pratical for logic
            self.nb_deck_tiers[2*tier+1,:idx_gold] = my_packbits(np.ones(nb_deck_cards_per_color, dtype=np.int8))
        # Tiers
        for tier in range(3):
            for index in range(4):
                self._fill_new_card(tier, index, False)
        # Nobles
        nobles_indexes = np.random.choice(len(np_all_nobles), size=self.num_nobles, replace=False)
        for i, index in enumerate(nobles_indexes):
            self.nobles[i, :] = np_all_nobles[index]

    def get_state(self):
        """
        返回当前的游戏状态数组
        """
        return self.state

    def valid_moves(self, player):
        """
        验证指定玩家可以执行的动作，返回一串 bool 数组。
        """
        result = np.zeros(81, dtype=np.bool_)
        result[0         :12]            = self._valid_buy(player)
        result[12        :12+15]         = self._valid_reserve(player)
        result[12+15     :12+15+3]       = self._valid_buy_reserve(player)
        result[12+15+3   :12+15+3+30]    = np.concatenate((self._valid_get_gems(player) , self._valid_get_gems_identical(player)))
        result[12+15+3+30:12+15+3+30+20] = np.concatenate((self._valid_give_gems(player), self._valid_give_gems_identical(player)))
        result[80] = True  # empty move
        return result

    def make_move(self, move, player, random_seed):
        if move < 12:  # 0-12 是购买可见卡牌动作
            self._buy(move, player, random_seed)
        elif move < 12+15:  # 12-27 是保留卡牌动作
            self._reserve(move-12, player, random_seed)
        elif move < 12+15+3:  # 27-30 是购买保留卡牌动作
            self._buy_reserve(move-12-15, player)
        elif move < 12+15+3+30:  # 30-59 是获得宝石动作
            self._get_gems(move-12-15-3, player)
        elif move < 12+15+3+30+20:  # 59-79 是扔掉宝石动作
            self._give_gems(move-12-15-3-30, player)
        else:
            pass # empty move 80 是空过
        
        # 在执行完动作后，银行中的当前积分会增加 1，表示已经进行了一轮。
        self.bank[0][idx_points] += 1 # Count number of rounds

		# 计算并返回下一个玩家的索引
        return (player+1)%self.num_players

    def copy_state(self, state, copy_or_not):
        """
        复制和管理游戏状态。
        """
        if self.state is state and not copy_or_not:  # 检查是否需要复制状态：
            return
        self.state = state.copy() if copy_or_not else state  # 状态更新
        n = self.num_players  # 提取玩家数量
        self.bank             = self.state[0         :1          ,:]    # 1 游戏状态数组的第一行（银行状态，包含可用的宝石数量等）赋值给 self.bank
        self.cards_tiers      = self.state[1         :25         ,:]    # 2*12 将 state 中行 1 到 24 的数据（通常为游戏中可见卡牌的状态）赋值给 self.cards_tiers，即每个阶层的卡牌状态。
        self.nb_deck_tiers    = self.state[25        :31         ,:]    # 6 将 state 中行 25 到 30 的数据（包含各颜色牌堆的数量等信息）赋值给 self.nb_deck_tiers。
        self.nobles           = self.state[31        :32+n       ,:]    # N+1 从 state 中提取贵族的信息，并赋值给 self.nobles，这部分通常与玩家数量相关。
        self.players_gems     = self.state[32+n      :32+2*n     ,:]    # N 将 state 中关于玩家宝石状态的数据提取并赋值给 self.players_gems。
        self.players_nobles   = self.state[32+2*n    :32+3*n+n*n ,:]    # N*(N+1) 将关于玩家贵族的信息提取并赋值给 self.players_nobles，此行代码使用了 n*n 来考虑各玩家拥有的贵族数。
        self.players_cards    = self.state[32+3*n+n*n:32+4*n+n*n ,:]    # N 把玩家持有的卡牌状态从 state 中提取并赋值给 self.players_cards。
        self.players_reserved = self.state[32+4*n+n*n:32+10*n+n*n,:]    # 6*N 最后，将每个玩家所保留的卡牌信息从 state 中提取并赋值给 self.players_reserved。


    def check_end_game(self):
        # 这段代码首先确认当前的回合数是否是一个玩家回合的开始（即是否为第一个玩家的回合）。如果不是，返回一个数组，表示没有玩家获胜（所有值为 0）。
        if self.get_round() % self.num_players != 0: # Check only when 1st player is about to play
            return np.full(self.num_players, 0., dtype=np.float32)
        # 这里通过 get_score 方法计算所有玩家的分数，并找到最高分数。
        # 如果最高分数大于或等于胜利所需的分数（self.score_win），或者当前回合数超过最大回合数（self.max_moves），则游戏结束。
        scores = np.array([self.get_score(p) for p in range(self.num_players)], dtype=np.float32)
        score_max = scores.max()
        end = (score_max >= self.score_win) or (self.get_round() >= self.max_moves)
        if not end:
            return np.full(self.num_players, 0., dtype=np.float32)
        # 确定哪些玩家达到了最高分。如果有多个玩家的分数相同，则标记为平局
        who_has_won = (scores == score_max)
        several_winners = (who_has_won.sum() > 1)
        # Resolve tie by applying penalty in function of nb of cards
        # 如果存在平局，循环遍历所有玩家，按拥有的卡牌数量对分数进行惩罚（每100分减少一个拥有的卡牌数量）。然后重新计算最高分数及赢家
        if several_winners:
            for p in range(self.num_players):
                scores[p] -= self._nb_of_cards(p) / 100.
                score_max = scores.max()
                who_has_won = (scores == score_max)
                several_winners = (who_has_won.sum() > 1)
        
        # 返回一个数组。如果只有一个获胜者，返回 1；如果有平局，返回 0.01；如果没有获胜者，返回 -1
        return np.where(who_has_won > 0, 0.01 if several_winners else 1., -1.).astype(np.float32)

    # if n=1, transform P0 to Pn, P1 to P0, ... and Pn to Pn-1
    # else do this action n times
    def swap_players(self, nb_swaps):
        """
        这个函数的目的是在游戏过程中根据指定的交换数量来改变玩家的状态（如宝石、贵族、卡牌和保留的卡牌）。
        比如在一个有 3 个玩家的游戏中，如果我们进行 1 次交换，原本玩家0的状态将转换为玩家 1 的状态，
        玩家 1 的状态转换为玩家2的状态，而玩家 2 的状态则再次转换为玩家0的状态，形成一个循环。
        """
        def _roll_in_place_axis0(array, shift):
            tmp_copy = array.copy()
            size0 = array.shape[0]
            for i in range(size0):
                array[i,:] = tmp_copy[(i+shift)%size0,:]
        _roll_in_place_axis0(self.players_gems    , 1*nb_swaps)
        _roll_in_place_axis0(self.players_nobles  , 3*nb_swaps)
        _roll_in_place_axis0(self.players_cards   , 1*nb_swaps)
        _roll_in_place_axis0(self.players_reserved, 6*nb_swaps)

    def get_symmetries(self, policy, valid_actions):
        """
        这个函数用于获取当前状态、策略和有效动作的对称性。其核心目的是通过不同方式的排列来扩展当前状态的信息。
        通过这种方式，能够扩展当前策略信息，提供更多的探索选项，以支持强化学习或者其它决策算法的训练。
        """
        def _swap_cards(cards, permutation):
            # 首先创建一个全排列列表 full_permutation，然后通过复制原始卡牌的状态，将下标进行转换，实现卡牌的重新排列。
            full_permutation = [2*p+i for p in permutation for i in range(2)]
            cards_copy = cards.copy()
            for i in range(len(permutation)*2):
                cards[i, :] = cards_copy[full_permutation[i], :]
        def _copy_and_permute(array, permutation, start_index):
            # 将传入数组（array）在指定起始索引（start_index）之后的元素按照给定排列进行重新排列。
            new_array = array.copy()
            for i, p in enumerate(permutation):
                new_array[start_index+i] = array[start_index+p]
            return new_array
        def _copy_and_permute2(array, permutation, start_index, other_start_index):
            # 与上一个函数相似，但首先会对两个起始索引（start_index 和 other_start_index）进行处理。
            new_array = array.copy()
            for i, p in enumerate(permutation):
                new_array[start_index      +i] = array[start_index      +p]
                new_array[other_start_index+i] = array[other_start_index+p]
            return new_array

        symmetries = [(self.state.copy(), policy.copy(), valid_actions.copy())]
        # Permute common cards within same tier
        for tier in range(3):
            for permutation in np_cards_symmetries:
                cards_tiers_backup = self.cards_tiers.copy()
                _swap_cards(self.cards_tiers[8*tier:8*tier+8, :], permutation)
                new_policy = _copy_and_permute2(policy, permutation, 4*tier, 12+4*tier)
                new_valid_actions = _copy_and_permute2(valid_actions, permutation, 4*tier, 12+4*tier)
                symmetries.append((self.state.copy(), new_policy, new_valid_actions))
                self.cards_tiers[:] = cards_tiers_backup
        
        # Permute reserved cards
        for player in range(self.num_players):
            nb_reserved_cards = self._nb_of_reserved_cards(player)
            for permutation in np_reserve_symmetries[nb_reserved_cards]:
                if permutation[0] < 0:
                    continue
                players_reserved_backup = self.players_reserved.copy()
                _swap_cards(self.players_reserved[6*player:6*player+6, :], permutation)
                if player == 0:
                    new_policy = _copy_and_permute(policy, permutation, 12+15)
                    new_valid_actions = _copy_and_permute(valid_actions, permutation, 12+15)
                else:
                    new_policy = policy.copy()
                    new_valid_actions = valid_actions.copy()
                symmetries.append((self.state.copy(), new_policy, new_valid_actions))
                self.players_reserved[:] = players_reserved_backup

        return symmetries

    def get_round(self):
        # 用于获取当前游戏的轮数。
        return self.bank[0].astype(np.uint8)[idx_points]

    def _get_deck_card(self, tier, random_seed):
        # 该方法用于从指定层级（tier）中获取一张卡牌，前提是该层级仍有可用卡牌。
        nb_remaining_cards_per_color = self.nb_deck_tiers[2*tier,:idx_gold]
        # 获取指定层（tier）中每种颜色剩余卡牌的数量。
        if nb_remaining_cards_per_color.sum() == 0: # no more cards
            # 检查是否还有可用的卡牌。如果总数为零，返回 None。
            return None
        
        if random_seed == 0:
            # 如果提供的random_seed为零，则随机选择一张可用卡牌。
            # First we chose color randomly, then we pick a card 
            color = my_random_choice(nb_remaining_cards_per_color/nb_remaining_cards_per_color.sum())
            remaining_cards = my_unpackbits(self.nb_deck_tiers[2*tier+1, color])
            card_index = my_random_choice(remaining_cards/remaining_cards.sum())        
        else:
            # 如果 random_seed 不为零，则使用伪随机数生成的方法选择一张可用的卡牌
            # https://stackoverflow.com/questions/3062746/special-simple-random-number-generator
            # m=avail_people_id.size, c=0, a=2*3*5*7*9*11*13*17+1
            remaining_cards_all = [ (c,i) for c in range(5) for i,b in enumerate(my_unpackbits(self.nb_deck_tiers[2*tier+1, c])) if b]
            seed = (self.nb_deck_tiers[2*tier+1, :idx_gold].astype(np.uint8) * mask2).sum()
            fake_random_index = (4594591 * (random_seed+seed)) % len(remaining_cards_all)
            color, card_index = remaining_cards_all[fake_random_index]
            remaining_cards = my_unpackbits(self.nb_deck_tiers[2*tier+1, color])

        # Update internals
        # 更新牌堆状态以反映已经取出的卡牌
        remaining_cards[card_index] = 0
        self.nb_deck_tiers[2*tier+1, color] = my_packbits(remaining_cards)
        self.nb_deck_tiers[2*tier, color] -= 1

		# 根据所选层级返回对应的卡牌实例
        if tier == 0:
            card = np_all_cards_1[color][card_index]
        elif tier == 1:
            card = np_all_cards_2[color][card_index]
        else:
            card = np_all_cards_3[color][card_index]
        return card

    def _fill_new_card(self, tier, index, random_seed):
        # 填充新的卡牌到游戏的某一层级和位置
        self.cards_tiers[8*tier+2*index:8*tier+2*index+2] = 0
        card = self._get_deck_card(tier, random_seed)
        if card is not None:
            self.cards_tiers[8*tier+2*index:8*tier+2*index+2] = card

    def _buy_card(self, card0, card1, player):
        # 处理玩家购买卡牌的逻辑
        card_cost = card0[:idx_gold]  # 提取卡牌的成本信息。
        player_gems = self.players_gems[player][:idx_gold]  # 获取当前玩家所拥有的宝石数量。
        player_cards = self.players_cards[player][:idx_gold]  # 获取当前玩家已拥有的卡牌信息。
        missing_colors = np.maximum(card_cost - player_gems - player_cards, 0).sum()  # 计算玩家在购买该卡牌时缺少的宝石颜色总数。
        # Apply changes
        paid_gems = np.minimum(np.maximum(card_cost - player_cards, 0), player_gems)  # 确定玩家所需支付的宝石数。
        player_gems -= paid_gems  # 减少玩家的宝石数量。
        self.bank[0][:idx_gold] += paid_gems  # 增加银行中的宝石数。
        self.players_gems[player][idx_gold] -= missing_colors  # 如果有缺少的色彩，用黄金补充。
        self.bank[0][idx_gold] += missing_colors  # 将缺少的黄金加至银行中。
        self.players_cards[player] += card1  # 将购买的卡牌添加到玩家的卡牌列表。

        self._give_nobles_if_earned(player)  # 检查玩家是否可以获得贵族。

    def _valid_buy(self, player):
        """
        该方法用于验证当前玩家是否能够购买可见的卡牌。
        """
        cards_cost = self.cards_tiers[:2*12:2,:idx_gold]

        player_gems = self.players_gems[player][:idx_gold]
        player_cards = self.players_cards[player][:idx_gold]
        missing_colors = np.maximum(cards_cost - player_gems - player_cards, 0).sum(axis=1)
        enough_gems_and_gold = missing_colors <= self.players_gems[player][idx_gold]
        not_empty_cards = cards_cost.sum(axis=1) != 0

		# 返回一个布尔数组，表示每张卡牌是否可以被购买。
        return np.logical_and(enough_gems_and_gold, not_empty_cards).astype(np.int8)

    def _buy(self, i, player, random_seed):
        """
        购买卡牌
        """
        tier, index = divmod(i, 4)
        self._buy_card(self.cards_tiers[2*i], self.cards_tiers[2*i+1], player)
        self._fill_new_card(tier, index, random_seed)

    def _valid_reserve(self, player):
        """
        检查当前玩家是否可以进行卡牌保留操作。
        """
        # 通过堆叠可见卡牌和牌堆中的卡牌，检查这些卡牌是否可用，即至少有一张卡牌是不为空的。
        not_empty_cards = np.vstack((self.cards_tiers[:2*12:2,:idx_gold], self.nb_deck_tiers[::2, :idx_gold])).sum(axis=1) != 0
		# 检查当前玩家的保留区域中是否有空位（最多保留 3 张卡牌）。
        allowed_reserved_cards = 3
        empty_slot = (self.players_reserved[6*player+2*(allowed_reserved_cards-1)+1][:idx_gold].sum() == 0)
        # 返回: 一个布尔数组，指示哪些可见卡牌可以被保留。
        return np.logical_and(not_empty_cards, empty_slot).astype(np.int8)

    def _reserve(self, i, player, random_seed):
        """
        实现卡牌的保留功能，允许玩家保留正在游戏中的卡牌或从牌堆中抽取卡牌。
        """
        # Detect empty reserve slot
        # 检查当前玩家的保留区域是否有空位，找出第一个空位。
        reserve_slots = [6*player+2*i for i in range(3)]
        for slot in reserve_slots:
            if self.players_reserved[slot,:idx_gold].sum() == 0:
                empty_slot = slot
                break
        
        if i < 12: # reserve visible card
            # 如果选择的是可见卡牌，则将该卡牌放入保留区，并填补新的卡牌。
            tier, index = divmod(i, 4)
            self.players_reserved[empty_slot:empty_slot+2] = self.cards_tiers[8*tier+2*index:8*tier+2*index+2]
            self._fill_new_card(tier, index, random_seed)
        else:      # reserve from deck 如果选择的是牌堆中的卡牌，则从牌堆抽取卡牌填入保留区。
            tier = i - 12
            self.players_reserved[empty_slot:empty_slot+2] = self._get_deck_card(tier, random_seed)
        
        if self.bank[0][idx_gold] > 0 and self.players_gems[player].sum() <= 9:
            # 若银行中有黄金且玩家的宝石数不超过 9，则给予玩家一颗金宝石。
            self.players_gems[player][idx_gold] += 1
            self.bank[0][idx_gold] -= 1

    def _valid_buy_reserve(self, player):
        """
        该方法用于验证当前玩家是否可以购买其保留区中的卡牌。
        """
        card_index = np.arange(3)
        cards_cost = self.players_reserved[6*player+2*card_index,:idx_gold]

        player_gems = self.players_gems[player][:idx_gold]
        player_cards = self.players_cards[player][:idx_gold]
        missing_colors = np.maximum(cards_cost - player_gems - player_cards, 0).sum(axis=1)
        enough_gems_and_gold = missing_colors <= self.players_gems[player][idx_gold]
        not_empty_cards = cards_cost.sum(axis=1) != 0

        return np.logical_and(enough_gems_and_gold, not_empty_cards).astype(np.int8)

    def _buy_reserve(self, i, player):
        """
        用于处理玩家从保留区购买卡牌的逻辑。
        """
        start_index = 6*player+2*i
        self._buy_card(self.players_reserved[start_index], self.players_reserved[start_index+1], player)
        # shift remaining reserve to the beginning
        if i < 2:
            self.players_reserved[start_index:6*player+4] = self.players_reserved[start_index+2:6*player+6]
        self.players_reserved[6*player+4:6*player+6] = 0 # empty last reserve slot

    def _valid_get_gems(self, player):
        """
        验证玩家是否可以获得多种不同宝石的组合。
        """
        gems = np_different_gems_up_to_3[:,:idx_gold]
        enough_in_bank = np_all_axis1((self.bank[0][:idx_gold] - gems) >= 0)
        not_too_many_gems = self.players_gems[player].sum() + gems.sum(axis=1) <= 10
        result = np.logical_and(enough_in_bank, not_too_many_gems).astype(np.int8)
        return result

    def _valid_get_gems_identical(self, player):
        """
        验证玩家是否可以获得两颗相同颜色的宝石
        """
        colors = np.arange(5)
        enough_in_bank = self.bank[0][colors] >= 4
        not_too_many_gems = self.players_gems[player].sum() + 2 <= 10
        result = np.logical_and(enough_in_bank, not_too_many_gems).astype(np.int8)
        return result

    def _get_gems(self, i, player):
        """
        该函数根据索引 i 和玩家 player 的信息为玩家获取相应的宝石。
        """
        if i < np_different_gems_up_to_3.shape[0]: # Different gems
            gems = np_different_gems_up_to_3[i][:idx_gold]
        else:                                      # 2 identical gems
            color = i - np_different_gems_up_to_3.shape[0]
            gems = np.zeros(5, dtype=np.int8)
            gems[color] = 2
        self.bank[0][:idx_gold] -= gems
        self.players_gems[player][:idx_gold] += gems

    def _valid_give_gems(self, player):
        """
        检查玩家是否可以返还多种不同的宝石。
        """
        gems = np_different_gems_up_to_2[:,:idx_gold]
        result = np_all_axis1((self.players_gems[player][:idx_gold] - gems) >= 0).astype(np.int8)
        return result

    def _valid_give_gems_identical(self, player):
        """
        检查玩家是否可以返还两颗相同颜色的宝石。
        """
        colors = np.arange(5)
        return (self.players_gems[player][colors] >= 2).astype(np.int8)

    def _give_gems(self, i, player):
        """
        该函数实现玩家向银行返还宝石的逻辑。
        """
        if i < np_different_gems_up_to_2.shape[0]: # Different gems
            gems = np_different_gems_up_to_2[i][:idx_gold]
        else:                                      # 2 identical gems
            color = i - np_different_gems_up_to_2.shape[0]
            gems = np.zeros(5, dtype=np.int8)
            gems[color] = 2
        self.bank[0][:idx_gold] += gems
        self.players_gems[player][:idx_gold] -= gems

    def _give_nobles_if_earned(self, player):
        """
        检查并奖励玩家获得贵族。
        """
        for i_noble in range(self.num_nobles):
            noble = self.nobles[i_noble][:idx_gold]
            if noble.sum() > 0 and np.all(self.players_cards[player][:idx_gold] >= noble):
                self.players_nobles[self.num_nobles*player+i_noble] = self.nobles[i_noble]
                self.nobles[i_noble] = 0

    def _nb_of_reserved_cards(self, player):
        """
        返回玩家在保留区内的已使用卡牌数量。
        """
        for card in range(3):
            if self.players_reserved[6*player+2*card,:idx_gold].sum() == 0:
                return card # slot 'card' is empty, there are 'card' cards
        return 3

    def _nb_of_cards(self, player):
        """
        计算并返回玩家所拥有的卡牌总数。
        """
        return self.players_cards[player, :idx_gold].sum()
