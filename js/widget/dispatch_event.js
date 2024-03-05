function handleHexoBlogDecryptEvent() {
    console.log("handleHexoBlogDecryptEvent()");
    if (typeof initToc === 'function') {
        initToc();
    }
    if (typeof initPhotoFigcaption === 'function') {
        initPhotoFigcaption();
    }
    if (typeof initFancybox === 'function') {
        initFancybox();
    }  
    if (typeof initMathjax === 'function') {
        initMathjax();
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
    if (typeof initKatex === 'function') {
        initKatex();
    }
    if (typeof initHighlightTools === 'function'){
        initHighlightTools();
    }
}

$(document).ready(function () {
    // trigger event
    var event = new Event('hexo-blog-decrypt');
    window.dispatchEvent(event);
	// 添加事件监听器
    window.addEventListener('hexo-blog-decrypt', handleHexoBlogDecryptEvent);
});