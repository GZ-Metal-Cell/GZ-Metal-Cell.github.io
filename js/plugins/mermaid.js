function initMermaid() {
    $('.mermaid').each(function () {
        // 获取当前 .mermaid 的 innerText
        const innerText = $(this).text();
        const backgroundImage = `url(${ COPY_ICON})`;

        // 创建 mermaid-tools div 和 button
        const mermaidTools = $('<div>', { class: 'mermaid-tools' })
            .append($('<button>', {
                class: 'copy-button',
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