function initGallery()
{
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
    });
    if(lazyLoad)
    {  
        window.imageLazyLoadSetting = {
            onImageLoaded: function() {
            $grid.masonry();
            }
        };
    }
    else
    {
        // layout Masonry after each image loads
        $grid.imagesLoaded().progress(function() {
            $grid.masonry();
        });
    }
    galleryBottom();
}

$(document).ready(function() {
    initGallery();
});

function galleryBottom() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var descriptionContainer = $('.description-container span');
        $(document).on("scroll", function () {
            var title = getBottomTitle();
            console.log("title:", title);
            descriptionContainer.text(title);
        });
    } else {
        var galleryContent = $('.grid');
        var descriptionContainer = $('.description-container span');

        galleryContent.on('mouseover', 'img', function (event) {
            var title = $(this).attr('alt');
            descriptionContainer.text(title);
        });

        galleryContent.on('mouseout', 'img', function (event) {
            descriptionContainer.text('');
        });
    }

    function getBottomTitle() {
        var elements = $('.fancybox');
        var viewportHeight = $(window).height();
        var bottomElement = null;
        elements.each(function (index, element) {
            var rect = $(element)[0].getBoundingClientRect();

            if (rect.bottom <= viewportHeight && (!bottomElement || rect.bottom > bottomElement.rect.bottom)) {
                bottomElement = {
                    element: $(element),
                    rect: rect
                };
            }
        });
        if (bottomElement) {
            return bottomElement.element.attr('data-caption');
        }
    }
}
