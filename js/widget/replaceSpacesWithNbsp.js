function replaceSpacesWithNbsp() {
    // 选择<article>下的特定元素
    const selectors = 'p, h1, h2, h3, h4, h5, h6, center, li';
    const elements = document.querySelector('article').querySelectorAll(selectors);

    elements.forEach(element => {
        // 遍历每个元素的所有子节点（文本节点）
        Array.from(element.childNodes).forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                // 对于文本节点，将连续的两个及以上空格替换为相应数量的&nbsp;
                // 并使用innerHTML来重新设置元素的内容以正确解析&nbsp;为不间断空格
                const newHtml = node.nodeValue.replace(/  +/g, match => '&nbsp;'.repeat(match.length));
                // 创建一个新的文本节点来替换原有的文本节点
                const newNode = document.createElement('span'); // 使用span包裹以保持inline特性
                newNode.innerHTML = newHtml; // 设置新的HTML，其中的&nbsp;会被浏览器正确处理
                node.parentNode.replaceChild(newNode, node);
            }
        });
    });
}

$(document).ready(function () {
    replaceSpacesWithNbsp();
});