function initMathjax() {
    // 创建 <script> 元素
    var scriptElement1 = document.createElement('script');
    scriptElement1.innerHTML = "MathJax = {tex: {inlineMath: [['$', '$'], ['\\\\(', '\\\\)']]}};";

    // 创建 <script> 元素
    var scriptElement2 = document.createElement('script');
    scriptElement2.id = 'MathJax-script';
    scriptElement2.async = true;
    scriptElement2.src = mathjax_url; //'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';

    // 将 <script> 元素添加到 <head> 元素中
    document.head.appendChild(scriptElement1);
    document.head.appendChild(scriptElement2);
}

$(document).ready(function() {
    initMathjax();
});