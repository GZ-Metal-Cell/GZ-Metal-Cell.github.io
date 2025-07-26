const DOWNLOAD_ICON = '/images/icon/download.webp';

$(document).on('CodeFileRendered', function (_, data) {
    createCodeFileTools(data);
});

function createCodeFileTools(codeFile) {

    codeFile.$preElement.wrap(`<figure class="code-file"></figure>`);
    codeFile.$root = codeFile.$preElement.parent();
    var $codeFileTools = $('<div class="code-file-tools"></div>');
    codeFile.$preElement.before($codeFileTools);
    codeFile.$preElement.css('maxHeight', HIGHLIGHT_SHRINK);

    // 关闭代码块按钮
    var $closeCodeBlockButton = $('<button class="close-code-block-button" type="button" title="close-code-block-button"></button>').css('backgroundImage', 'url("' + CLOSE_CODE_BLOCK_ICON + '")');
    $codeFileTools.append($closeCodeBlockButton);
    if (HIGHLIGHT_SHRINK == 'true') {
        var $hljs = codeFile.$codeElement.find('.hljs');
        $closeCodeBlockButton.css('transform', "rotate(-90deg)");
        $hljs.addClass("closed");
    }

    $closeCodeBlockButton.click(function () {
        if (!codeFile.$codeElement.hasClass('closed')) {
            $closeCodeBlockButton.css('transform', "rotate(-90deg)");
            codeFile.$codeElement.addClass("closed");
        } else {
            $closeCodeBlockButton.css('transform', "rotate(0deg)");
            codeFile.$codeElement.removeClass("closed");
        }
    });

    // 显示文件名
    $codeFileTools.append($('<span class="code-file-name">' + codeFile.fileName + '</span>'));

    // 复制按钮
    var $copyButton = $('<button class="copy-button" type="button" title="复制代码"></button>').css('backgroundImage', 'url("' + COPY_ICON + '")');
    $codeFileTools.append($copyButton);

    $copyButton.click(function () {
        // 创建已复制提示文字
        var $span = $('<span class="copy-notice">已复制</span>');
        $codeFileTools.append($span);
        // 执行复制操作
        navigator.clipboard.writeText(codeFile.text).then(function () {
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

    // 下载按钮
    var $downloadButton = $('<button class="download-button" type="button" title="下载代码文件"></button>').css('backgroundImage', 'url("' + DOWNLOAD_ICON + '")');
    $codeFileTools.append($downloadButton);
    function downloadFileFromUrl(url, filename) {
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const a = document.createElement('a');
                const fileURL = URL.createObjectURL(blob);
                a.href = fileURL;
                a.download = filename;
                a.click();
                URL.revokeObjectURL(fileURL); // 释放 URL 对象
            })
            .catch(error => console.error('Error fetching the file:', error));
    }
    $downloadButton.click(function () {
        downloadFileFromUrl(codeFile.link, codeFile.fileName);
    });
}