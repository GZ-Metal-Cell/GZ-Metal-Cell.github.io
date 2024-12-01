function handleHexoBlogDecryptEvent() {
    console.log("handleHexoBlogDecryptEvent()");
    $(document).ready(function () {
        init();
    });
}
function init() {
    const functionsToInitialize = [
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

    functionsToInitialize.forEach(funcName => {
        const func = window[funcName];  // Attempt to access the function globally
        if (typeof func === 'function') {
            try {
                func();
            } catch (error) {
                console.error(`Error initializing function: ${funcName}`, error);
            }
        }
    });
}

window.addEventListener('hexo-blog-decrypt', handleHexoBlogDecryptEvent);