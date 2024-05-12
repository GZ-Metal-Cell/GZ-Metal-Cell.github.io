function initAside() {
    hbeToc();
    createToc();
    activeTocItem();
    hbeShowAsideButton();
    document.addEventListener("scroll", function (event) {
        activeTocItem();
    });
}

function showAside() {
    var value = localStorage.getItem('aside-status');
    if (value === null) {
        localStorage.setItem('aside-status', "true");
        value = true;
    }
    if (localStorage.getItem('aside-status') === "false") {
        $(".post-content").addClass("close-aside");
    }
}

function hbeToc() {
    if ($('.hbe-content').length > 0) {
        $('.post-content').addClass('hbe-toc');
    } else {
        $('.post-content').removeClass('hbe-toc');
    }
}

function hbeShowAsideButton() {
    if ($('#js-aside').length > 0) {
        if ($('.hbe-content').length > 0) {
            $('#js-aside').addClass('hbe-toc');
        } else {
            $('#js-aside').removeClass('hbe-toc');
        }
    }
}

function createToc() {
    var toc = $('<ol>').addClass('toc');
    var headings = $('.post-content').find(headerString);
    var currentLevel = 1;
    var currentParent = toc;

    headings.each(function (index, heading) {
        if (/^[0-9]/.test($(heading).attr('id'))) {
            $(heading).attr('id', '_' + $(heading).attr('id'));
        }
        if ((!$(heading).find('a').length) || (!$(heading).find('a').hasClass('headerlink')))  // 标题里没有<a>，可能是用户自己创建的标题，跳过
            return;

        var level = parseInt(heading.tagName.charAt(1));

        // 创建列表项和链接
        var li = $('<li>').addClass('toc-item toc-level-' + level);
        var a = $('<a>').addClass('toc-link').attr('href', '#' + heading.id);
        var span = $('<span>').addClass('text').text($(heading).text());

        a.append(span);

        a.on("click", function (event) {
            event.preventDefault();
            var heading = $($(this).attr("href"));
            var rect = heading[0].getBoundingClientRect();
            var topOffset = rect.top + window.scrollY - 70;
            window.scrollTo({
                top: topOffset,
                behavior: "smooth"
            });
        });

        li.append(a);

        // 确定父级
        if (level > currentLevel) {
            var parentList = $('<ol>').addClass('toc-child');
            currentParent.find('li:last').append(parentList);
            currentParent = parentList;
        } else if (level < currentLevel) {
            for (var i = level; i < currentLevel; i++) {
                currentParent = currentParent.parent().parent();
            }
        }

        // 将列表项添加到父级
        currentParent.append(li);

        currentLevel = level;
    });

    $('.toc').replaceWith(toc); // 将原来的目录替换为新的目录
}


function onShowAsideButton() {
    document.querySelector('.post-content').classList.toggle('close-aside');

    var value = localStorage.getItem('aside-status');
    if (value === "false") {
        activeTocItem();
        activeSeriesItem();
    }
    localStorage.setItem('aside-status', value === "true" ? "false" : "true");
}

function getTopHeadingId() {
    const headings = document.querySelector('.post-content-info').querySelectorAll(headerString);
    let topHeadingId = null;
    let minDistanceFromTop = Infinity;
    for (const heading of headings) {
        const boundingRect = heading.getBoundingClientRect();
        if (boundingRect.y < window.innerHeight) {
            const distanceFromTop = Math.abs(boundingRect.y - 80);
            if (distanceFromTop < minDistanceFromTop) {
                minDistanceFromTop = distanceFromTop;
                topHeadingId = heading.id;
            }
        }
    }
    return topHeadingId;
}

function activeTocItem() {
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
                        top: activeItem.offsetTop - 80
                    });
                }
            }
        } else {
            link.parentNode.classList.remove("active");
        }
    });
}

function activeSeriesItem() {
    var series = document.querySelector(".series");
    if (series) {
        var activeItem = series.querySelector(".active");
        if (activeItem) {
            series.scrollTo({
                top: activeItem.offsetTop - 400
            });
        }
    }
}