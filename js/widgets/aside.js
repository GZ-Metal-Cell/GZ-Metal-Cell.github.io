function initToc() {
    if (typeof headerString !== 'undefined') {
        hbeToc();
        createToc();
        activeTocItem();
        tocPercentage();
        document.addEventListener('scroll', function (event) {
            activeTocItem();
            tocPercentage();
        });
    }
}

function tocPercentage() {
    const top = $('article').offset().top;
    const bottom = $('article').offset().top + $('article').outerHeight();
    const scrollTop = $(window).scrollTop();
    const scrollBottom = scrollTop + $(window).height();
    const progress = (scrollTop - top) / bottom;
    const scrollProgress = progress * scrollBottom + (1 - progress) * scrollTop;
    if (scrollBottom > bottom)
        $('.toc-percentage').text(100);
    else
        $('.toc-percentage').text(Math.max(0, Math.min(Math.round(((scrollProgress - (1 - progress) * top) / bottom) * 100), 100)));
}

function showAside() {
    var value = localStorage.getItem('aside-status');
    if (value === null) {
        localStorage.setItem('aside-status', 'true');
        value = true;
    }
    if (localStorage.getItem('aside-status') === 'false') {
        $('.main-wrapper').addClass('close-aside');
    }
}

function hbeToc() {
    if ($('.hbe-content').length > 0) {
        $('.main-wrapper').addClass('hbe-toc');
    } else {
        $('.main-wrapper').removeClass('hbe-toc');
    }
}

function createToc() {
    var toc = $('<ol>').addClass('aside-bottom-toc-content');
    var headings = $('article').find(headerString);

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

        a.on('click', function (e) {
            e.preventDefault();
            var target = $($(this).attr('href'));
            window.scrollTo({
                top: $(target).offset().top - 70,
                behavior: 'smooth'
            });
        });

        li.append(a);

        // 将列表项添加到父级
        toc.append(li);

        currentLevel = level;
    });

    $('.aside-bottom-toc-content').replaceWith(toc); // 将原来的目录替换为新的目录
}


function onShowAsideButton() {
    document.querySelector('.main-wrapper').classList.toggle('close-aside');

    var value = localStorage.getItem('aside-status');
    if (value === 'false' && typeof headerString !== 'undefined') {
        activeTocItem();
        activeSeriesItem();
    }
    localStorage.setItem('aside-status', value === 'true' ? 'false' : 'true');
}

function getTopHeadingId() {
    const headings = document.querySelector('article').querySelectorAll(headerString);
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
                link.parentNode.classList.add('active');
                var toc = document.querySelector('.aside-bottom-toc-content');
                var activeItem = toc.querySelector('.active');
                if (activeItem) {
                    toc.scrollTo({
                        top: activeItem.offsetTop - 80
                    });
                }
            }
        } else {
            link.parentNode.classList.remove('active');
        }
    });
}

function activeSeriesItem() {
    var series = document.querySelector('.aside-top-series-content');
    if (series) {
        var activeItem = series.querySelector('.active');
        if (activeItem) {
            series.scrollTo({
                top: activeItem.offsetTop - 400
            });
        }
    }
}