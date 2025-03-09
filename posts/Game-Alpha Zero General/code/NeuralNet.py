class NeuralNet:
    """
    This class specifies the base NeuralNet class. To define your own neural
    network, subclass this class and implement the functions below. The neural
    network does not consider the current player, and instead only deals with
    the canonical form of the board.

    See othello/NNet.py for an example implementation.
    
    此类指定 NeuralNet 基类。要定义自己的神经网络，请将此类子类化并实现以下函数。神经网络不考虑当前的玩家，而只处理棋盘的规范形式。
    有关示例实现，请参阅 othello/NNet.py。
    """

    def __init__(self, game):
        pass

    def train(self, examples):
        """
        This function trains the neural network with examples obtained from
        self-play.

        Input:
            examples: a list of training examples, where each example is of form
                      (board, pi, v). pi is the MCTS informed policy vector for
                      the given board, and v is its value. The examples has
                      board in its canonical form.
        它接收一组示例，示例由棋盘状态、策略向量（由 MCTS 提供）和棋局值组成。在此处，方法未实现。
        """
        pass

    def predict(self, board):
        """
        Input:
            board: current board in its canonical form.

        Returns:
            pi: a policy vector for the current board- a numpy array of length
                game.getActionSize
            v: a float in [-1,1] that gives the value of the current board
        方法接收一个棋盘状态，并返回一个策略向量和对应的棋局值。这一功能尚未实现。
        """
        pass

    def save_checkpoint(self, folder, filename):
        """
        Saves the current neural network (with its parameters) in
        folder/filename
        该方法用于将当前神经网络的参数保存到指定的文件夹和文件名中，但具体实现未提供。
        """
        pass

    def load_checkpoint(self, folder, filename):
        """
        Loads parameters of the neural network from folder/filename
        该方法用于从指定的文件夹和文件名加载神经网络的参数
        """
        pass
