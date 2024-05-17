snowing = true;

(function ($) {
    $.fn.snow = function (options) {
        var $flake = $('<div id="snowbox" />').css({ 'position': 'fixed', 'z-index': '100', 'top': '-50px', 'user-select': 'none'}).html('&#10052;'),
            windowHeight = $(window).height(),
            windowWidth = $(window).width() * 2,
            defaults = {
                minSize: 10,
                maxSize: 20,
                newOn: 1000,
                flakeColor: "#AFDAEF" /* 此处可以定义雪花颜色，若要白色可以改为#FFFFFF */
            },
            options = $.extend({}, defaults, options);
        setInterval(function () {
            if(!snowing)
                return;
            var startPositionLeft = Math.random() * windowWidth - 100,
                startOpacity = 0.5 + Math.random(),
                sizeFlake = options.minSize + Math.random() * options.maxSize,
                endPositionTop = windowHeight - 50,
                endPositionLeft = startPositionLeft - 500 + Math.random() * 500,
                durationFall = windowHeight * 2 + Math.random() * 5000;
            $flake.clone().appendTo('body').css({
                left: startPositionLeft,
                opacity: startOpacity,
                'font-size': sizeFlake,
                color: options.flakeColor,
            }).animate({
                top: endPositionTop,
                left: endPositionLeft,
                opacity: 0.2
            }, durationFall, 'linear', function () {
                $(this).remove()
            });
        }, options.newOn);
    };
})(jQuery);

$.fn.snow({
    minSize: 5,  /* 定义雪花最小尺寸 */
    maxSize: 20,  /* 定义雪花最大尺寸 */
    newOn: 100  /* 定义密集程度，数字越小越密集 */
});
