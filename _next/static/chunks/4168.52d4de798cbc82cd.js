/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ 32103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dd: () => (/* binding */ legalOnePlusOneActions),
/* harmony export */   sG: () => (/* binding */ transitionOnePlusOne)
/* harmony export */ });
/* unused harmony exports createOnePlusOneState, chopsticks */
/* harmony import */ var _ansi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68422);
/* harmony import */ var _skills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74343);


const other = (player)=>player === 0 ? 1 : 0;
const HELP_PAGE_SIZE = 8;
const handName = (hand)=>hand === 0 ? 'L' : 'R';
const playerName = (player)=>`Player ${player + 1}`;
const asHand = (value)=>value % 10;
const pair = (hands, value)=>hands[0] === value && hands[1] === value;
function createOnePlusOneState() {
    return {
        players: [
            {
                hp: 3,
                hands: [
                    1,
                    1
                ]
            },
            {
                hp: 3,
                hands: [
                    1,
                    1
                ]
            }
        ],
        turn: 0,
        extraTurns: [
            0,
            0
        ],
        phase: {
            type: 'touch'
        },
        cursor: {
            from: 0,
            target: 0,
            skill: 0
        },
        showHelp: false,
        helpPage: 0,
        message: 'Your turn: choose a hand to touch.'
    };
}
function copyState(state) {
    return {
        ...state,
        players: state.players.map((player)=>({
                ...player,
                hands: [
                    ...player.hands
                ]
            })),
        extraTurns: [
            ...state.extraTurns
        ],
        phase: state.phase.type === 'skill' ? {
            ...state.phase,
            choices: [
                ...state.phase.choices
            ],
            pendingHands: [
                ...state.phase.pendingHands
            ],
            retry: {
                ...state.phase.retry,
                players: state.phase.retry.players.map((player)=>({
                        ...player,
                        hands: [
                            ...player.hands
                        ]
                    })),
                extraTurns: [
                    ...state.phase.retry.extraTurns
                ],
                cursor: {
                    ...state.phase.retry.cursor
                }
            }
        } : {
            ...state.phase
        },
        cursor: {
            ...state.cursor
        }
    };
}
function finishTouch(state, attacker) {
    if (state.extraTurns[attacker] > 0) {
        state.extraTurns[attacker]--;
        // Fire Eyes grants this touch as its one extra action.  Once it has
        // completed, advance normally instead of giving the owner a second
        // consecutive touch.
        return other(attacker);
    }
    return other(attacker);
}
function checkDeath(state) {
    const dead = state.players.findIndex((player)=>player.hp <= 0);
    if (dead < 0) return false;
    const winner = other(dead);
    state.phase = {
        type: 'over',
        winner
    };
    state.message = `${playerName(winner)} wins!`;
    return true;
}
/** Fire Eyes (22) cannot strike an opposing zero, preventing an infinite repeat. */ function canTouch(state, from, target) {
    const attacker = state.players[state.turn];
    const defender = state.players[other(state.turn)];
    return !(pair(attacker.hands, 2) && defender.hands[target] === 0);
}
function touchActions(state) {
    return [
        0,
        1
    ].flatMap((from)=>[
            0,
            1
        ].flatMap((target)=>canTouch(state, from, target) ? [
                {
                    type: 'touch',
                    from,
                    target
                }
            ] : []));
}
function selectFirstLegalTouch(state) {
    const action = touchActions(state)[0];
    if (!action) return;
    state.cursor.from = action.from;
    state.cursor.target = action.target;
}
function legalOnePlusOneActions(state) {
    if (state.phase.type === 'touch') return touchActions(state);
    if (state.phase.type === 'skill') return state.phase.choices.map((skill)=>({
            type: 'skill',
            skill
        }));
    return [];
}
function transitionOnePlusOne(state, action) {
    if (!legalOnePlusOneActions(state).some((legal)=>JSON.stringify(legal) === JSON.stringify(action))) return null;
    const next = copyState(state);
    if (action.type === 'touch') {
        const attacker = next.turn;
        const defender = other(attacker);
        const before = [
            ...next.players[attacker].hands
        ];
        const amount = next.players[defender].hands[action.target];
        const previous = next.players[attacker].hands[action.from];
        const after = [
            ...next.players[attacker].hands
        ];
        after[action.from] = asHand(previous + amount);
        const targetText = `${handName(action.from)}→${handName(action.target)}`;
        const choices = (0,_skills__WEBPACK_IMPORTED_MODULE_1__/* .triggeredSkills */ .yS)(before, after, action.from);
        if (choices[0] === 'cross') {
            next.players[attacker].hands = after;
            next.players[defender].hp = 0;
            next.phase = {
                type: 'over',
                winner: attacker
            };
            next.message = `${playerName(attacker)} formed 11: ${_skills__WEBPACK_IMPORTED_MODULE_1__/* .SKILLS */ .J3.cross.name} wins!`;
            return next;
        }
        const nextTurn = finishTouch(next, attacker);
        next.message = `${playerName(attacker)} ${targetText}: ${previous} + ${amount} = ${after[action.from]}.`;
        if (choices.length) {
            next.phase = {
                type: 'skill',
                owner: attacker,
                choices,
                nextTurn,
                pendingHands: after,
                retry: {
                    players: state.players.map((player)=>({
                            ...player,
                            hands: [
                                ...player.hands
                            ]
                        })),
                    turn: state.turn,
                    extraTurns: [
                        ...state.extraTurns
                    ],
                    cursor: {
                        ...state.cursor
                    },
                    message: state.message
                }
            };
            next.cursor.skill = 0;
            next.message += ` ${playerName(attacker)} must use a skill.`;
        } else {
            next.players[attacker].hands = after;
            next.turn = nextTurn;
            next.phase = {
                type: 'touch'
            };
            selectFirstLegalTouch(next);
            next.message += `\n${playerName(next.turn)}'s turn.`;
        }
        return next;
    }
    if (next.phase.type !== 'skill') return null;
    const { owner, nextTurn, pendingHands } = next.phase;
    next.players[owner].hands = [
        ...pendingHands
    ];
    const skill = _skills__WEBPACK_IMPORTED_MODULE_1__/* .SKILLS */ .J3[action.skill];
    skill.effect(next, owner);
    next.message = `${playerName(owner)} used ${skill.name}: ${skill.description}.`;
    if (checkDeath(next)) return next;
    // Fire Eyes grants its owner the immediately following touch. Other skills
    // return to the normal alternating turn stored on the pending phase.
    next.turn = action.skill === 'fiery-eyes' ? owner : nextTurn;
    next.phase = {
        type: 'touch'
    };
    selectFirstLegalTouch(next);
    next.message += `\n${playerName(next.turn)}'s turn.`;
    return next;
}
function selectTouch(state, key) {
    if (key !== 'up' && key !== 'down') return false;
    const actions = touchActions(state);
    const current = actions.findIndex((action)=>action.from === state.cursor.from && action.target === state.cursor.target);
    const next = current < 0 ? 0 : (current + (key === 'down' ? 1 : actions.length - 1)) % actions.length;
    state.cursor.from = actions[next].from;
    state.cursor.target = actions[next].target;
    return true;
}
function returnFromSkill(state) {
    if (state.phase.type !== 'skill') return false;
    const retry = state.phase.retry;
    state.players = retry.players.map((player)=>({
            ...player,
            hands: [
                ...player.hands
            ]
        }));
    state.turn = retry.turn;
    state.extraTurns = [
        ...retry.extraTurns
    ];
    state.cursor = {
        ...retry.cursor
    };
    state.phase = {
        type: 'touch'
    };
    state.message = 'Touch cancelled. Choose another hand to touch.';
    return true;
}
function actionHits(state) {
    const hits = [
        {
            x: 0,
            y: 4,
            width: 31,
            action: {
                type: 'touch',
                from: 0,
                target: 0
            }
        },
        {
            x: 0,
            y: 5,
            width: 31,
            action: {
                type: 'touch',
                from: 0,
                target: 1
            }
        },
        {
            x: 0,
            y: 6,
            width: 31,
            action: {
                type: 'touch',
                from: 1,
                target: 0
            }
        },
        {
            x: 0,
            y: 7,
            width: 31,
            action: {
                type: 'touch',
                from: 1,
                target: 1
            }
        }
    ];
    return hits.filter((hit)=>canTouch(state, hit.action.from, hit.action.target));
}
function hearts(hp) {
    return hp > 0 ? '♥'.repeat(Math.min(hp, 12)) : '—';
}
function playerLine(state, player, label) {
    const data = state.players[player];
    const active = state.phase.type !== 'over' && state.turn === player && state.phase.type === 'touch';
    const extra = state.extraTurns[player] ? ` +${state.extraTurns[player]} turn` : '';
    return `${active ? _ansi__WEBPACK_IMPORTED_MODULE_0__.Y + '▶ ' + _ansi__WEBPACK_IMPORTED_MODULE_0__.X : '  '}${_ansi__WEBPACK_IMPORTED_MODULE_0__.W}${label.padEnd(3)}${_ansi__WEBPACK_IMPORTED_MODULE_0__.X} [ L ${data.hands[0]} ] [ R ${data.hands[1]} ]   ${_ansi__WEBPACK_IMPORTED_MODULE_0__.R}HP ${hearts(data.hp)} (${data.hp})${_ansi__WEBPACK_IMPORTED_MODULE_0__.X}${_ansi__WEBPACK_IMPORTED_MODULE_0__.D}${extra}${_ansi__WEBPACK_IMPORTED_MODULE_0__.X}`;
}
function victoryText(winner, mode, soloSide) {
    if (mode === 'local') return `${playerName(winner)} wins!`;
    const human = soloSide === 'first' ? 0 : 1;
    return winner === human ? 'You win!' : 'You lose!';
}
function helpPageIndex(state) {
    const pageCount = Math.ceil(_skills__WEBPACK_IMPORTED_MODULE_1__/* .CHOPSTICKS_SKILLS */ .zE.length / HELP_PAGE_SIZE);
    const requested = Number.isFinite(state.helpPage) ? state.helpPage : 0;
    return Math.max(0, Math.min(requested, pageCount - 1));
}
function touchOption(state, from, target, selected) {
    const attacker = state.players[state.turn].hands;
    const defender = state.players[other(state.turn)].hands;
    const nextHands = [
        ...attacker
    ];
    nextHands[from] = asHand(attacker[from] + defender[target]);
    const availableSkills = (0,_skills__WEBPACK_IMPORTED_MODULE_1__/* .triggeredSkills */ .yS)(attacker, nextHands, from);
    const result = `[L ${nextHands[0]}] [R ${nextHands[1]}]`;
    const operation = `${handName(from)}${attacker[from]} + ${handName(target)}${defender[target]} → `;
    const skillPreview = availableSkills.length ? ` ${availableSkills.map((id)=>_skills__WEBPACK_IMPORTED_MODULE_1__/* .SKILLS */ .J3[id].name).join(' / ')}` : '';
    if (!canTouch(state, from, target)) return _ansi__WEBPACK_IMPORTED_MODULE_0__.D + `  × ${operation}${result}` + _ansi__WEBPACK_IMPORTED_MODULE_0__.X;
    if (selected) return _ansi__WEBPACK_IMPORTED_MODULE_0__.Y + `> ${operation}${result}` + _ansi__WEBPACK_IMPORTED_MODULE_0__.X + (skillPreview ? _ansi__WEBPACK_IMPORTED_MODULE_0__.G + skillPreview + _ansi__WEBPACK_IMPORTED_MODULE_0__.X : '');
    return `  ${operation}${result}`;
}
function renderChopsticks(state, mode, soloSide = 'first') {
    const human = soloSide === 'first' ? 0 : 1;
    const labels = mode === 'local' ? [
        'P1',
        'P2'
    ] : human === 0 ? [
        'You',
        'CPU'
    ] : [
        'CPU',
        'You'
    ];
    const title = _ansi__WEBPACK_IMPORTED_MODULE_0__.W + '1+1 / Chopsticks' + _ansi__WEBPACK_IMPORTED_MODULE_0__.X + `  ${_ansi__WEBPACK_IMPORTED_MODULE_0__.D}${mode === 'local' ? 'Local hot-seat' : `Solo: you are Player ${human + 1}`}${_ansi__WEBPACK_IMPORTED_MODULE_0__.X}`;
    const activePlayer = state.phase.type === 'skill' ? state.phase.owner : state.turn;
    const body = [
        ...mode === 'solo' ? [
            playerLine(state, other(human), labels[other(human)]),
            playerLine(state, human, labels[human])
        ] : [
            playerLine(state, other(activePlayer), labels[other(activePlayer)]),
            playerLine(state, activePlayer, labels[activePlayer])
        ],
        ''
    ];
    const hits = [];
    if (state.showHelp) {
        const pageCount = Math.ceil(_skills__WEBPACK_IMPORTED_MODULE_1__/* .CHOPSTICKS_SKILLS */ .zE.length / HELP_PAGE_SIZE);
        const page = helpPageIndex(state);
        const pageSkills = _skills__WEBPACK_IMPORTED_MODULE_1__/* .CHOPSTICKS_SKILLS */ .zE.slice(page * HELP_PAGE_SIZE, (page + 1) * HELP_PAGE_SIZE);
        body.push(_ansi__WEBPACK_IMPORTED_MODULE_0__.W + `Skill guide (H closes)  Page ${page + 1}/${pageCount}` + _ansi__WEBPACK_IMPORTED_MODULE_0__.X, ...pageSkills.map((skill)=>`  ${skill.name.padEnd(8)} ${skill.description}`));
    } else if (state.phase.type === 'skill') {
        const aiOwnsSkill = mode === 'solo' && state.phase.owner !== human;
        if (aiOwnsSkill) {
            body.push(_ansi__WEBPACK_IMPORTED_MODULE_0__.D + `${labels[state.phase.owner]} is choosing a skill…` + _ansi__WEBPACK_IMPORTED_MODULE_0__.X);
        } else {
            body.push(_ansi__WEBPACK_IMPORTED_MODULE_0__.W + `${playerName(state.phase.owner)} chooses a skill:` + _ansi__WEBPACK_IMPORTED_MODULE_0__.X);
            state.phase.choices.forEach((id, index)=>{
                const skill = _skills__WEBPACK_IMPORTED_MODULE_1__/* .SKILLS */ .J3[id];
                body.push(`${index === state.cursor.skill ? _ansi__WEBPACK_IMPORTED_MODULE_0__.Y + '> ' : '  '}${skill.name}  ${_ansi__WEBPACK_IMPORTED_MODULE_0__.D}${skill.description}${_ansi__WEBPACK_IMPORTED_MODULE_0__.X}`);
                hits.push({
                    x: 0,
                    y: 4 + index,
                    width: 28,
                    action: {
                        type: 'skill',
                        skill: id
                    }
                });
            });
            body.push(`${state.cursor.skill === state.phase.choices.length ? _ansi__WEBPACK_IMPORTED_MODULE_0__.Y + '> ' : '  '}Return to touch selection${_ansi__WEBPACK_IMPORTED_MODULE_0__.X}`);
            hits.push({
                x: 0,
                y: 4 + state.phase.choices.length,
                width: 28,
                action: {
                    type: 'back'
                }
            });
        }
    } else if (state.phase.type === 'over') {
        const human = soloSide === 'first' ? 0 : 1;
        const victoryColor = mode === 'solo' && state.phase.winner !== human ? _ansi__WEBPACK_IMPORTED_MODULE_0__.R : _ansi__WEBPACK_IMPORTED_MODULE_0__.G;
        body.push(victoryColor + victoryText(state.phase.winner, mode, soloSide) + _ansi__WEBPACK_IMPORTED_MODULE_0__.X, _ansi__WEBPACK_IMPORTED_MODULE_0__.D + 'Enter: new game  B: back to menu.' + _ansi__WEBPACK_IMPORTED_MODULE_0__.X);
    } else {
        body.push(_ansi__WEBPACK_IMPORTED_MODULE_0__.W + 'Choose touch: your hand → opponent hand' + _ansi__WEBPACK_IMPORTED_MODULE_0__.X);
        body.push(touchOption(state, 0, 0, state.cursor.from === 0 && state.cursor.target === 0));
        body.push(touchOption(state, 0, 1, state.cursor.from === 0 && state.cursor.target === 1));
        body.push(touchOption(state, 1, 0, state.cursor.from === 1 && state.cursor.target === 0));
        body.push(touchOption(state, 1, 1, state.cursor.from === 1 && state.cursor.target === 1));
        hits.push(...actionHits(state));
    }
    const aiSkillPhase = state.phase.type === 'skill' && mode === 'solo' && state.phase.owner !== human;
    const controls = aiSkillPhase ? 'AI choosing skill…  H rules  B menu  S save  L load  Esc pause' : state.showHelp ? 'PageUp/Down page  H close  B menu  S save  L load  Esc pause' : state.phase.type === 'skill' ? 'Up/Down select  Enter use  H rules  B menu  S save  L load  Esc pause' : 'Up/Down select  Enter touch  H rules  B menu  S save  L load  Esc pause';
    const aside = [
        _ansi__WEBPACK_IMPORTED_MODULE_0__.W + 'Skills' + _ansi__WEBPACK_IMPORTED_MODULE_0__.X,
        ..._skills__WEBPACK_IMPORTED_MODULE_1__/* .CHOPSTICKS_SKILLS */ .zE.map((skill)=>`${skill.name.padEnd(8)} ${skill.description}`)
    ];
    return {
        header: [
            title
        ],
        body: state.phase.type === 'over' ? body : [
            ...body,
            '',
            ...state.message.split('\n').map((line)=>_ansi__WEBPACK_IMPORTED_MODULE_0__.D + line + _ansi__WEBPACK_IMPORTED_MODULE_0__.X)
        ],
        footer: [
            _ansi__WEBPACK_IMPORTED_MODULE_0__.D + controls + _ansi__WEBPACK_IMPORTED_MODULE_0__.X
        ],
        aside,
        asideMinColumns: 58,
        asideGapColumns: 3,
        asideFallback: [
            _ansi__WEBPACK_IMPORTED_MODULE_0__.D + 'H: skill guide' + _ansi__WEBPACK_IMPORTED_MODULE_0__.X
        ],
        hits,
        focus: {
            row: state.phase.type === 'skill' ? 4 + state.cursor.skill : 4 + state.cursor.from * 2 + state.cursor.target,
            column: 0
        },
        footerMaxRows: 2
    };
}
function commit(state, action) {
    const next = transitionOnePlusOne(state, action);
    if (!next) return false;
    Object.assign(state, next);
    return true;
}
const chopsticks = {
    create: createOnePlusOneState,
    render: renderChopsticks,
    key: (state, key)=>{
        if (key === 'h') {
            state.showHelp = !state.showHelp;
            if (state.showHelp) state.helpPage = 0;
            return true;
        }
        if (state.showHelp) {
            const pageCount = Math.ceil(_skills__WEBPACK_IMPORTED_MODULE_1__/* .CHOPSTICKS_SKILLS */ .zE.length / HELP_PAGE_SIZE);
            const page = helpPageIndex(state);
            if (key === 'pageup') {
                state.helpPage = Math.max(0, page - 1);
                return true;
            }
            if (key === 'pagedown') {
                state.helpPage = Math.min(pageCount - 1, page + 1);
                return true;
            }
            return false;
        }
        if (state.phase.type === 'over') {
            if (key === 'enter' || key === 'r') {
                Object.assign(state, createOnePlusOneState());
                return true;
            }
            return false;
        }
        if (key === 'r') {
            Object.assign(state, createOnePlusOneState());
            return true;
        }
        if (state.phase.type === 'skill') {
            if (key === 'up') {
                state.cursor.skill = Math.max(0, state.cursor.skill - 1);
                return true;
            }
            if (key === 'down') {
                state.cursor.skill = Math.min(state.phase.choices.length, state.cursor.skill + 1);
                return true;
            }
            if (key !== 'enter') return false;
            if (state.cursor.skill === state.phase.choices.length) return returnFromSkill(state);
            return commit(state, {
                type: 'skill',
                skill: state.phase.choices[state.cursor.skill]
            });
        }
        if (selectTouch(state, key)) return true;
        return key === 'enter' ? commit(state, {
            type: 'touch',
            from: state.cursor.from,
            target: state.cursor.target
        }) : false;
    },
    pointer: (state, x, y)=>{
        if (state.phase.type === 'touch' && y >= 4 && y <= 7) {
            const index = y - 4;
            return commit(state, {
                type: 'touch',
                from: Math.floor(index / 2),
                target: index % 2
            });
        }
        if (state.phase.type === 'skill') {
            const index = y - 4;
            if (index === state.phase.choices.length) return returnFromSkill(state);
            const id = state.phase.choices[index];
            return id ? commit(state, {
                type: 'skill',
                skill: id
            }) : false;
        }
        return false;
    },
    isOver: (state)=>state.phase.type === 'over'
};


/***/ }),

/***/ 58670:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/chess.js/dist/esm/chess.js
var chess = __webpack_require__(64798);
// EXTERNAL MODULE: ./src/lib/xiangqi/vendor/xiangqi-core.js
var xiangqi_core = __webpack_require__(82673);
;// ./src/lib/xiangqi/xiangqi-engine.ts

/** Declare ESM-only packages that need Next.js transpilation. */ const TRANSPILE_DEPS = (/* unused pure expression or super */ null && ([
    'xiangqi.js'
]));
const XIANGQI_DEFAULT_FEN = 'rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r - - 0 1';
function getFactory() {
    const candidate = xiangqi_core/* default */.A;
    if (typeof candidate === 'function') {
        return candidate;
    }
    if (candidate && typeof candidate === 'object') {
        const inner = candidate.Xiangqi ?? candidate.default;
        if (typeof inner === 'function') {
            return inner;
        }
    }
    throw new Error('xiangqi.js: Xiangqi factory not found');
}
function createXiangqi(fen) {
    return getFactory()(fen);
}

// EXTERNAL MODULE: ./source/_components/Terminal/games/chopsticks/ai.ts
var ai = __webpack_require__(52231);
;// ./source/_components/Terminal/games/ai.ts



const WIN = 1000000;
const GOMOKU_DIRECTIONS = [
    [
        1,
        0
    ],
    [
        0,
        1
    ],
    [
        1,
        1
    ],
    [
        1,
        -1
    ]
];
/** Centipawn material values, shared by static evaluation and capture ordering. */ const CHESS_PIECE_VALUE = {
    p: 100,
    n: 320,
    b: 330,
    r: 500,
    q: 900,
    k: 20000
};
const XIANGQI_VALUE = {
    p: 70,
    n: 270,
    b: 120,
    a: 120,
    r: 600,
    c: 300,
    k: 20000
};
// The entries below are only ChessDB moves marked `!` (rank 2) and were
// recorded with their query scores. Scores express the advantage for the
// side to move, so a softmax makes better entries more likely without making
// close alternatives disappear.  FEN clocks are deliberately omitted from
// the keys: they do not alter the position or its opening identity.
const CHESS_OPENING_BOOK = {
    'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -': [
        {
            move: 'd2d4',
            score: 0
        },
        {
            move: 'e2e4',
            score: 0
        },
        {
            move: 'g1f3',
            score: 0
        },
        {
            move: 'b1c3',
            score: 0
        },
        {
            move: 'c2c4',
            score: 0
        },
        {
            move: 'g2g3',
            score: 0
        },
        {
            move: 'e2e3',
            score: 0
        },
        {
            move: 'c2c3',
            score: 0
        }
    ],
    'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq -': [
        {
            move: 'd7d5',
            score: -1
        },
        {
            move: 'e7e6',
            score: -1
        },
        {
            move: 'g8f6',
            score: -1
        },
        {
            move: 'c7c6',
            score: -2
        }
    ],
    'rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq -': [
        {
            move: 'c2c4',
            score: 1
        }
    ],
    'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq -': [
        {
            move: 'd5c4',
            score: -1
        },
        {
            move: 'c7c5',
            score: -1
        },
        {
            move: 'e7e6',
            score: -1
        },
        {
            move: 'c7c6',
            score: -1
        }
    ]
};
function mirrorXiangqiPosition(position) {
    const [board, turn] = position.split(' ');
    const mirroredBoard = board.split('/').map((rank)=>rank.replace(/[1-9]/g, (count)=>'.'.repeat(Number(count))).split('').reverse().join('').replace(/\.+/g, (empty)=>String(empty.length))).join('/');
    return `${mirroredBoard} ${turn}`;
}
function mirrorXiangqiMove(move) {
    return move.replace(/[a-i]/g, (file)=>String.fromCharCode(105 - (file.charCodeAt(0) - 97)));
}
function symmetricXiangqiBook(seeds) {
    const book = {};
    const add = (position, entries)=>{
        const destination = book[position] ?? (book[position] = []);
        for (const entry of entries)if (!destination.some(({ move })=>move === entry.move)) destination.push(entry);
    };
    for (const [position, entries] of Object.entries(seeds)){
        add(position, entries);
        add(mirrorXiangqiPosition(position), entries.map((entry)=>({
                ...entry,
                move: mirrorXiangqiMove(entry.move)
            })));
    }
    return book;
}
// Maintain only one side of each horizontal-symmetry pair. The runtime book
// expands every seed to its mirror and removes duplicate moves per position.
const XIANGQI_OPENING_BOOK = symmetricXiangqiBook({
    'rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR r': [
        {
            move: 'c3c4',
            score: 1
        }
    ],
    // 炮二平五，马8进7
    'rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C2C4/9/RNBAKABNR b': [
        {
            move: 'h9g7',
            score: -1
        }
    ],
    'rnbakabnr/9/1c5c1/p1p1p1p1p/9/2P6/P3P1P1P/1C5C1/9/RNBAKABNR b': [
        {
            move: 'b7c7',
            score: -1
        },
        {
            move: 'g6g5',
            score: -1
        }
    ],
    'rnbakabnr/9/2c4c1/p1p1p1p1p/9/2P6/P3P1P1P/1C5C1/9/RNBAKABNR r': [
        {
            move: 'h2e2',
            score: 2
        }
    ]
});
function openingKey(fen, fields) {
    return fen.trim().split(/\s+/).slice(0, fields).join(' ');
}
function openingMove(fen, fields, book, legalMoves) {
    const entries = book[openingKey(fen, fields)]?.filter((entry)=>legalMoves.includes(entry.move));
    if (!entries?.length) return null;
    const bestScore = Math.max(...entries.map((entry)=>entry.score));
    // Four centipawns gives close database candidates visibly different but
    // deliberately non-zero probabilities.
    const weights = entries.map((entry)=>Math.exp((entry.score - bestScore) / 4));
    const total = weights.reduce((sum, weight)=>sum + weight, 0);
    let target = Math.random() * total;
    for (const [index, entry] of entries.entries()){
        target -= weights[index];
        if (target <= 0) return entry.move;
    }
    return entries.at(-1)?.move ?? null;
}
function centerBonus(file, rank, maxFile, maxRank) {
    return Math.max(0, maxFile + maxRank - Math.abs(maxFile - file) - Math.abs(maxRank - rank));
}
function chessPositionBonus(type, color, file, rank) {
    const relativeRank = color === 'w' ? rank : 7 - rank;
    const center = centerBonus(file, rank, 3.5, 3.5);
    if (type === 'p') return relativeRank * 8 + center * 3;
    if (type === 'n' || type === 'b') return center * 6;
    if (type === 'r') return center * 2 + relativeRank;
    if (type === 'q') return center * 3;
    // Keep the king closer to its home rank until material is reduced.
    if (type === 'k') return -relativeRank * 3 - center * 2;
    return 0;
}
function xiangqiPositionBonus(type, color, file, rank) {
    const relativeRank = color === 'r' ? rank : 9 - rank;
    const center = centerBonus(file, rank, 4, 4.5);
    if (type === 'p') {
        const crossedRiver = relativeRank >= 5 ? 35 : 0;
        return relativeRank * 5 + crossedRiver + center * 4;
    }
    if (type === 'n' || type === 'c') return center * 8;
    if (type === 'r') return center * 3 + relativeRank * 2;
    if (type === 'b' || type === 'a') return -relativeRank * 2;
    if (type === 'k') return -relativeRank * 4 - center * 2;
    return 0;
}
class SearchTimeout extends Error {
}
function now() {
    return typeof performance !== 'undefined' ? performance.now() : Date.now();
}
function makeContext(budgetMs) {
    return {
        deadline: now() + Math.max(1, budgetMs),
        nodes: 0,
        depth: 0,
        table: new Map(),
        tableLimit: 50000
    };
}
function tick(context) {
    context.nodes++;
    if ((context.nodes & 15) === 0 && now() >= context.deadline) throw new SearchTimeout();
}
function putTable(context, key, depth, score) {
    if (context.table.size >= context.tableLimit) context.table.clear();
    context.table.set(key, {
        depth,
        score
    });
}
function pick(moves) {
    if (!moves.length) return null;
    moves.sort((a, b)=>b.score - a.score);
    return moves[0].move;
}
function gomokuWin(board, x, y, player) {
    return GOMOKU_DIRECTIONS.some(([dx, dy])=>{
        let count = 1;
        for (const sign of [
            -1,
            1
        ]){
            let nx = x + dx * sign;
            let ny = y + dy * sign;
            while(board[ny]?.[nx] === player){
                count++;
                nx += dx * sign;
                ny += dy * sign;
            }
        }
        return count >= 5;
    });
}
function gomokuWinningMoves(board, player) {
    const result = [];
    for(let y = 0; y < 15; y++)for(let x = 0; x < 15; x++)if (board[y][x] === 0) {
        board[y][x] = player;
        const wins = gomokuWin(board, x, y, player);
        board[y][x] = 0;
        if (wins) result.push([
            x,
            y
        ]);
    }
    return result;
}
function gomokuOpenThreeDirections(board, player) {
    let total = 0;
    const patterns = [
        '01110',
        '011010',
        '010110'
    ];
    const line = (startX, startY, dx, dy)=>{
        let value = '2';
        for(let x = startX, y = startY; board[y]?.[x] !== undefined; x += dx, y += dy)value += board[y][x] === 0 ? '0' : board[y][x] === player ? '1' : '2';
        value += '2';
        for (const pattern of patterns){
            let index = value.indexOf(pattern);
            while(index >= 0){
                total++;
                index = value.indexOf(pattern, index + 1);
            }
        }
    };
    for(let y = 0; y < 15; y++)line(0, y, 1, 0);
    for(let x = 0; x < 15; x++)line(x, 0, 0, 1);
    for(let x = 0; x < 15; x++)line(x, 0, 1, 1);
    for(let y = 1; y < 15; y++)line(0, y, 1, 1);
    for(let x = 0; x < 15; x++)line(x, 14, 1, -1);
    for(let y = 13; y >= 0; y--)line(0, y, 1, -1);
    return total;
}
function gomokuThreatScore(board, player) {
    const wins = gomokuWinningMoves(board, player).length;
    const threes = gomokuOpenThreeDirections(board, player);
    return wins * 100000 + (threes >= 2 ? 20000 + threes * 1000 : threes * 1000);
}
function gomokuMoveUrgency(board, x, y, player) {
    board[y][x] = player;
    let total = 0;
    for (const [dx, dy] of GOMOKU_DIRECTIONS){
        let length = 1;
        let open = 0;
        for (const sign of [
            -1,
            1
        ]){
            let nx = x + dx * sign;
            let ny = y + dy * sign;
            while(board[ny]?.[nx] === player){
                length++;
                nx += dx * sign;
                ny += dy * sign;
            }
            if (board[ny]?.[nx] === 0) open++;
        }
        total += length >= 5 ? WIN : length === 4 ? 100000 + open * 10000 : length === 3 ? 8000 + open * 2000 : length === 2 ? 300 + open * 100 : open * 4;
    }
    board[y][x] = 0;
    return total;
}
function gomokuCandidates(board, limit, player) {
    const candidates = new Set();
    let occupied = 0;
    for(let y = 0; y < 15; y++)for(let x = 0; x < 15; x++)if (board[y][x]) {
        occupied++;
        for(let dy = -2; dy <= 2; dy++)for(let dx = -2; dx <= 2; dx++){
            const nx = x + dx;
            const ny = y + dy;
            if (board[ny]?.[nx] === 0) candidates.add(`${nx},${ny}`);
        }
    }
    if (!occupied) return [
        [
            7,
            7
        ]
    ];
    const points = [
        ...candidates
    ].map((value)=>value.split(',').map(Number));
    if (!player) return points.sort((a, b)=>Math.abs(7 - a[0]) + Math.abs(7 - a[1]) - Math.abs(7 - b[0]) - Math.abs(7 - b[1])).slice(0, limit);
    const opponent = player === 1 ? 2 : 1;
    const urgency = ([x, y])=>{
        const attack = gomokuMoveUrgency(board, x, y, player);
        const defence = gomokuMoveUrgency(board, x, y, opponent);
        return attack + defence - (Math.abs(7 - x) + Math.abs(7 - y));
    };
    return points.sort((a, b)=>urgency(b) - urgency(a)).slice(0, limit);
}
function gomokuScore(board, player) {
    const score = (side)=>{
        let total = 0;
        for(let y = 0; y < 15; y++)for(let x = 0; x < 15; x++)if (board[y][x] === side) for (const [dx, dy] of [
            [
                1,
                0
            ],
            [
                0,
                1
            ],
            [
                1,
                1
            ],
            [
                1,
                -1
            ]
        ]){
            if (board[y - dy]?.[x - dx] === side) continue;
            let length = 0;
            let nx = x;
            let ny = y;
            while(board[ny]?.[nx] === side){
                length++;
                nx += dx;
                ny += dy;
            }
            const open = Number(board[ny]?.[nx] === 0) + Number(board[y - dy]?.[x - dx] === 0);
            const value = length >= 5 ? WIN : length === 4 ? open === 2 ? 80000 : 14000 : length === 3 ? open === 2 ? 4000 : 700 : length === 2 ? open === 2 ? 160 : 35 : 4;
            total += value * Math.max(1, open);
        }
        return total;
    };
    return score(player) - score(player === 1 ? 2 : 1);
}
function gomokuNegamax(board, player, depth, alpha, beta, context, cap) {
    tick(context);
    if (!depth) return gomokuScore(board, player);
    const key = `${player}:${depth}:${board.map((row)=>row.join('')).join('/')}`;
    const cached = context.table.get(key);
    if (cached && cached.depth >= depth) return cached.score;
    let best = -Infinity;
    for (const [x, y] of gomokuCandidates(board, cap, player)){
        board[y][x] = player;
        const value = gomokuWin(board, x, y, player) ? WIN + depth : -gomokuNegamax(board, player === 1 ? 2 : 1, depth - 1, -beta, -alpha, context, cap);
        board[y][x] = 0;
        best = Math.max(best, value);
        alpha = Math.max(alpha, value);
        if (alpha >= beta) break;
    }
    const result = best === -Infinity ? 0 : best;
    putTable(context, key, depth, result);
    return result;
}
function searchGomoku(state, context) {
    const board = state.board.map((row)=>row.slice());
    const player = state.turn;
    const opponent = player === 1 ? 2 : 1;
    const cap = 20;
    const wins = gomokuWinningMoves(board, player);
    if (wins.length) return [
        {
            move: {
                x: wins[0][0],
                y: wins[0][1]
            },
            score: WIN
        }
    ];
    const blocks = gomokuWinningMoves(board, opponent);
    if (blocks.length) return blocks.map(([x, y])=>({
            move: {
                x,
                y
            },
            score: WIN - 1
        }));
    const candidates = gomokuCandidates(board, cap, player);
    const opponentHasDoubleThree = gomokuOpenThreeDirections(board, opponent) >= 2;
    let roots = candidates;
    if (opponentHasDoubleThree) {
        const ranked = candidates.map((move)=>{
            board[move[1]][move[0]] = player;
            const threat = gomokuThreatScore(board, opponent);
            board[move[1]][move[0]] = 0;
            return {
                move,
                threat
            };
        }).sort((a, b)=>a.threat - b.threat);
        const leastThreat = ranked[0]?.threat;
        if (leastThreat !== undefined) roots = ranked.filter((item)=>item.threat === leastThreat).map((item)=>item.move);
    }
    let best = roots.map(([x, y])=>({
            move: {
                x,
                y
            },
            score: -Infinity
        }));
    const maximum = 6;
    for(let depth = 1; depth <= maximum; depth++){
        try {
            const scored = [];
            for (const [x, y] of roots){
                tick(context);
                board[y][x] = player;
                const score = -gomokuNegamax(board, opponent, depth - 1, -Infinity, Infinity, context, cap);
                board[y][x] = 0;
                scored.push({
                    move: {
                        x,
                        y
                    },
                    score
                });
            }
            best = scored;
            context.depth = depth;
        } catch (error) {
            if (error instanceof SearchTimeout) break;
            throw error;
        }
    }
    return best;
}
function reversiMoves(board, player) {
    const result = [];
    const other = player === 1 ? 2 : 1;
    for(let y = 0; y < 8; y++)for(let x = 0; x < 8; x++)if (!board[y][x]) {
        const flips = [];
        for (const [dx, dy] of [
            [
                1,
                0
            ],
            [
                -1,
                0
            ],
            [
                0,
                1
            ],
            [
                0,
                -1
            ],
            [
                1,
                1
            ],
            [
                1,
                -1
            ],
            [
                -1,
                1
            ],
            [
                -1,
                -1
            ]
        ]){
            const line = [];
            let nx = x + dx;
            let ny = y + dy;
            while(board[ny]?.[nx] === other){
                line.push([
                    nx,
                    ny
                ]);
                nx += dx;
                ny += dy;
            }
            if (line.length && board[ny]?.[nx] === player) flips.push(...line);
        }
        if (flips.length) result.push({
            x,
            y,
            flips
        });
    }
    return result;
}
function applyReversi(board, player, move) {
    const next = board.map((row)=>row.slice());
    next[move.y][move.x] = player;
    for (const [x, y] of move.flips)next[y][x] = player;
    return next;
}
function reversiScore(board, player) {
    const other = player === 1 ? 2 : 1;
    const count = board.flat().filter((v)=>v === player).length - board.flat().filter((v)=>v === other).length;
    const mobility = reversiMoves(board, player).length - reversiMoves(board, other).length;
    const corners = [
        [
            0,
            0
        ],
        [
            7,
            0
        ],
        [
            0,
            7
        ],
        [
            7,
            7
        ]
    ].reduce((total, [x, y])=>total + (board[y][x] === player ? 1 : board[y][x] === other ? -1 : 0), 0);
    const danger = [
        [
            1,
            1
        ],
        [
            6,
            1
        ],
        [
            1,
            6
        ],
        [
            6,
            6
        ]
    ].reduce((total, [x, y])=>total + (board[y][x] === player ? 1 : board[y][x] === other ? -1 : 0), 0);
    const filled = board.flat().filter(Boolean).length;
    return corners * 500 - danger * 120 + mobility * 18 + count * (filled > 48 ? 12 : 2);
}
function reversiNegamax(board, player, depth, alpha, beta, context) {
    tick(context);
    const moves = reversiMoves(board, player);
    const other = player === 1 ? 2 : 1;
    if (!depth || !moves.length && !reversiMoves(board, other).length) return reversiScore(board, player);
    if (!moves.length) return -reversiNegamax(board, other, depth - 1, -beta, -alpha, context);
    const key = `${player}:${depth}:${board.map((row)=>row.join('')).join('')}`;
    const cached = context.table.get(key);
    if (cached && cached.depth >= depth) return cached.score;
    let best = -Infinity;
    for (const move of moves.sort((a, b)=>b.flips.length - a.flips.length)){
        const value = -reversiNegamax(applyReversi(board, player, move), other, depth - 1, -beta, -alpha, context);
        best = Math.max(best, value);
        alpha = Math.max(alpha, value);
        if (alpha >= beta) break;
    }
    putTable(context, key, depth, best);
    return best;
}
function searchReversi(state, context) {
    const roots = reversiMoves(state.board, state.turn);
    let best = roots.map((move)=>({
            move: {
                x: move.x,
                y: move.y
            },
            score: -Infinity
        }));
    const maximum = 6;
    for(let depth = 1; depth <= maximum; depth++){
        try {
            const scored = roots.map((move)=>({
                    move: {
                        x: move.x,
                        y: move.y
                    },
                    score: -reversiNegamax(applyReversi(state.board, state.turn, move), state.turn === 1 ? 2 : 1, depth - 1, -Infinity, Infinity, context)
                }));
            best = scored;
            context.depth = depth;
        } catch (error) {
            if (error instanceof SearchTimeout) break;
            throw error;
        }
    }
    return best;
}
function chessScore(game) {
    if (game.isCheckmate()) return -WIN;
    if (game.isDraw()) return 0;
    let score = 0;
    let whiteBishops = 0;
    let blackBishops = 0;
    for (const row of game.board())for (const piece of row)if (piece) {
        const value = CHESS_PIECE_VALUE[piece.type] ?? 0;
        const file = piece.square.charCodeAt(0) - 97;
        const rank = Number(piece.square[1]) - 1;
        if (piece.type === 'b') {
            if (piece.color === 'w') whiteBishops++;
            else blackBishops++;
        }
        score += (piece.color === 'w' ? 1 : -1) * (value + chessPositionBonus(piece.type, piece.color, file, rank));
    }
    // The bishop pair is a meaningful material/coordination advantage.
    if (whiteBishops >= 2) score += 30;
    if (blackBishops >= 2) score -= 30;
    return (game.turn() === 'w' ? 1 : -1) * score;
}
function chessOrder(moves) {
    const score = (move)=>(move.captured ? (CHESS_PIECE_VALUE[move.captured] ?? 0) * 16 - (CHESS_PIECE_VALUE[move.piece] ?? 0) : 0) + (move.promotion ? (CHESS_PIECE_VALUE[move.promotion] ?? 0) + 800 : 0) + (move.san.includes('+') ? 300 : 0);
    return [
        ...moves
    ].sort((a, b)=>score(b) - score(a));
}
function chessNegamax(game, depth, alpha, beta, context) {
    tick(context);
    if (!depth || game.isGameOver()) return chessScore(game);
    const key = `${depth}:${game.fen()}`;
    const cached = context.table.get(key);
    if (cached && cached.depth >= depth) return cached.score;
    let best = -Infinity;
    for (const move of chessOrder(game.moves({
        verbose: true
    }))){
        game.move(move);
        const value = -chessNegamax(game, depth - 1, -beta, -alpha, context);
        game.undo();
        best = Math.max(best, value);
        alpha = Math.max(alpha, value);
        if (alpha >= beta) break;
    }
    putTable(context, key, depth, best);
    return best;
}
function searchChess(state, context) {
    const game = new chess/* Chess */.d$(state.fen);
    const bookMove = openingMove(game.fen(), 4, CHESS_OPENING_BOOK, game.moves({
        verbose: true
    }).map((move)=>`${move.from}${move.to}${move.promotion ?? ''}`));
    if (bookMove) return [
        {
            move: {
                from: bookMove.slice(0, 2),
                to: bookMove.slice(2, 4),
                promotion: bookMove.slice(4) || undefined
            },
            score: WIN
        }
    ];
    let roots = chessOrder(game.moves({
        verbose: true
    }));
    let best = roots.map((move)=>({
            move: {
                from: move.from,
                to: move.to,
                promotion: move.promotion
            },
            score: -Infinity
        }));
    const maximum = 8;
    for(let depth = 1; depth <= maximum; depth++){
        try {
            const scored = [];
            let alpha = -Infinity;
            for (const move of roots){
                game.move(move);
                const score = -chessNegamax(game, depth - 1, -Infinity, -alpha, context);
                game.undo();
                scored.push({
                    move: {
                        from: move.from,
                        to: move.to,
                        promotion: move.promotion
                    },
                    score
                });
                alpha = Math.max(alpha, score);
            }
            best = scored;
            roots = scored.sort((a, b)=>b.score - a.score).map((move)=>({
                    from: move.move.from,
                    to: move.move.to,
                    promotion: move.move.promotion
                }));
            context.depth = depth;
        } catch (error) {
            if (error instanceof SearchTimeout) break;
            throw error;
        }
    }
    return best;
}
function xiangqiScore(game) {
    if (game.in_checkmate?.()) return -WIN;
    let score = 0;
    const board = game.board?.() ?? [];
    for (const [rowIndex, row] of board.entries())for (const [file, piece] of row.entries())if (piece) score += (piece.color === 'r' ? 1 : -1) * ((XIANGQI_VALUE[piece.type] ?? 0) + xiangqiPositionBonus(piece.type, piece.color, file, 9 - rowIndex));
    return (game.turn() === 'r' ? 1 : -1) * score;
}
function xiangqiOrder(game, moves) {
    const board = game.board?.() ?? [];
    const pieceAt = (square)=>{
        const file = square.charCodeAt(0) - 97;
        const rank = Number(square[1]);
        return board[9 - rank]?.[file] ?? null;
    };
    const score = (move)=>{
        const attacker = pieceAt(move.slice(0, 2));
        const captured = pieceAt(move.slice(2, 4));
        const file = move.charCodeAt(2) - 97;
        const rank = Number(move[3]);
        const relativeRank = attacker?.color === 'r' ? rank : 9 - rank;
        const center = centerBonus(file, rank, 4, 4.5);
        const development = attacker?.type === 'n' || attacker?.type === 'c' ? center * 8 : attacker?.type === 'p' ? relativeRank * 6 + center * 6 : 0;
        if (!captured) return development;
        // Most-valuable-victim / least-valuable-attacker ordering improves pruning.
        return (XIANGQI_VALUE[captured.type] ?? 0) * 16 - (XIANGQI_VALUE[attacker?.type ?? ''] ?? 0) + development;
    };
    return [
        ...moves
    ].sort((a, b)=>score(b) - score(a));
}
function xiangqiNegamax(game, depth, alpha, beta, context) {
    tick(context);
    if (!depth || game.game_over?.()) return xiangqiScore(game);
    const key = `${depth}:${game.fen()}`;
    const cached = context.table.get(key);
    if (cached && cached.depth >= depth) return cached.score;
    let best = -Infinity;
    for (const move of xiangqiOrder(game, game.moves())){
        game.move(move);
        const value = -xiangqiNegamax(game, depth - 1, -beta, -alpha, context);
        game.undo();
        best = Math.max(best, value);
        alpha = Math.max(alpha, value);
        if (alpha >= beta) break;
    }
    // A beta cutoff is only a bound, not an exact position value.  Reusing it
    // as exact was both tactically unsound and made move choices unstable.
    if (alpha < beta) putTable(context, key, depth, best);
    return best;
}
function searchXiangqi(state, context) {
    const game = createXiangqi(state.fen);
    const bookMove = openingMove(game.fen(), 2, XIANGQI_OPENING_BOOK, game.moves());
    if (bookMove) return [
        {
            move: {
                from: bookMove.slice(0, 2),
                to: bookMove.slice(2, 4)
            },
            score: WIN
        }
    ];
    let roots = xiangqiOrder(game, game.moves());
    let best = roots.map((move)=>({
            move: {
                from: move.slice(0, 2),
                to: move.slice(2, 4)
            },
            score: -Infinity
        }));
    const maximum = 8;
    for(let depth = 1; depth <= maximum; depth++){
        try {
            const scored = [];
            let alpha = -Infinity;
            for (const move of roots){
                game.move(move);
                const score = -xiangqiNegamax(game, depth - 1, -Infinity, -alpha, context);
                game.undo();
                scored.push({
                    move: {
                        from: move.slice(0, 2),
                        to: move.slice(2, 4)
                    },
                    score
                });
                alpha = Math.max(alpha, score);
            }
            best = scored;
            roots = scored.sort((a, b)=>b.score - a.score).map((move)=>`${move.move.from}${move.move.to}`);
            context.depth = depth;
        } catch (error) {
            if (error instanceof SearchTimeout) break;
            throw error;
        }
    }
    return best;
}
function chopsticksActor(state) {
    return state.phase.type === 'skill' ? state.phase.owner : state.turn;
}
function chopsticksScore(state, perspective) {
    if (state.phase.type === 'over') return state.phase.winner === perspective ? WIN : -WIN;
    const enemy = perspective === 0 ? 1 : 0;
    const hp = (state.players[perspective].hp - state.players[enemy].hp) * 100;
    const hands = Number(state.players[perspective].hands[0]) + Number(state.players[perspective].hands[1]) - Number(state.players[enemy].hands[0]) - Number(state.players[enemy].hands[1]);
    // Fire Eyes is valued through its searched extra action, not a fixed bonus.
    return hp + hands;
}
function chopsticksKey(state, depth, perspective) {
    const skills = state.phase.type === 'skill' ? state.phase.choices.join(',') : '';
    const phase = state.phase.type === 'skill' ? `${state.phase.type}:${state.phase.owner}:${state.phase.nextTurn}:${skills}` : state.phase.type === 'over' ? `over:${state.phase.winner}` : 'touch';
    return `${depth}:${perspective}:${state.turn}:${state.extraTurns.join(',')}:${state.players.map((player)=>`${player.hp}/${player.hands.join('')}`).join('|')}:${phase}`;
}
function chopsticksMinimax(state, perspective, depth, alpha, beta, context) {
    tick(context);
    if (!depth || state.phase.type === 'over') return chopsticksScore(state, perspective);
    const key = chopsticksKey(state, depth, perspective);
    const cached = context.table.get(key);
    if (cached && cached.depth >= depth) return cached.score;
    const maximizing = chopsticksActor(state) === perspective;
    let best = maximizing ? -Infinity : Infinity;
    let low = alpha;
    let high = beta;
    for (const action of (0,ai/* legalOnePlusOneActions */.D)(state)){
        const next = (0,ai/* transitionOnePlusOne */.s)(state, action);
        if (!next) continue;
        const score = chopsticksMinimax(next, perspective, depth - 1, low, high, context);
        if (maximizing) {
            best = Math.max(best, score);
            low = Math.max(low, best);
        } else {
            best = Math.min(best, score);
            high = Math.min(high, best);
        }
        if (low >= high) break;
    }
    if (!Number.isFinite(best)) best = chopsticksScore(state, perspective);
    putTable(context, key, depth, best);
    return best;
}
function searchChopsticks(state, context) {
    const actions = (0,ai/* legalOnePlusOneActions */.D)(state);
    if (!actions.length) return [];
    const perspective = chopsticksActor(state);
    const immediateWin = actions.find((action)=>{
        const next = (0,ai/* transitionOnePlusOne */.s)(state, action);
        return next?.phase.type === 'over' && next.phase.winner === perspective;
    });
    if (immediateWin) return [
        {
            move: immediateWin,
            score: WIN
        }
    ];
    let best = actions.map((move)=>({
            move,
            score: -Infinity
        }));
    for(let depth = 1; depth <= 7; depth++){
        try {
            const scored = actions.map((action)=>{
                const next = (0,ai/* transitionOnePlusOne */.s)(state, action);
                const score = next ? chopsticksMinimax(next, perspective, depth - 1, -Infinity, Infinity, context) : -Infinity;
                return {
                    move: action,
                    score
                };
            });
            best = scored;
            context.depth = depth;
        } catch (error) {
            if (error instanceof SearchTimeout) break;
            throw error;
        }
    }
    return best;
}
function searchAi(request) {
    const started = now();
    const context = makeContext(request.budgetMs);
    let moves = [];
    try {
        if (request.game === 'gomoku') moves = searchGomoku(request.state, context);
        else if (request.game === 'reversi') moves = searchReversi(request.state, context);
        else if (request.game === 'chess') moves = searchChess(request.state, context);
        else if (request.game === 'xiangqi') moves = searchXiangqi(request.state, context);
        else moves = searchChopsticks(request.state, context);
    } catch (error) {
        if (!(error instanceof SearchTimeout)) throw error;
    }
    return {
        requestId: request.requestId,
        game: request.game,
        move: pick(moves),
        stats: {
            depth: context.depth,
            nodes: context.nodes,
            elapsedMs: Math.round(now() - started)
        }
    };
}
/** A tiny, synchronous legal fallback used only if a Worker cannot be created. */ function fallbackAi(request) {
    return searchAi({
        ...request,
        budgetMs: 4
    });
}

;// ./source/_components/Terminal/games/game-ai.worker.ts
/// <reference lib="webworker" />

self.onmessage = (event)=>{
    try {
        self.postMessage(searchAi(event.data));
    } catch (cause) {
        self.postMessage({
            requestId: event.data.requestId,
            error: cause instanceof Error ? cause.message : 'AI search failed'
        });
    }
};


/***/ }),

/***/ 68422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ D),
/* harmony export */   G: () => (/* binding */ G),
/* harmony export */   R: () => (/* binding */ R),
/* harmony export */   W: () => (/* binding */ W),
/* harmony export */   X: () => (/* binding */ X),
/* harmony export */   Y: () => (/* binding */ Y)
/* harmony export */ });
/* unused harmony exports C, B, H, P, linkText, OFFICIAL_THEME */
const G = '\x1b[32m';
const R = '\x1b[31m';
const Y = '\x1b[33m';
const C = '\x1b[36m';
const B = '\x1b[34m';
const D = '\x1b[38;2;184;184;184m';
const W = '\x1b[1;37m';
const X = '\x1b[0m';
const H = '\x1b[1m';
const P = '\x1b[38;2;136;97;154m';
const OSC_LINK_OPEN = '\x1b]8;;';
const OSC_LINK_CLOSE = '\x1b]8;;\x07';
const BEL = '\x07';
/**
 * Render text as an OSC 8 hyperlink that xterm can activate with a click.
 * Only local paths and HTTP(S) URLs are accepted so terminal output cannot
 * accidentally emit executable URI schemes.
 */ function linkText(text, url) {
    const safeText = text.replace(/[\u0000-\u001f\u007f]/g, ' ');
    const safeUrl = url.replace(/[\u0000-\u001f\u007f]/g, '');
    if (!/^(?:https?:\/\/|\/|#)/i.test(safeUrl)) return safeText;
    return OSC_LINK_OPEN + safeUrl + BEL + '\x1b[4m' + safeText + '\x1b[24m' + OSC_LINK_CLOSE;
}
const OFFICIAL_THEME = {
    foreground: '#F8F8F8',
    background: '#2D2E2C',
    selectionBackground: '#5DA5D533',
    black: '#1E1E1D',
    brightBlack: '#262625',
    red: '#CE5C5C',
    brightRed: '#FF7272',
    green: '#5BCC5B',
    brightGreen: '#72FF72',
    yellow: '#CCCC5B',
    brightYellow: '#FFFF72',
    blue: '#5D5DD3',
    brightBlue: '#7279FF',
    magenta: '#BC5ED1',
    brightMagenta: '#E572FF',
    cyan: '#5DA5D5',
    brightCyan: '#72F0FF',
    white: '#F8F8F8',
    brightWhite: '#FFFFFF',
    cursor: '#F8F8F8'
};


/***/ }),

/***/ 74343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J3: () => (/* binding */ SKILLS),
/* harmony export */   yS: () => (/* binding */ triggeredSkills),
/* harmony export */   zE: () => (/* binding */ CHOPSTICKS_SKILLS)
/* harmony export */ });
const other = (player)=>player === 0 ? 1 : 0;
const pair = (hands, value)=>hands[0] === value && hands[1] === value;
const combination = (hands, left, right)=>hands[0] === left && hands[1] === right || hands[0] === right && hands[1] === left;
function damage(state, player, amount) {
    state.players[player].hp -= amount;
}
function heal(state, player, amount) {
    state.players[player].hp += amount;
}
const SKILLS = {
    cross: {
        id: 'cross',
        name: '十字架',
        description: '11: Kill opponent',
        effect: ()=>{}
    },
    tornado: {
        id: 'tornado',
        name: '竜巻',
        description: '15: Opponent -1 HP',
        effect: (s, p)=>damage(s, other(p), 1)
    },
    arrow: {
        id: 'arrow',
        name: '一矢貫心',
        description: '10: Opponent -1 HP',
        effect: (s, p)=>damage(s, other(p), 1)
    },
    'fiery-eyes': {
        id: 'fiery-eyes',
        name: '火眼金睛',
        description: '22: Take one extra turn',
        effect: (s, p)=>s.extraTurns[p]++
    },
    'samadhi-fire': {
        id: 'samadhi-fire',
        name: '三昧真火',
        description: '33: Opponent -2 HP',
        effect: (s, p)=>damage(s, other(p), 2)
    },
    'caesar-claw': {
        id: 'caesar-claw',
        name: 'カイザー雷爪',
        description: 'Single 4: Opponent -2 HP',
        effect: (s, p)=>damage(s, other(p), 2)
    },
    'banana-fan': {
        id: 'banana-fan',
        name: '芭蕉扇',
        description: '44: Opponent -4 HP',
        effect: (s, p)=>damage(s, other(p), 4)
    },
    'mountain-wave': {
        id: 'mountain-wave',
        name: '排山倒海',
        description: '55: Opponent -4 HP',
        effect: (s, p)=>damage(s, other(p), 4)
    },
    drink: {
        id: 'drink',
        name: '一献',
        description: 'Single 6: Self +1 HP',
        effect: (s, p)=>heal(s, p, 1)
    },
    bagua: {
        id: 'bagua',
        name: '八卦',
        description: '66: Opponent -5 HP',
        effect: (s, p)=>damage(s, other(p), 5)
    },
    dart: {
        id: 'dart',
        name: '飛苦無',
        description: '77: Opponent -1 HP',
        effect: (s, p)=>damage(s, other(p), 1)
    },
    'dynamic-wave': {
        id: 'dynamic-wave',
        name: 'アクションビーム',
        description: '88: Opponent -2 HP',
        effect: (s, p)=>damage(s, other(p), 2)
    },
    'soul-hook': {
        id: 'soul-hook',
        name: '魂狩り',
        description: 'Single 9: Opponent -1, Self +1',
        effect: (s, p)=>{
            damage(s, other(p), 1);
            heal(s, p, 1);
        }
    },
    chain: {
        id: 'chain',
        name: '鉄鎖',
        description: '99: Opponent -4 HP',
        effect: (s, p)=>damage(s, other(p), 4)
    },
    elixir: {
        id: 'elixir',
        name: '仙丹',
        description: 'Single 0: Self +1 HP',
        effect: (s, p)=>heal(s, p, 1)
    },
    'panda-punch': {
        id: 'panda-punch',
        name: 'パンダ拳',
        description: '00: Opponent -4 HP',
        effect: (s, p)=>damage(s, other(p), 4)
    },
    thunder: {
        id: 'thunder',
        name: '轟天雷',
        description: '50: Opponent -2 HP',
        effect: (s, p)=>damage(s, other(p), 2)
    }
};
const CHOPSTICKS_SKILLS = Object.values(SKILLS);
function triggeredSkills(before, after, target) {
    const choices = [];
    // The initial 11 is inert, and touching zero keeps the existing 11 intact.
    // A newly formed 11 still wins immediately.
    if (pair(after, 1) && !pair(before, 1)) return [
        'cross'
    ];
    const value = after[target];
    if (value === 4) choices.push('caesar-claw');
    if (value === 6) choices.push('drink');
    if (value === 9) choices.push('soul-hook');
    if (value === 0) choices.push('elixir');
    if (pair(after, 2)) choices.push('fiery-eyes');
    if (pair(after, 3)) choices.push('samadhi-fire');
    if (pair(after, 4)) choices.push('banana-fan');
    if (pair(after, 5)) choices.push('mountain-wave');
    if (pair(after, 6)) choices.push('bagua');
    if (pair(after, 7)) choices.push('dart');
    if (pair(after, 8)) choices.push('dynamic-wave');
    if (pair(after, 9)) choices.push('chain');
    if (pair(after, 0)) choices.push('panda-punch');
    if (combination(after, 1, 5)) choices.push('tornado');
    if (combination(after, 1, 0)) choices.push('arrow');
    if (combination(after, 5, 0)) choices.push('thunder');
    return choices;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [4798,1931], () => (__webpack_require__(58670)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === 1931) return "static/chunks/1931-956666a357f28448.js";
/******/ 			// return url for filenames based on template
/******/ 			return "static/chunks/" + chunkId + "." + "68184929275b77ad" + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types policy */
/******/ 	(() => {
/******/ 		var policy;
/******/ 		__webpack_require__.tt = () => {
/******/ 			// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 			if (policy === undefined) {
/******/ 				policy = {
/******/ 					createScriptURL: (url) => (url)
/******/ 				};
/******/ 				if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 					policy = trustedTypes.createPolicy("nextjs#bundler", policy);
/******/ 				}
/******/ 			}
/******/ 			return policy;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script url */
/******/ 	(() => {
/******/ 		__webpack_require__.tu = (url) => (__webpack_require__.tt().createScriptURL(url));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/_next/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			4168: 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.tu(__webpack_require__.p + __webpack_require__.u(chunkId)));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			return Promise.all([
/******/ 				__webpack_require__.e(4798),
/******/ 				__webpack_require__.e(1931)
/******/ 			]).then(next);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	_N_E = __webpack_exports__;
/******/ 	
/******/ })()
;