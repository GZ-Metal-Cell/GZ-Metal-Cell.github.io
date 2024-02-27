// trigger event
var event = new Event('hexo-blog-decrypt');
window.dispatchEvent(event);

// 定义回调函数
function handleHexoBlogDecryptEvent() {
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
}

// 添加事件监听器
window.addEventListener('hexo-blog-decrypt', handleHexoBlogDecryptEvent);
