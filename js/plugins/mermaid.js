function initMermaid() {
    function processString(str) {
        // 定义 HTML 实体字符与对应符号的映射
        const entities = {
            '&lt;': '<',
            '&gt;': '>',
        };

        // 使用 replace 方法逐一替换实体字符
        str = str.replace(/&[a-zA-Z0-9#]+;/g, match => entities[match] || match);

        // 使用正则表达式查找第一个 `-` 或字母的位置
        const match = str.match(/[-a-zA-Z]/);
        if (match) {
            // 返回从该位置开始的子字符串
            str = str.substring(str.indexOf(match[0]));
        }

        // 将字符串按行分割
        const lines = str.split('\n');
        // 获取最后一行
        let lastLine = lines[lines.length - 1];
        // 使用正则表达式检查最后一行是否包含 </XXX>
        const regex = /<\/[a-zA-Z0-9_,]+>/g; // 修改正则表达式，允许包括数字、下划线和逗号

        if (lastLine.match(regex)) {
            // 删除最后一行中所有匹配的结束标签
            lastLine = lastLine.replace(regex, '');
            // 更新最后一行
            lines[lines.length - 1] = lastLine;
            // 将剩余的行重新拼接成字符串
            str = lines.join('\n');
        }

        return str;
    }

    $('.mermaid').each(function () {
        // 获取当前 .mermaid 的 innerText 并清洗
        const innerText = processString($(this).html());
        $(this).text(innerText);
        // console.log(innerText);
        const backgroundImage = `url(${COPY_ICON})`;

        // 创建 mermaid-tools div 和 button
        const mermaidTools = $('<div>', { class: 'mermaid-tools' })
            .append($('<button>', {
                class: 'copy-button',
                title: '复制代码',
                css: { backgroundImage, backgroundImage },
                click: function () {
                    // 创建已复制提示文字
                    const $button = $(this);
                    const $span = $('<span class="copy-notice">已复制</span>');
                    $button.after($span);
                    // 创建一个临时文本区域来执行复制
                    const tempTextarea = $('<textarea>').val(innerText).appendTo('body').select();
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
                    tempTextarea.remove(); // 移除临时文本区域
                }
            }));

        // 包裹 .mermaid 元素在 figure 中，并将 mermaid-tools 插入 figure 中
        $(this).wrap('<figure class="mermaid-container"></figure>').before(mermaidTools);
    });


    if (window.mermaid) {
        mermaid.initialize({ theme: 'default' });
    }
}