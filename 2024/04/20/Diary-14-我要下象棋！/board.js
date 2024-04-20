class XiangqiGame {
    constructor(board, boardToolContainer, pgn, comments, orientation) {
        this.board = null;
        this.$board = board;
        this.squareClass = 'square-2b8ce';
        this.colorToHighlight = null;
        this.highlightChess = true;
        this.squareToHighlight = null;
        this.$boardToolContainer = boardToolContainer;
        this.$boardTool = this.$boardToolContainer.find("#board-tool");
        this.$prevButton = this.$boardTool.find("#prev");
        this.$description = this.$boardTool.find("#description");
        this.$nextButton = this.$boardTool.find("#next");
        this.$startButton = this.$boardTool.find("#start");
        this.$endButton = this.$boardTool.find("#end");
        this.$commentsCenter = this.$boardToolContainer.find("#comments");
        this.comments = comments;
        this.totalSteps = 0;
        this.pgn = pgn;
        this.orientation = orientation;
        this.game = new Xiangqi();
        this.initXiangqi();
        this.initXiangqiboard();
        this.initXiangqiboardTool();
    }

    initXiangqi() {
        this.game.load_pgn(this.pgn.join('\n')), this.game.header();
        this.totalSteps = this.game.history().length;
        do {
            this.flag = this.game.undo();
        } while (this.flag);
    }

    initXiangqiboard() {
        const onMoveEnd = () => {
            if (this.highlightChess) {
                this.$board.find('.square-' + this.squareToHighlight)
                    .addClass('highlight-' + this.colorToHighlight);
            }
        };

        const config = {
            boardTheme: '../../../../js/xiangqiboard/img/xiangqiboards/wikimedia/xiangqiboard.svg',
            pieceTheme: '../../../../js/xiangqiboard/img/xiangqipieces/wikimedia/{piece}.svg',
            position: this.game.fen(),
            orientation: this.orientation,
            onMoveEnd: onMoveEnd
        };

        this.board = Xiangqiboard(this.$board, config);

        this.updateBoard();
    }

    initXiangqiboardTool() {
        this.$startButton.click(() => {
            do {
                this.move = this.game.undo();
                this.removehighlight(this.move);
            } while (this.move);

            this.updateBoard();
        });

        this.$endButton.click(() => {
            do {
                this.move = this.game.redo();
                this.removehighlight();
            } while (this.move);

            this.updateBoard();
        });

        this.$prevButton.click(() => {
            this.move = this.game.undo();
            this.highlight(this.move);

            this.updateBoard();
        });

        this.$nextButton.click(() => {
            this.move = this.game.redo();
            this.highlight(this.move);

            this.updateBoard();

        });
    }

    updateBoard() {
        this.board.position(this.game.fen());
        this.$description.text(this.game.history().length.toString() + "/" + this.totalSteps.toString());
        if (this.game.history().length.toString() in this.comments) {
            this.$commentsCenter.text(this.comments[this.game.history().length.toString()]);
        }
    }

    removehighlight() {
        this.$board.find('.' + this.squareClass).removeClass('highlight-red');
        this.$board.find('.' + this.squareClass).removeClass('highlight-black');
        this.highlightChess = false;
    }

    highlight(move) {
        if (move) {
            if (move.color === 'r') {
                this.$board.find('.' + this.squareClass).removeClass('highlight-red');
                this.$board.find('.square-' + move.from).addClass('highlight-red');
                this.squareToHighlight = move.to;
                this.colorToHighlight = 'red';
            } else {
                this.$board.find('.' + this.squareClass).removeClass('highlight-black');
                this.$board.find('.square-' + move.from).addClass('highlight-black');
                this.squareToHighlight = move.to;
                this.colorToHighlight = 'black';
            }
            this.highlightChess = true;
        }
    }
}


$(document).ready(function () {

    var comments1 = {};

    comments1["0"] = "开始！";
    comments1["1"] = "对方炮二平五，中炮开局。";
    comments1["2"] = "当头炮，把马跳。";
    comments1["3"] = "马二进三。";
    comments1["4"] = "车 9 平 8。";
    comments1["5"] = "车一平二。";
    comments1["6"] = "我一般都喜欢马 2 进 3 起屏风马，三七兵让对面先拱。";
    comments1["7"] = "对面选择了拱七兵。";
    comments1["8"] = "那我卒 7 进 1。";
    comments1["9"] = "一般都是车二进六的，我喜欢选择走马八进七的对手😍！";
    comments1["10"] = "炮 2 进 4 骚扰。";
    comments1["11"] = "在网上跟别人下，大多数人都喜欢马七进六，然后我就炮 2 平 7 占大便宜。可惜对面选择了兵五进一😠。";
    comments1["12"] = "那就双炮过河了。经典开局——中炮七路马对屏风马 红进中兵对黑双炮过河。";
    comments1["13"] = "对面再兵五进一。";
    comments1["14"] = "士 4 进 5，中路加厚。";
    comments1["15"] = "这个时候对方马七进六。";
    comments1["16"] = "象 3 进 5，这招不好，其实应该直接炮 2 平 5 的。";
    comments1["17"] = "对面没有选择兵七进一，而是选择了兵五进一，万幸😅。";
    comments1["18"] = "马 3 进 5 吃兵。";
    comments1["19"] = "只得马六进五吃马，对面马蹦了这么多步就换掉了，我觉得我又赚了😁。";
    comments1["20"] = "马 7 进 5 吃马，现在我方马路开阔，对面马在窝里出不来。";
    comments1["21"] = "对方炮八平九想亮车？";
    comments1["22"] = "车 1 平 4 我先出！如果对面想车九平八，我就车 4 进 6 封住。";
    comments1["23"] = "对面看着没啥能走的，士四进五。";
    comments1["24"] = "车 4 进 6 进攻卒林线。";
    comments1["25"] = "对面炮九进四打卒抓马，还有沉底炮的手段。";
    comments1["26"] = "马 5 进 6 抓马。";
    comments1["27"] = "车二进二保护。";
    comments1["28"] = "车 4 平 7 再抓。";
    comments1["29"] = "对面没有逃马，炮五平七拆中炮。";
    comments1["30"] = "吃马，得子。";
    comments1["31"] = "相七进五给贴身车让路，还抓马。";
    comments1["32"] = "只得马 7 退 5。";
    comments1["33"] = "对方炮七进四。双炮虎视眈眈盯着将门。";
    comments1["34"] = "我选择了马 5 退 4 试图防守，感觉走软了。";
    comments1["35"] = "对面炮九进三叫杀，感觉好可怕😥。";
    comments1["36"] = "马 4 退 3 拦截。";
    comments1["37"] = "炮七平八躲开，再叫杀。";
    comments1["38"] = "没得办法，出将。";
    comments1["39"] = "对面贴身车启动。";
    comments1["40"] = "炮 2 平 4 封车。";
    comments1["41"] = "对面走了个炮八退六打串。";
    comments1["42"] = "我方炮退士角。";
    comments1["43"] = "对面重炮将军。";
    comments1["44"] = "将 4 进 1。";
    comments1["45"] = "对面炮八退二试图兑炮？当时觉得快守不住了……复盘的时候感觉还好，只是后面走臭了。";
    comments1["46"] = "车 7 平 1 抓炮，当时以为能抓死。";
    comments1["47"] = "对面只得炮九平七。";
    comments1["48"] = "车 1 退 6 继续抓。";
    comments1["49"] = "只能炮七退一。";
    comments1["50"] = "车 1 进 1，走个顿挫。";
    comments1["51"] = "炮七进一。";
    comments1["52"] = "如果我将 4 退 1 抓死炮，对面肯定炮八平六，没便宜赚，让炮活了。所以我想的是炮 4 进 2 不给打炮的机会，然后再将 4 退 1。";
    comments1["53"] = "结果对面炮八平五我没看见……赔了夫人又折兵。";
    comments1["54"] = "车 8 进 2 抓炮。";
    comments1["55"] = "对面炮五退五回巢。";
    comments1["56"] = "象 7 进 5，臭棋。";
    comments1["57"] = "对面炮五平七，我又没看出来，想了好久，确实丢子了。";
    comments1["58"] = "将 4 退 1 抓炮。";
    comments1["59"] = "如果对面炮打士，那么他将不仅吃回失子，还大优。选择了打马，不过还是红方好一些。";
    comments1["60"] = "象 5 退 3 吃炮。";
    comments1["61"] = "车四进五吃炮。";
    comments1["62"] = "回将。";
    comments1["63"] = "炮七退一躲开。";
    comments1["64"] = "车 1 进 8 将军，赌他落士。";
    comments1["65"] = "结果对面真的落士而不是垫车……游戏结束🤭。";
    comments1["66"] = "炮 8 平 5 抽车，胜局已定。";
    comments1["67"] = "士四进五。";
    comments1["68"] = "车 8 进 5。";
    comments1["69"] = "车六平三。";
    comments1["70"] = "车 8 退 4。";
    comments1["71"] = "兵七进一。";
    comments1["72"] = "车 8 平 4，对方投降。";

    new XiangqiGame($('#board1'),
        $("#board-tool-container1"),
        ['[Game "Chinese Chess"]',
            '[Event "这是决赛！"]',
            '[Date "2024.04.14"]',
            '[Red "Metal-Cell"]',
            '[Black "研一小弟"]',
            '[Result "1-0"]',
            '[Format "ICCS"]',
            '',
            '1. h2e2 h9g7',
            '2. h0g2 i9h9',
            '3. i0h0 b9c7',
            '4. c3c4 g6g5',
            '5. b0c2 b7b3',
            '6. e3e4 h7h3',
            '7. e4e5 d9e8',
            '8. c2d4 c9e7',
            '9. e5e6 c7e6',
            '10. d4e6 g7e6',
            '11. b2a2 a9d9',
            '12. d0e1 d9d3',
            '13. a2a6 e6f4',
            '14. h0h2 d3g3',
            '15. e2c2 f4g2',
            '16. c0e2 g2e3',
            '17. c2c6 e3d5',
            '18. a6a9 d5c7',
            '19. c6b6 e9d9',
            '20. a0d0 b3d3',
            '21. b6b3 d3d7',
            '22. b3b9 d9d8',
            '23. b9b7 g3a3',
            '24. a9c9 a3a9',
            '25. c9c8 a9a8',
            '26. c8c9 d7d5',
            '27. b7e7 h9h7',
            '28. e7e3 g9e7',
            '29. e3c3 d8d9',
            '30. c3c7 e7c9',
            '31. d0d5 d9e9',
            '32. c7c6 a8a0',
            '33. e1d0 h3e3',
            '34. f0e1 h7h2',
            '35. d5g5 h2h6',
            '36. c4c5 h6d6'],
        comments1, "black"
    );

    var comments2 = {};

    comments2["0"] = "开始！";
    comments2["1"] = "我方仙人指路开局。对面还说了句开局走兵的很少见🫥。";
    comments2["2"] = "对方架上卒底炮。";
    comments2["3"] = "我方转左中炮，对方说这阵容我没见过😓。";
    comments2["4"] = "对方长考很久选择了马 8 进 7。";
    comments2["5"] = "马八进九避开卒底炮。";
    comments2["6"] = "对方出车。";
    comments2["7"] = "我方跳马。";
    comments2["8"] = "对方卒 7 进 1 压马。";
    comments2["9"] = "如果车一平二，对方预计炮 8 进 4 封车，不好。车九平八。";
    comments2["10"] = "对方思考了很久，选择了炮 3 平 5？感觉不好，浪费了步数🧐。";
    comments2["11"] = "当时想着如果炮八进五打串的话，对面直接炮 5 进 4 反将一军，占不到便宜。选择了士四进五，走软了🫤，还埋了个伏笔。";
    comments2["12"] = "对方马 2 进 3 准备出车。";
    comments2["13"] = "我方炮八平七骚扰对方马，同时亮车。";
    comments2["14"] = "对方马 7 进 6 给 3 路马生根，同时盘河马准备进攻。";
    comments2["15"] = "我方车一平二。";
    comments2["16"] = "对方马 6 进 4 过河骚扰我方双炮。";
    comments2["17"] = "我方炮七退一躲开。";
    comments2["18"] = "对方再起竖车要兑车。";
    comments2["19"] = "肯定是兑车的，又赚一步😋。";
    comments2["20"] = "马 3 退 2 吃车。";
    comments2["21"] = "车二进四巡河，同时骚扰黑马。";
    comments2["22"] = "4 路马没有什么好走的点，只能换中炮。";
    comments2["23"] = "因为九路马没根，选择相三进五而不是相七进五。";
    comments2["24"] = "对方看无根车炮被牵，炮 5 平 4 试图飞象再担子炮解锁车。";
    comments2["25"] = "我方兵七进一骚扰。";
    comments2["26"] = "一般软件都直接选择兵 3 进 1 弃象，对面估计不想放弃士象全就走了炮 4 平 2，那我又赚了一步🥰。";
    comments2["27"] = "兵七进一，上岸。";
    comments2["28"] = "对方只得炮 3 进 6 换炮。";
    comments2["29"] = "我方马一退三吃炮，同时前方马路开阔。";
    comments2["30"] = "对方象 3 进 5。";
    comments2["31"] = "我方马三进二开始进攻。";
    comments2["32"] = "对方马 2 进 4 起拐角马抓兵。";
    comments2["33"] = "我方兵四平三，感觉马八进六会好些🤔？";
    comments2["34"] = "对方卒 5 进 1。";
    comments2["35"] = "左路堵塞。决定兵三进一活马。";
    comments2["36"] = "对方卒 7 进 1。";
    comments2["37"] = "肯定是用相吃，以继续牵制对方无根车炮。";
    comments2["38"] = "对方马 4 进 2 抓兵。";
    comments2["39"] = "我方兵四平五躲开。";
    comments2["40"] = "对方马 2 进 3 要求兑马。";
    comments2["41"] = "我看了看对面象角马两步卧槽有点讨厌，选择了马八进七兑掉。";
    comments2["42"] = "象 5 进 3 吃马。";
    comments2["43"] = "其实这里我先瞎走了个马三进四葬送了比赛😭，对方再炮 8 平 3 我就寄了，结果对面居然说这是低级错误让我悔棋……";
    comments2["44"] = "对方车 8 进 1 试图对抓摆脱牵制。";
    comments2["45"] = "这个时候可以安心跳马了。";
    comments2["46"] = "对方车 8 平 6 抓马，说先把无根车炮的问题解决了🥵。";
    comments2["47"] = "但是摆脱牵制是有代价的😌！";
    comments2["48"] = "对方炮 8 平 1 落荒而逃。";
    comments2["49"] = "我方马六进七得象。";
    comments2["50"] = "对方炮 1 进 4 得兵。";
    comments2["51"] = "兵一进一，不给！";
    comments2["52"] = "对方车 6 平 4 准备进攻我方左翼。";
    comments2["53"] = "马七进九得兵。";
    comments2["54"] = "车 4 进 5 骚扰中兵。";
    comments2["55"] = "兵五进一躲开。";
    comments2["56"] = "车 4 退 1 看上去不错，牵制住我方车。";
    comments2["57"] = "但是对方炮没根捏~";
    comments2["58"] = "车 4 平 1 抓马。";
    comments2["59"] = "马一退三，此时马位极佳，抓黑车，保双兵，还可以挂角。中兵守不住了，于是对面投降。";

    new XiangqiGame($('#board2'),
        $("#board-tool-container2"),
        ['[Game "Chinese Chess"]',
            '[Event "这是决赛！"]',
            '[Date "2024.04.14"]',
            '[Red "Metal-Cell"]',
            '[Black "研一小弟"]',
            '[Result "1-0"]',
            '[Format "ICCS"]',
            '',
            '1. c3c4 b7c7',
            '2. h2e2 h9g7',
            '3. b0a2 i9h9',
            '4. h0g2 g6g5',
            '5. a0b0 c7e7',
            '6. f0e1 b9c7',
            '7. b2c2 g7f5',
            '8. i0h0 f5d4',
            '9. c2c1 a9b9',
            '10. b0b9 c7b9',
            '11. h0h4 d4e2',
            '12. g0e2 e7d7',
            '13. c4c5 d7c7',
            '14. c5c6 c7c1',
            '15. a2c1 c9e7',
            '16. c1b3 b9d8',
            '17. c6d6 e6e5',
            '18. g3g4 g5g4',
            '19. e2g4 d8b7',
            '20. d6e6 b7c5',
            '21. b3c5 e7c5',
            '22. g4e2 h9h8',
            '23. g2f4 h8f8',
            '24. f4d3 h7a7',
            '25. d3c5 a7a3',
            '26. i3i4 f8d8',
            '27. c5a6 d8d3',
            '28. e3e4 d3d4',
            '29. h4h3 d4a4',
            '30. a6c5'],
        comments2, "red"
    );
});