function createHighlightTools(codeBlocks, copyIcon, closeCodeBlockIcon, highlightShrink) {
    codeBlocks.forEach(function (codeBlock) {
        if (!codeBlock.querySelector('code'))
            return;
        var container = createContainer(codeBlock);
        createCopyButton(container, codeBlock, copyIcon);
        createCodeLangText(container, codeBlock);
        createCloseCodeBlockButton(container, codeBlock, closeCodeBlockIcon, highlightShrink);
    });
}
function createContainer(codeBlock) {
    // 创建包裹代码块和按钮的容器元素
    var container = document.createElement('div');
    container.className = 'hightlight-tools';
    // 将容器元素插入到代码块之前
    codeBlock.parentNode.insertBefore(container, codeBlock);
    return container;
}
function createCopyButton(container, codeBlock, icon) {
    var button = document.createElement('button');
    button.className = 'copy-button';
    button.type = 'button';
    button.title = 'copy-button';
    button.style.backgroundImage = 'url("' + icon + '")';
    // 将按钮添加到容器元素内
    container.appendChild(button);
    // 创建提示文字
    // 创建 <span> 元素
    var span = document.createElement('span');
    span.textContent = "已复制";
    // 添加类名
    span.className = 'copy-notice';
    // 将文字添加到容器元素内
    container.appendChild(span);

    button.addEventListener('click', function () {
        // 获取代码块的文本内容，包括换行符
        var code = codeBlock.innerText;
        // 创建一个临时的textarea元素，并将代码块的内容设置为其值
        var textarea = document.createElement('textarea');
        textarea.value = code;
        // 将textarea元素追加到body中
        document.body.appendChild(textarea);
        // 选中textarea中的文本
        textarea.select();
        // 执行复制操作
        document.execCommand('copy');
        // 移除临时的textarea元素
        document.body.removeChild(textarea);
        // 已复制
        span.style.opacity = 1;
        // 2 秒后将目标元素的透明度设置为 0
        setTimeout(function () {
            span.style.opacity = 0;
        }, 1000);
    });
}

function createCodeLangText(container, codeBlock) {
    // 创建提示文字
    // 创建 <span> 元素
    var span = document.createElement('span');
    span.textContent = codeBlock.querySelector('.hljs').classList.value.replace('hljs ', '').toUpperCase();  // 代码语言
    if (span.textContent === 'EBNF')
        span.textContent = '';
    // 添加类名
    span.className = 'code-lang';
    // 将文字添加到容器元素内
    container.appendChild(span);
}

function createCloseCodeBlockButton(container, codeBlock, icon, highlightShrink)
{
    var button = document.createElement('button');
    button.className = 'close-code-block-button';
    button.type = 'button';
    button.title = 'close-code-block-button';
    button.style.backgroundImage = 'url("' + icon + '")';
    // 将按钮添加到容器元素内
    container.appendChild(button);
    if(highlightShrink)
    {
        var hljs = codeBlock.querySelector('.hljs');
        button.style.transform = "rotate(-90deg)";
        hljs.classList.add("closed");
    }
    button.addEventListener('click', function () {
        var hljs = codeBlock.querySelector('.hljs');
        if (!hljs.classList.contains('closed')) {
            button.style.transform = "rotate(-90deg)";
            hljs.classList.add("closed");
        }else{
            button.style.transform = "rotate(0deg)";
            hljs.classList.remove("closed");
        }
    });
}