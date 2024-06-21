initPhotoFigcaption = () => {
    $('article img').each(function () {
        if ($(this).attr('no-figcaption') != undefined || $(this).attr('has-figcaption') != undefined) {
            return;
        }
        $(this).wrap('<figure></figure>');
        const altValue = $(this).attr('title') || $(this).attr('alt');
        if (!altValue) return;
        const ele = $('<figcaption>').text(altValue);
        $(this).after(ele);
        $(this).attr('has-figcaption', '');
    });
}