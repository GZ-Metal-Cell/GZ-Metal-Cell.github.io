function initMathjax() {
    $('head').append($('<script>').html("MathJax = {tex: {inlineMath: [['$', '$'], ['\\\\(', '\\\\)']]}};"));
    var $scriptElement2 = $('<script>', {
        id: 'MathJax-script',
        async: true,
        src: mathjax_url
    });
    $('head').append($scriptElement2);
}

$(document).ready(function() {
    initMathjax();
});
