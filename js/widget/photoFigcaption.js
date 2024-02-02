initPhotoFigcaption = () => {
    $('#article img').each(function () {
        if ($(this).hasClass('no-figcaption')) return;
        const altValue = $(this).attr('title') || $(this).attr('alt');
        if (!altValue) return;
        const ele = $('<center>').text(altValue);
        $(this).after(ele);
    });
}


$(document).ready(function () {
    initPhotoFigcaption();
});