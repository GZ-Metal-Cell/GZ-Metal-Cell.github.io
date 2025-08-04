import logging
log = logging.getLogger(__name__)

import bisect
from tqdm import trange
import zlib
import base64

from MCTS import MCTS

class Arena():
    """
    An Arena class where any 2 agents can be pit against each other.
    在一个游戏环境中让两个玩家(人或 AI)进行对抗。
    """

    def __init__(self, player1, player2, game, display=None):
        """
        Input:
            player 1,2: two functions that takes board as input, return action
            game: Game object
            display: a function that takes board as input and prints it (e.g.
                     display in othello/OthelloGame). Is necessary for verbose
                     mode.

        see othello/OthelloPlayers.py for an example. See pit.py for pitting
        human players/other baselines with each other.
        """
        self.player1 = player1
        self.player2 = player2
        self.game = game  # 游戏对象，包含规则和状态
        self.display = display  # 是否以可视方式打印棋盘状态
        

    def playGame(self, initial_state="", verbose=False, other_way=False):
        """
        Executes one episode of a game.

        Returns:
            either
                winner: player who won the game (1 if player1, -1 if player2)
            or
                draw result returned from the game that is neither 1, -1, nor 0.
        在游戏环境中执行一次完整的游戏对局，包括两个玩家（或更高数量的玩家）之间的交互，直到游戏结束，最终返回游戏的结果。
        verbose 用于控制是否输出详细的游戏过程信息
        """
        # if NUMBER_PLAYERS == 2:
        #     players = [self.player2, self.player1]                             if other_way else [self.player1, self.player2]
        # elif NUMBER_PLAYERS == 3:
        #     players = [self.player2, self.player1, self.player1]               if other_way else [self.player1, self.player2, self.player2]
        # elif NUMBER_PLAYERS == 4:
        #     players = [self.player2, self.player1, self.player1, self.player1] if other_way else [self.player1, self.player2, self.player2, self.player2]
        # elif NUMBER_PLAYERS == 5:
        #     players = [self.player2, self.player1, self.player1, self.player1] if other_way else [self.player1, self.player2, self.player2, self.player2]
        # 决定玩家的顺序
        if not other_way:
            players = [self.player1]+[self.player2]*(self.game.getNumberOfPlayers()-1)
        else:
            players = [self.player2]+[self.player1]*(self.game.getNumberOfPlayers()-1)
        # 初始化游戏状态
        # curPlayer: 当前行动的玩家索引，初始为 0。
        # it: 记录回合数，从 0 开始。
        # board: 获取游戏的初始棋盘状态。
        curPlayer, it = 0, 0
        # 获取游戏的初始棋盘状态。
        board = self.game.getInitBoard()

        # Load initial state
        if initial_state != "":
            # 如果传入了初始状态，则解码并重构棋盘状态。
            from numpy import frombuffer, int8
            data = zlib.decompress(base64.b64decode(initial_state), wbits=-15)
            board = frombuffer(data[:-3], dtype=int8).reshape(board.shape)
            curPlayer, it = int(data[-3]), int.from_bytes(data[-2:])

        # 循环直到游戏结束。游戏者在每一轮中采取行动。
        while not self.game.getGameEnded(board, curPlayer).any():
            it += 1
            if verbose:
                if self.display:
                    # 显示棋盘
                    self.display(board)
                print()
                print(f'Turn {it} Player {curPlayer}: ', end='')        
            
            # 获取当前玩家的标准棋盘形式。
            canonical_board = self.game.getCanonicalForm(board, curPlayer)
            # 执行玩家的动作。
            action = players[curPlayer](canonical_board, it)
            # 检查玩家的选择是否合法。如果不合法，抛出异常。
            valids = self.game.getValidMoves(canonical_board, 0)

            if verbose:
                print(f'P{curPlayer} decided to {self.game.moveToString(action, curPlayer)}')

            if valids[action] == 0:
                # 检查玩家的选择是否合法。如果不合法，抛出异常。
                assert valids[action] > 0
            # 根据行动更新棋盘状态。
            board, curPlayer = self.game.getNextState(board, curPlayer, action)
            # 转换当前玩家索引。
            curPlayer = int(curPlayer)

            if verbose:
                # 将游戏状态（棋盘状态、当前玩家索引、回合数）压缩成一个字符串 state
                # data = board.tobytes() + curPlayer.to_bytes(1) + it.to_bytes(2)
                data = board.tobytes() + curPlayer.to_bytes(1, byteorder='big') + it.to_bytes(2, byteorder='big')
                # compressed_board = base64.b64encode(zlib.compress(data, level=9, wbits=-15))
                compressobj = zlib.compressobj(level=9, method=zlib.DEFLATED, wbits=-15)
                compressed_board = base64.b64encode(compressobj.compress(data) + compressobj.flush())
                print(f'state = "{str(compressed_board, "UTF-8")}"')
        
        # 显示游戏结果
        if verbose:
            if self.display:
                self.display(board)
            print("Game over: Turn ", str(it), "Result ", self.game.getGameEnded(board, curPlayer))
        else:
            if initial_state != "":
                print(f"Game over: {self.game.getScore(board, 0)} - {self.game.getScore(board, 1)}")

        # 调用 MCTS 重置所有搜索树
        MCTS.reset_all_search_trees()
        
        # 返回游戏结果（胜负或者平局）。
        return self.game.getGameEnded(board, curPlayer)[0]

    def playGames(self, num, initial_state="", verbose=False):
        """
        Plays num games in which player1 starts num/2 games and player2 starts
        num/2 games.
        
        用于在两个智能体之间进行多局对抗赛，功能主要是记录和统计比赛结果。
        
        num：进行的比赛局数。
        initial_state：可选参数，指定比赛的初始状态。
        verbose：可选布尔参数，控制是否输出详细信息。

        Returns:
            oneWon: games won by player1
            twoWon: games won by player2
            draws:  games won by nobody
        """
        # 用于定义胜率区间。
        ratio_boundaries = [        1-0.60,        1-0.55,        0.55,        0.60         ]
        # 列表为不同胜率级别设置颜色代码。(红色、橙色、黄色、绿色)
        colors           = ['#d60000',     '#d66b00',     '#f9f900',   '#a0d600',  '#6b8e00'] #https://icolorpalette.com/ff3b3b_ff9d3b_ffce3b_ffff3b_ceff3b
        # 分别用于记录两名玩家的获胜局数和平局数。
        oneWon, twoWon, draws = 0, 0, 0
        # 创建一个进度条，显示当前比赛的进度。
        t = trange(num, desc="Arena.playGames", ncols=120, disable=None)
        for i in t:
            # Since trees may not be resetted, the first games (1vs2) can't be
            # considered as fair as the last games (2vs1). Switching between 
            # 1vs2 and 2vs1 like below seems more fair:
            # 1 2 2 1   1 2 2 1  ...
            # 循环进行 num 局比赛。
            # one_vs_two 决定当前局是 player1 先手还是 player2 先手。
            # 利用 playGame 方法执行一局游戏，获取游戏结果。
            one_vs_two = (i%4 == 0) or (i%4 == 3) or (initial_state != "")
            t.set_description('Arena ' + ('(1 vs 2)' if one_vs_two else '(2 vs 1)'), refresh=False)
            # 根据比赛结果更新每个玩家的胜利和失败计数。
            gameResult = self.playGame(verbose=verbose, initial_state=initial_state, other_way=not one_vs_two)
            # 更新进度条信息
            if gameResult == (1. if one_vs_two else -1.):
                oneWon += 1
            elif gameResult == (-1. if one_vs_two else 1.):
                twoWon += 1
            else:
                draws += 1

            t.set_postfix(one_wins=oneWon, two_wins=twoWon, refresh=False)
            ratio = oneWon / (oneWon+twoWon) if oneWon+twoWon>0 else 0.5
            t.colour = colors[bisect.bisect_right(ratio_boundaries, ratio)]
        # 结束进度条
        t.close()
        # 返回结果
        return oneWon, twoWon, draws
