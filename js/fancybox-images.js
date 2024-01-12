function initFancybox() {
    $('#article img').each(function () {
        if ($(this).parent().hasClass('fancybox')) return;
        if ($(this).hasClass('nofancybox')) return;
        var alt = this.alt;
        $(this).wrap(
            '<a href="' + ($(this).attr('data-original') == null ? this.src :
                $(this).attr('data-original')) + '" title="' + alt + '" data-original="' + this.src + '" class="fancybox" data-fancybox="fancybox-gallery-img"></a>');
    });
    $(this).find('.fancybox').each(function () {
        $(this).attr('rel', 'article');
    });
}

$(document).ready(function() {
    initFancybox();
});