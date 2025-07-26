function initTextIndent() {
    // 选择 <article> 下的特定元素
    const selectors = 'p, h1, h2, h3, h4, h5, h6, center, li';
    $('article').find(selectors).each(function() {
        // 遍历每个元素的所有子节点（文本节点）
        $(this).contents().filter(function() {
            return this.nodeType === Node.TEXT_NODE;
        }).each(function() {
            // 设置制表符的缩进;
            let newHtml = this.nodeValue.replace(/\t/g, '<span class="text-indent"> </span>');
            // 将连续的两个及以上空格替换为相应数量的 &nbsp;
            newHtml = newHtml.replace(/  +/g, match => '&nbsp;'.repeat(match.length));
            $(this).replaceWith(newHtml); // 替换原有的文本节点
        });
    });
}
