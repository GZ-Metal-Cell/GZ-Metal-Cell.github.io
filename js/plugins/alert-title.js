function initAlertTitle() {
    let titleMap = {
        'Note': '信息',
        'Tip': '提示',
        'Important': '重要',
        'Warning': '注意',
        'Caution': '警告'
    };

    $('.markdown-alert-title').each(function() {
        let text = $(this).text();
        if (titleMap[text]) {
            $(this).contents().filter(function() {
                return this.nodeType === 3;  // 3 表示文本节点
            }).replaceWith(titleMap[text]);
        }
    });
}
