function initHighlightTools() {
    var codeBlocks = $('.highlight');  // $('.hljs').closest('pre');

    if (codeBlocks.attr('highlight-tools') != undefined) {
        return;
    } else {
        codeBlocks.attr('highlight-tools', '');
    }

    $(codeBlocks).each(function () {
        var $this = $(this);
        setHighlightHeightLimit($this, HIGHLIGHT_HEIGHT_LIMIT);
        $this.attr('class', $this.find('.hljs').attr('class'));
        $this.removeClass('hljs');
        $this.addClass('highlight');
        if ($this.hasClass('plaintext')) {
            return;
        }
        var $highLightTools = createContainer($this);
        var $codeBlock = $this.find('.code');
        createCopyButton($highLightTools, $codeBlock,  COPY_ICON);
        createCodeLangText($highLightTools, $codeBlock);
        createCloseCodeBlockButton($highLightTools, $this, CLOSE_CODE_BLOCK_ICON, HIGHLIGHT_SHRINK);
    });
}

function createContainer($codeBlock) {
    // 创建包裹代码块和按钮的容器元素
    var $highLightTools = $('<div class="highlight-tools"></div>');
    // 将容器元素插入到代码块的第一个子元素之前
    $codeBlock.children().first().before($highLightTools);
    return $highLightTools;
}

function createCopyButton($highLightTools, $codeBlock, icon) {
    // 创建复制按钮并设置样式
    var $button = $('<button class="copy-button" type="button" title="复制代码"></button>').css('backgroundImage', 'url("' + icon + '")');
    $highLightTools.append($button);

    $button.click(function () {
        // 创建已复制提示文字
        var $span = $('<span class="copy-notice">已复制</span>');
        $highLightTools.append($span);
        // 使用 innerText 获取文本内容，以保留格式
        var innerText = $codeBlock.get(0).innerText; // 使用 .get(0) 来获取原生 DOM 元素
        // 执行复制操作
        navigator.clipboard.writeText(innerText).then(function () {
            // 显示已复制提示，并在 1 秒后隐藏
            $span.css('opacity', 1);
            setTimeout(function () {
                $span.css('opacity', 0);
                setTimeout(function () {
                    $span.remove();
                }, 500);
            }, 1000);
        }).catch(function (err) {
            // 如果复制失败，显示错误信息
            console.error('Failed to copy text:', err);
            $span.remove();
        });
    });
}

function createCodeLangText($highLightTools, $codeBlock) {
    // 获取代码语言并创建对应的提示文字
    var lang = $codeBlock.find('.hljs').attr('class').replace('hljs ', '').toUpperCase();
    var $span = $('<span class="code-lang">' + lang + '</span>');

    // 将提示文字添加到容器内
    $highLightTools.append($span);
}

function createCloseCodeBlockButton($highLightTools, $codeBlock, icon, highlightShrink) {
    // 创建关闭代码块按钮并设置样式
    var $button = $('<button class="close-code-block-button" type="button" title="close-code-block-button"></button>').css('backgroundImage', 'url("' + icon + '")');
    $highLightTools.append($button);

    if (highlightShrink == 'true') {
        var $hljs = $codeBlock.find('.hljs');
        $button.css('transform', "rotate(-90deg)");
        $hljs.addClass("closed");
    }

    $button.click(function () {
        if (!$codeBlock.hasClass('closed')) {
            $button.css('transform', "rotate(-90deg)");
            $codeBlock.addClass("closed");
        } else {
            $button.css('transform', "rotate(0deg)");
            $codeBlock.removeClass("closed");
        }
    });
}

function setHighlightHeightLimit($codeBlock, HighlightHeightLimit) {
    // 限制代码块最大长度
    if (HighlightHeightLimit != "") {
        $codeBlock.find('table').css('maxHeight', HighlightHeightLimit);
    }
}