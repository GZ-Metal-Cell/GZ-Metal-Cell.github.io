function galleryShowImgs(imgs)
{
    console.log(imgs);
    var galleryData = document.querySelector('.gallery-content-data');

    sortListByGroup(imgs, parseInt(window.getComputedStyle(galleryData).columnCount)).forEach(function(img) {
    // 创建一个新的 <a> 元素
        var linkElement = document.createElement('a');
        if (img.src == 'undefined')
            return;
        linkElement.href = img.src;
        linkElement.title = img.title;
        linkElement.dataset.src = img.src;
        linkElement.classList.add('fancybox');
        linkElement.dataset.fancybox = 'fancybox-gallery-img';
        linkElement.rel = 'article';

        // 在 <a> 元素内创建一个 <img> 元素
        var imgElement = document.createElement('img');
        imgElement.src = img.src;
        imgElement.alt = img.title;

        // 将 <img> 元素添加到 <a> 元素内
        linkElement.appendChild(imgElement);

        // 将 <a> 元素添加到 gallery-content-data 元素内
        galleryData.appendChild(linkElement);
    });
}

function sortListByGroup(list, groupSize) {
    const grouped = [];
  
    for (let i = 0; i < groupSize; i++) {
      for (let j = i; j < list.length; j += groupSize) {
        grouped.push(list[j]);
      }
    }
  
    return grouped;
}

function galleryBottom(){
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
        var descriptionContainer = document.querySelector('.description-container span');

        galleryContent.addEventListener('mouseover', function(event) {
            if (event.target.tagName.toLowerCase() === 'img') {
                var title = event.target.getAttribute('alt');
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
}