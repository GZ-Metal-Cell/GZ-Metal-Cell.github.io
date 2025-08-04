#!/usr/bin/env python3

import argparse
import logging
import os
import subprocess

import coloredlogs

from Coach import Coach

log = logging.getLogger(__name__)
coloredlogs.install(level='INFO')  # Change this to DEBUG to see more info.（然后会输出一大片……）

def run(args):
    # 导入游戏和神经网络模块
    from GameSwitcher import import_game
    # 通过 GameSwitcher 模块中的 import_game 函数导入指定游戏的类 Game 和神经网络类 NNet，同时还获取玩家信息和玩家数量。
    # 这使得可以根据用户指定的游戏来进行实例化。
    Game, NNet, players, NUMBER_PLAYERS = import_game(args.game)

	# 初始化游戏实例
    log.debug('Loading %s...', Game.__name__)
    g = Game()

	# 初始化神经网络
    log.debug('Loading %s...', NNet.__name__)
    nn_args = dict(
        lr=args.learn_rate,
        dropout=args.dropout,
        epochs=args.epochs,
        batch_size=args.batch_size,
        nn_version=args.nn_version,
        learn_rate=args.learn_rate,
        no_compression=args.no_compression,
        q_weight=args.q_weight,
    )
    nnet = NNet(g, nn_args)

	# 加载模型检查点
    if args.load_model:
        log.info('Loading checkpoint "%s"...', args.load_folder_file)
        nnet.load_checkpoint(os.path.dirname(args.load_folder_file), os.path.basename(args.load_folder_file))
        if not args.useray:
            compare_settings(args)
    # else:
    #     log.warning('Not loading a checkpoint!')

	# 加载教练对象
    log.debug('Loading the Coach...')
    # 创建了一个 Coach 对象 c，用于管理游戏与神经网络的交互与训练。
    c = Coach(g, nnet, args)

	# 加载训练示例
    if args.load_model and not args.forget_examples:
        log.info("Loading 'trainExamples' from file...")
        c.loadTrainExamples()

    # 备份当前运行的代码设置
    if not args.useray:
        # Backup code used for this run
        subprocess.run(f'mkdir -p "{args.checkpoint}/"', shell=True)
        subprocess.run(f'cp *py santorini/*py "{args.checkpoint}/"', shell=True)
        subprocess.run(
            f'[ -f "{args.checkpoint}/settings.txt" ] && mv "{args.checkpoint}/settings.txt" "{args.checkpoint}/settings."`date +%s` ;   echo "{args}" > "{args.checkpoint}/settings.txt"',
            shell=True)

	# 调用教练对象的学习方法 learn，开始训练过程。
    log.debug('Starting the learning process 🎉')
    c.learn()


def compare_settings(args):
    """
    Compare current settings and settings of checkpoints, display main differences
	比较当前程序运行的设置与一个已保存的检查点（checkpoint）设置之间的差异，并输出这些差异。
	通过此机制，开发者可以直观地了解不同版本之间的设置差异，便于调试和优化程序行为。
    """
    # 这行代码构建了一个文件路径 settings_file，该路径是由 args.load_folder_file 指定的检查点目录加上 'settings.txt' 组成的。
    # 这个文件包含了以前运行时的设置参数。
    settings_file = os.path.join(os.path.dirname(args.load_folder_file), 'settings.txt')

    # Load settings
    if not os.path.isfile(settings_file):
        return
    with open(settings_file, 'r') as f:
        previous_args = f.read()

    # Compute differences on dict versions
    previous_args_dict, current_args_dict = vars(eval('argparse.' + previous_args)), vars(args)
    changed_keys = set([k for k in set(list(previous_args_dict.keys()) + list(current_args_dict.keys())) if
                        previous_args_dict.get(k) != current_args_dict.get(k)])
    for key in ['load_folder_file', 'checkpoint', 'numIters', 'arenaCompare', 'maxlenOfQueue', 'load_model']:
        changed_keys.discard(key)

    if changed_keys:
        log.info('Some option(s) changed compared to loaded checkpoint:')
        for k in changed_keys:
            print(f'{k}: {previous_args_dict.get(k)} --> {current_args_dict.get(k)}')


def profiling(args):
    """
	对训练过程进行性能分析，帮助开发者识别和优化代码中的瓶颈。
    """
    # 这行代码导入了 Python 的性能分析模块 cProfile 和用于显示分析结果的模块 pstats。
    import cProfile, pstats
    # 创建一个 Profile 对象，来跟踪代码的运行性能。
    profiler = cProfile.Profile()
    # import yappi
    # 在进行实际的性能分析前，设置了一些参数以进行热身运行。这里将各项参数（并行推断数、迭代次数、游戏次数和训练周期）都设置为较小的值。
    args.parallel_inferences, args.numIters, args.numEps, args.epochs = 1, 1, 8, 1  # warmup run
    # 开始一次训练过程。
    run(args)
	# 开始性能分析。
    print('\nstart profiling')
    args.parallel_inferences, args.numIters, args.numEps, args.epochs = 1, 1, 8, 1
    # Core of the training
    # yappi.start()
    profiler.enable()
    run(args)
    # yappi.stop()
    profiler.disable()

    # debrief
    profiler.dump_stats('execution.prof')
    print('check dumped stats in execution.prof')
    # Sample code:
    # from pstats import Stats, SortKey
    # p = Stats('execution.prof')
    # p.strip_dirs().sort_stats('cumtime').print_stats(20)
    # p.strip_dirs().sort_stats('tottime').print_stats(10)

    # threads = yappi.get_thread_stats()
    # for thread in threads:
    #     print("Function stats for (%s) (%d)" % (thread.name, thread.id))  # it is the Thread.__class__.__name__
    #     yappi.get_func_stats(ctx_id=thread.id).print_all()
	
 	# 断点
    breakpoint()

def main():
    parser = argparse.ArgumentParser(description='tester')
    parser.add_argument('game'                     , action='store', default='splendor', help='The name of the game to simulate')
    parser.add_argument('--checkpoint'      , '-C' , action='store', default='./temp/', help='')
    parser.add_argument('--load-folder-file', '-L' , action='store', default=None     , help='')
    
    parser.add_argument('--numEps'          , '-e' , action='store', default=500  , type=int  , help='Number of complete self-play games to simulate during a new iteration')
    parser.add_argument('--numItersHistory' , '-i' , action='store', default=5   , type=int  , help='')

    parser.add_argument('--numMCTSSims'     , '-m' , action='store', default=1600 , type=int  , help='Number of moves for MCTS to simulate in FULL exploration')
    parser.add_argument('--tempThreshold'   , '-T' , action='store', default=10   , type=int  , help='Nb of moves after which changing temperature')
    parser.add_argument('--temperature'     , '-t' , action='store', default=[1.25, 0.8], type=float, nargs=2, help='Softmax temp: 1 = to apply before MCTS, 3 = after MCTS, only used for selection not for learning')
    parser.add_argument('--cpuct'           , '-c' , action='store', default=1.25 , type=float, help='cpuct value')
    parser.add_argument('--dirichletAlpha'  , '-d' , action='store', default=-1   , type=float, help='α=0.3 for chess, scaled in inverse proportion to the approximate number of legal moves in a typical position. 0 to disable. -1 for auto.')
    parser.add_argument('--fpu'             , '-f' , action='store', default=0.   , type=float, help='Value for FPU (first play urgency): negative value for absolute value, positive value for parent-based reduction')
    parser.add_argument('--forced-playouts' , '-F' , action='store_true', help='Enabled forced playouts')
    
    parser.add_argument('--learn-rate'      , '-l' , action='store', default=0.0003, type=float, help='')
    parser.add_argument('--epochs'          , '-p' , action='store', default=2    , type=int  , help='')
    parser.add_argument('--batch-size'      , '-b' , action='store', default=32   , type=int  , help='')
    parser.add_argument('--dropout'         , '-D' , action='store', default=0.   , type=float  , help='')
    parser.add_argument('--nn-version'      , '-V' , action='store', default=1    , type=int  , help='Which architecture to choose')

    ### Advanced params ###
    parser.add_argument('--q-weight'        , '-q' , action='store', default=0.5  , type=float, help='Weight for mixing Q into value loss')
    parser.add_argument('--updateThreshold'        , action='store', default=0.60 , type=float, help='During arena playoff, new neural net will be accepted if threshold or more of games are won')
    parser.add_argument('--ratio-fullMCTS'         , action='store', default=5    , type=int  , help='Ratio of MCTS sims between full and fast exploration')
    parser.add_argument('--prob-fullMCTS'          , action='store', default=0.25 , type=float, help='Probability to choose full MCTS exploration')
    parser.add_argument('--universes'       , '-u' , action='store', default=1    , type=int  , choices=range(9), help='Number of universes (up to 8); will switch between each of them at each rollout. Set to 0 for a deterministic exploration')

    parser.add_argument('--forget-examples'        , action='store_true', help='Do not load previous examples')
    parser.add_argument('--numIters'        , '-n' , action='store', default=50   , type=int, help='')
    parser.add_argument('--stop-after-N-fail', '-s', action='store', default=-1   , type=float, help='Number of consecutive failed arenas that will trigger process stop (-N means N*numItersHistory)')
    parser.add_argument('--profile'                , action='store_true', help='profiler')
    parser.add_argument('--debug'                  , action='store_true', help='Disable all optimisations to allow easier debugging')
    parser.add_argument('--useray'                 , action='store_true', help='Mode for "ray", disable some messages')
    parser.add_argument('--parallel-inferences','-P',action='store', default=8    , type=int  , help='Size of batch for inferences = nb of threads, set to 1 to disable')
    parser.add_argument('--no-compression'         , action='store_true', help='Prevent using in-memory data compression (huge memory decrease and impact by only by ~1 second per 100k samples), useful for easier debugging')
    parser.add_argument('--no-mem-optim'           , action='store_true', help='Prevent cleaning MCTS tree of old moves during each game')
    
    args = parser.parse_args()
    args.arenaCompare = 30  # 新的神经网络版本与旧版本间进行对弈比较时的游戏次数。
    # 计算 maxlenOfQueue 的值，此值用于限制存储历史训练示例的队列长度。计算中根据是否压缩数据和给定的 numItersHistory 参数进行调整，确保每个过程的内存占用不超过 2GB。
    args.maxlenOfQueue = int(2.5e6 / ((
                                          2 if args.no_compression else 0.5) * args.numItersHistory))  # at most 2GB per process, with each example weighing 2kB (or 0.5kB)
    # 检查 stop_after_N_fail 参数。如果其值小于零，则将其设置为正值并乘以 numItersHistory，用于设定在连续失败的情况下停止训练的条件。
    if args.stop_after_N_fail < 0:
        args.stop_after_N_fail = -args.stop_after_N_fail * args.numItersHistory
    # 如果启用了调试模式，将一些参数设置为有助于调试的值，例如禁用并行推断、禁止数据压缩以及不进行内存优化，这样有助于开发者更方便地排查问题。
    if args.debug:
        args.parallel_inferences = 1
        args.no_compression = True
        args.no_mem_optim = True

    # 如果启用了 Ray 模式（减少消息），并且更新阈值为 0.60，将阈值修改为 0.55
    if args.useray and args.updateThreshold == 0.60:
        args.updateThreshold = 0.55
        # args.updateThreshold == 0.55
        
	# 如果指定了加载文件路径 load_folder_file，则设置 load_model 为 True，表示需要加载已有的模型。
    args.load_model = (args.load_folder_file is not None)
    
    if args.profile:
        # 如果在性能分析模式（没有正式训练）
        profiling(args)
    else:
        if not args.useray:
            # 打印参数设置信息
            print(args)
        # 开始训练
        run(args)


if __name__ == "__main__":
    main()
