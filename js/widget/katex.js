function initKatex() {
    renderMathInElement(document.body, {
        delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false }
        ],
        macros: {
            "\\ge": "\\geqslant",
            "\\le": "\\leqslant",
            "\\geq": "\\geqslant",
            "\\leq": "\\leqslant"
        }
    });
}
