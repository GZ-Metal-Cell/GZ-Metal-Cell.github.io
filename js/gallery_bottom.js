if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
{
    var descriptionContainer = document.querySelector('.description-container span');
    document.addEventListener("scroll", function () {
        var title = getBottomTitle();
        descriptionContainer.textContent = title;
    }, 3000);
}
else {
    var galleryContent = document.querySelector('.gallery-content-data');
    var images = galleryContent.querySelectorAll('img');
    var descriptionContainer = document.querySelector('.description-container span');

    galleryContent.addEventListener('mouseover', function(event) {
        if (event.target.tagName.toLowerCase() === 'img') {
            var title = event.target.getAttribute('alt');
            console.log(title);
            descriptionContainer.textContent = title;
        }
    });

    galleryContent.addEventListener('mouseout', function(event) {
        if (event.target.tagName.toLowerCase() === 'img') {
            descriptionContainer.textContent = '';
        }
    });
}

function getBottomTitle() {
    var elements = document.querySelectorAll('.fancybox');
    var viewportHeight = window.innerHeight;
    var bottomElement = null;
    for (var i = 0; i < elements.length; i++) {
        var rect = elements[i].getBoundingClientRect();
        
        if (rect.bottom <= viewportHeight && (!bottomElement || rect.bottom > bottomElement.rect.bottom)) {
            bottomElement = {
            element: elements[i],
            rect: rect
            }
        }
    }
    if (bottomElement) {
        return bottomElement.element.title;
    }
}