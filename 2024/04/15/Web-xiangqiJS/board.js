let board = null;
let $board = $('#board');
let squareClass = 'square-2b8ce'

let colorToHighlight = null;
let highlightChess = true;
let squareToHighlight = null;

var $boardTool = $("#board-tool");
var $prevButton = $boardTool.find("#prev");
var $description = $boardTool.find("#description");
var $nextButton = $boardTool.find("#next");
var $startButton = $boardTool.find("#start");
var $endButton = $boardTool.find("#end");

var totalSteps = 0;

var game = new Xiangqi();

const pgn = ['[Game "Chinese Chess"]',
'[Event "Test"]',
'[Date "2024.04.16"]',
'[Red "A"]',
'[Black "B"]',
'[Result "*"]',
'[Format "ICCS"]',
'',
'1. b2e2 b9c7',
'2. b0c2 a9b9',
'3. a0b0 h9g7',
'4. g3g4 c6c5',
'5. h0g2 h7h3',
'6. e3e4 b7b3',
'7. i0i1 h3g3',
'8. g0i2 i9h9',
'9. i1f1 g3d3',
'10. f1f7 d3d2',
'11. g2f4 d2h2',
'12. f4e6 c7e6',
'13. e2e6 b9b6',
'14. e6e5 e9e8',
'15. f7g7 h9h3',
'16. g7g9']

function initXiangqi() {
    console.log("载入 PGN：" + game.load_pgn(pgn.join('\n')), game.header());
    totalSteps = game.history().length;
    do {
        flag = game.undo();
    } while (flag);
}

function initXiangqiboard() {
    function onMoveEnd() {
        if (highlightChess)
        {
            $board.find('.square-' + squareToHighlight)
                .addClass('highlight-' + colorToHighlight);
        }
    }

    let config = {
        boardTheme: '../../../../js/xiangqiboard/img/xiangqiboards/wikimedia/xiangqiboard.svg',
        pieceTheme: '../../../../js/xiangqiboard/img/xiangqipieces/wikimedia/{piece}.svg',
        position: game.fen(),
        draggable: true, 
        onMoveEnd: onMoveEnd
    };

    board = Xiangqiboard($board, config);
}

function initXiangqiboardTool() {
    $startButton.click(function () {
        console.log("初始按钮被点击了");
        do {
            move = game.undo();
            removehighlight(move);
        } while (move);
        
        board.position(game.fen());
        $description.text(game.history().length.toString() + "/" + totalSteps.toString());
    });

    $endButton.click(function () {
        console.log("终局按钮被点击了");
        do {
            move = game.redo();
            removehighlight(move);
        } while (move);

        board.position(game.fen());
        $description.text(game.history().length.toString() + "/" + totalSteps.toString());

    });

    $prevButton.click(function () {
        console.log("前一步按钮被点击了");
        move = game.undo();
        highlight(move);
        board.position(game.fen());
        $description.text(game.history().length.toString() + "/" + totalSteps.toString());
    });

    $nextButton.click(function () {
        console.log("后一步按钮被点击了");
        move = game.redo();
        highlight(move);
        board.position(game.fen());
        $description.text(game.history().length.toString() + "/" + totalSteps.toString());
    });

    function removehighlight(move){
        $board.find('.' + squareClass).removeClass('highlight-red');
        $board.find('.' + squareClass).removeClass('highlight-black');
        highlightChess = false;
    }
    
    function highlight(move) {
        if (move) {
            if (move.color === 'r') {
                $board.find('.' + squareClass).removeClass('highlight-red');
                $board.find('.square-' + move.from).addClass('highlight-red');
                squareToHighlight = move.to;
                colorToHighlight = 'red';
            } else {
                $board.find('.' + squareClass).removeClass('highlight-black');
                $board.find('.square-' + move.from).addClass('highlight-black');
                squareToHighlight = move.to;
                colorToHighlight = 'black';
            }
            highlightChess = true;
        }
    }
}

$(document).ready(function () {
    initXiangqi();
    initXiangqiboard();
    initXiangqiboardTool();
});