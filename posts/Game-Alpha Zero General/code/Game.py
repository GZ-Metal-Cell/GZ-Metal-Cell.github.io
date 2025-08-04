class Game():
    """
    This class specifies the base Game class. To define your own game, subclass
    this class and implement the functions below. This works when the game is
    two-player, adversarial and turn-based.
    该类是一个游戏的基类，旨在支持两个玩家的对抗性回合制游戏。通过继承这个类，用户可以定义他们自己的游戏。

    Use 1 for player1 and -1 for player2.

    See othello/OthelloGame.py for an example implementation.
    """
    def __init__(self):
        pass

    def getInitBoard(self):
        """
        Returns:
            startBoard: a representation of the board (ideally this is the form
                        that will be the input to your neural network)
            返回游戏的初始棋盘状态，通常是神经网络输入的形式。
        """
        pass

    def getBoardSize(self):
        """
        Returns:
            (x,y): a tuple of board dimensions
            返回棋盘的尺寸，以元组的形式（x，y）表示。
        """
        pass

    def getActionSize(self):
        """
        Returns:
            actionSize: number of all possible actions
            返回所有可能的动作数量，用于描述可以进行的操作。
        """
        pass

    def getNextState(self, board, player, action, random_seed=0):
        """
        Input:
            board: current board
            player: current player (1 or -1)
            action: action taken by current player
            random_seed: define seed for any random choice (MCTS exploration), 
                         or 0 for true random (real move)

        Returns:
            nextBoard: board after applying action
            nextPlayer: player who plays in the next turn (should be -player)
        
        根据当前棋盘状态、当前玩家及其采取的动作，返回下一步的棋盘状态和下一个玩家的标识。
        """
        pass

    def getValidMoves(self, board, player):
        """
        Input:
            board: current board
            player: current player

        Returns:
            validMoves: a binary vector of length self.getActionSize(), 1 for
                        moves that are valid from the current board and player,
                        0 for invalid moves
        返回一个有效移动的二进制向量，指示哪些动作是当前玩家可行的。
        """
        pass

    def getGameEnded(self, board, next_player):
        """
        Input:
            board: current board

        Returns:
            r: 0 if game has not ended. 1 if player won, -1 if player lost,
               small non-zero value for draw.
        检查游戏是否结束，返回游戏结果（如胜利、失败或平局）。
        """
        pass

    def getScore(self, board, player):
        """
        Input:
            board: current board
            player: player you want to have score (may not be current player)

        Returns:
            score of such player
        返回指定玩家在当前棋盘状态下的得分。
        """
        pass

    def getRound(self, board):
        """
        Input:
            board: current board

        Returns:
            number of played rounds so far
        返回截至目前已进行的轮数。
        """
        pass

    def getCanonicalForm(self, board, player):
        """
        Input:
            board: current board
            player: current player (1 or -1)

        Returns:
            canonicalBoard: returns canonical form of board. The canonical form
                            should be independent of player. For e.g. in chess,
                            the canonical form can be chosen to be from the pov
                            of white. When the player is white, we can return
                            board as is. When the player is black, we can invert
                            the colors and return the board.
        返回棋盘的规范形式，确保它与当前玩家无关，从而为后续的计算提供一致性。
        """
        pass

    def getSymmetries(self, board, pi, valid_actions):
        """
        Input:
            board: current board
            pi: policy vector of size self.getActionSize()

        Returns:
            symmForms: a list of [(board,pi)] where each tuple is a symmetrical
                       form of the board and the corresponding pi vector. This
                       is used when training the neural network from examples.
        返回棋盘及对应策略向量的对称形式列表，便于神经网络的训练。
        """
        pass

    def stringRepresentation(self, board):
        """
        Input:
            board: current board

        Returns:
            boardString: a quick conversion of board to a string format.
                         Required by MCTS for hashing.
        返回棋盘的字符串表示，用于哈希目的。
        """
        pass

    def getNumberOfPlayers(self):
        """
        Returns:
            number_players: Number of players that current game supports
        返回当前游戏支持的玩家数量。
        """
        pass

    def moveToString(self, move, current_player):
        """
        Input:
            move: int coding for an aciton
            current_player: index of current player

        Returns:
            string: a human representation of such move, as a printable string
        将动作编码转换为人类可读的字符串，便于打印或显示。
        """
        pass 

    def printBoard(self, numpy_board):
        """
        Input:
            numpy_board: a numpy representation of a board, may be different than self.board

        Print: a human representation of such board on stdout, used during pit involving a human
        打印棋盘的可视化表示，主要用于人与机器对战的情况。
        """
        pass
