function handleHexoBlogDecryptEvent() {
    console.log("handleHexoBlogDecryptEvent()");
    $(document).ready(function() {
        initJS();
    });
}

function initJS(){
    if (typeof initToc === 'function') {
        initToc();
    }
    if (typeof initPhotoFigcaption === 'function') {
        initPhotoFigcaption();
    }
    if (typeof initFancybox === 'function') {
        initFancybox();
    }
    if (typeof initTabs === 'function') {
        initTabs();
    }
    if (typeof initTagHide === 'function') {
        initTagHide();
    }
    if (typeof replaceSpacesWithNbsp === 'function') {
        replaceSpacesWithNbsp();
    }
    if (typeof initMathjax === 'function') {
        initMathjax();
    }
    if (typeof initKatex === 'function') {
        initKatex();
    }
    if (typeof initHighlightTools === 'function'){
        initHighlightTools();
    }
}

window.addEventListener('hexo-blog-decrypt', handleHexoBlogDecryptEvent);
