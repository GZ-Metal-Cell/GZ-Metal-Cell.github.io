function initAside(){
    hbeToc();
    createToc();
    activeTocItem();
    hbeShowAsideButton();
    document.addEventListener("scroll", function (event) {
        activeTocItem();
    });    
}

function showAside(){
    var value = localStorage.getItem('aside-status');
    if (value === null) {
        localStorage.setItem('aside-status', "true");
        value = true;
    }
    if (localStorage.getItem('aside-status') === "false") {
        $(".post-content").addClass("close-aside");
    }
}

function hbeToc(){
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
        else if (!heading.find('a').hasClass('headerlink'))  // 标题里有 <a>，但没有 headerlink 类，跳过
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
        if (level > 1) {
            li.html('<a class="toc-link" href="' + hrefValue + '">' + '<span style="margin-left: ' + (level - 1) + 'em;" class="text">' + titleValue + '</span></a>');
        } else
        {
            li.html('<a class="toc-link" href="' + hrefValue + '">' + '<span class="text">' + titleValue + '</span></a>');
        }
        var a = li.find("a");
        // 重写点击目录时的跳转逻辑
        a.on("click", function (event) {
            event.preventDefault();
            var element = $($(this).attr("href"));
            var rect = element[0].getBoundingClientRect();
            var topOffset = rect.top + window.scrollY - 70;
            window.scrollTo({
                top: topOffset,
                behavior: "smooth"
            });
        });
        currentList.append(li);
        currentLevel = level;
    }
}

function onShowAsideButton(){
    document.querySelector('.post-content').classList.toggle('close-aside');
    
    var value = localStorage.getItem('aside-status');
    if(value === "false") {
        activeTocItem();
        activeSeriesItem();
    }
    localStorage.setItem('aside-status', value === "true" ? "false" : "true");
}

function getTopHeadingId() {
    const headings = document.querySelector('.post-content-info').querySelectorAll('h1, h2, h3, h4, h5, h6');
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

function activeTocItem(){
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