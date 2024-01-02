// 定义回调函数
function handleHexoBlogDecrypt() {
    console.log("hexo-blog-decrypt 事件已触发");
    // 执行其他操作...
    // console.log(document.documentElement.outerHTML);
}

// 添加事件监听器
window.addEventListener("hexo-blog-decrypt", handleHexoBlogDecrypt, false);
// 触发事件
var event = new Event("hexo-blog-decrypt");
window.dispatchEvent(event);
