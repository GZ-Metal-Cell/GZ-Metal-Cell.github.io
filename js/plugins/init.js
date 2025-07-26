function handleHexoBlogDecryptEvent() {
    console.log("handleHexoBlogDecryptEvent()");
    $(document).ready(function () {
        init();
    });
}

const FUNCTIONS_TO_INITIALIZE = [
    'initGallery',
    'initToc',
    'initPhotoFigcaption',
    'initFancybox',
    'initTextIndent',
    'initHighlightTools',
    'initTabs',
    'initTagHide',
    'initMathjax',
    'initKatex',
    'initWordCount',
    'initRef',
    'initMermaid',
    'initAlertTitle'
];

function init() {
    FUNCTIONS_TO_INITIALIZE.forEach(funcName => {
        const func = window[funcName];  // Attempt to access the function globally
        if (typeof func === 'function') {
            func();
        }
    });
}

window.addEventListener('hexo-blog-decrypt', handleHexoBlogDecryptEvent);