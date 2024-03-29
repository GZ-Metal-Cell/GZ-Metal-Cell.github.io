$(document).ready(function() {
    initToc();
    $("#js-toc").click(function () {
        onShowTocButton();
    });
});

function initToc(){
    showToc();
    createToc();
    showTocButton();
    activeItem();
}

function showToc(){
    if ($('.hbe-content').length > 0) {
        $('.post-content').addClass('hbe-toc');
        return;
    } else {
        $('.post-content').removeClass('hbe-toc');
    }

    var value = localStorage.getItem('aside-status');
    if (value === null) {  // 如果存储项不存在，则创建它
        localStorage.setItem('aside-status', "true");
        value = true;
    }
    if (localStorage.getItem('aside-status') === "false") {
        $(".post-content").addClass("close-toc");
    }
}

function showTocButton(){
    if ($('.hbe.hbe-content').length > 0) {
        $('#js-toc').addClass('hidden');
        return;
    } else {
        $('#js-toc').removeClass('hidden');
    }
}

function createToc() {
    var toc = $('.toc');
    toc.empty();

    var headings = $('.post-content').find('h1, h2, h3, h4, h5, h6');
    var currentLevel = 1;
    var currentList = toc;

    for (var i = 0; i < headings.length; i++) {
        var heading = $(headings[i]);
        // ID 开头不能为数字，如果为了，加个下划线
        if (/^[0-9]/.test(heading.attr('id'))) {
            heading.attr('id', '_' + heading.attr('id'));
        }
        if (!heading.find('a').length)  // 标题里没有<a>，可能是用户自己创建的标题，跳过
            continue;
        var level = parseInt(heading.prop('tagName').charAt(1));
        // 创建目录
        if (level > currentLevel) {
            for (var j = currentLevel + 1; j <= level; j++) {
                var newOl = $('<ol>').addClass('toc-child');
                var newLi = $('<li>').addClass('toc-item toc-level-level1-' + j);
                currentList.append(newLi);
                newLi.append(newOl);
                currentList = newOl;
            }
        } else if (level < currentLevel) {
            for (var j = level; j < currentLevel; j++) {
                currentList = currentList.parent().parent();
            }
        }
        var li = $('<li>').addClass('toc-item toc-level-level-' + level);
        // 获取 hrefValue
        var hrefValue = heading.html().match(/href="([^"]+)"/) ? heading.html().match(/href="([^"]+)"/)[1] : '';
        // ID 开头不能为数字，如果为了，加个下划线
        if (!isNaN(parseInt(hrefValue.charAt(1)))) {
            hrefValue = hrefValue.slice(0, 1) + "_" + hrefValue.slice(1);
        }
        // 获取 titleValue
        var titleValue = heading.html().match(/title="([^"]+)"/) ? heading.html().match(/title="([^"]+)"/)[1] : '';
        // 创建 <a>
        li.html('<a class="toc-link" href="' + hrefValue + '"><span class="toc-text">' + titleValue + '</span></a>');
        var a = li.find("a");
        // 重写点击目录时的跳转逻辑
        a.on("click", function (event) {
            event.preventDefault();
            var element = $($(this).attr("href"));
            var rect = element[0].getBoundingClientRect();
            var topOffset = rect.top + window.scrollY - 80;
            window.scrollTo({
                top: topOffset,
                behavior: "smooth"
            });
        });
        currentList.append(li);
        currentLevel = level;
    }
}

function onShowTocButton(){
    $(".post-content-aside-toc").css("transition", "bottom 0.5s ease-in-out");
    document.querySelector('.post-content').classList.toggle('close-toc');
    var value = localStorage.getItem('aside-status');
    localStorage.setItem('aside-status', value === "true" ? "false" : "true");
}

function getTopHeadingId() {
    const headings = document.querySelector('.post-content-info').querySelectorAll('h1, h2, h3, h4, h5, h6');
    let topHeadingId = null;
    let minDistanceFromTop = Infinity;
    for (const heading of headings) {
        const boundingRect = heading.getBoundingClientRect();
        if (boundingRect.y < window.innerHeight) {
            const distanceFromTop = Math.abs(boundingRect.y - 90);
            if (distanceFromTop < minDistanceFromTop) {
                minDistanceFromTop = distanceFromTop;
                topHeadingId = heading.id;
            }
        }
    }
    return topHeadingId;
}

function activeItem(){
    const tocLinks = document.querySelectorAll('a.toc-link');
    const topHeadingId = getTopHeadingId();
    tocLinks.forEach(link => {
        var href = decodeURIComponent(link.getAttribute('href')).replace(/^#/, '');
        if (href == topHeadingId) {
            if (!link.classList.contains('active')) {
                link.parentNode.classList.add("active");
                var toc = document.querySelector(".toc");
                var activeItem = toc.querySelector(".active");
                if (activeItem) {
                    toc.scrollTo({
                        top: activeItem.offsetTop - 90
                    });
                }
            }
        } else {
            link.parentNode.classList.remove("active");
        }
    });
}

document.addEventListener("scroll", function (event) {
    activeItem();
});

