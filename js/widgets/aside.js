function initToc() {
    if (typeof headerString !== 'undefined') {
        if (!hbeToc()) {
            let filteredHeadings = getFilteredHeadings();
            createToc(filteredHeadings);
            activeTocItem(filteredHeadings);
            tocPercentage();
            document.addEventListener('scroll', function (event) {
                activeTocItem(filteredHeadings);
                tocPercentage();
            });
        }
    }
}

function tocPercentage() {
    const top = $('article').offset().top;
    const bottom = $('article').offset().top + $('article').outerHeight();
    const scrollTop = $(window).scrollTop();
    const scrollBottom = scrollTop + $(window).height();
    const progress = (scrollTop - top) / bottom;
    const scrollProgress = progress * scrollBottom + (1 - progress) * scrollTop;
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
        return true
    } else {
        $('.main-wrapper').removeClass('hbe-toc');
        return false
    }
}

function getFilteredHeadings() {
    var headings = $('article').find(headerString);
    var filteredHeadings = headings.filter(function () {
        return $(this);  // 当前的 heading 元素
    });
    return filteredHeadings
}

function sanitizeId(str) {
    str = str.replace(/^[^a-zA-Z\u4e00-\u9fa5]+/, '');
    str = str.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]+/g, '_');
    return str;
}

function generateUniqueId(baseId) {
  let id = baseId;
  let counter = 1;
  while (document.getElementById(id)) {
    counter++;
    id = `${baseId}_${counter}`;
  }
  return id;
}

function createToc(filteredHeadings) {
    var tocList = [];
    var toc = $('<ol>').addClass('aside-bottom-toc-content');

    filteredHeadings.each(function (index, heading) {
        heading.id = generateUniqueId(sanitizeId('header_' + $(heading).text()));

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

        if (tocList.length > 0) {
            var flag = false;
            for (let i = tocList.length - 1; i >= 0; i--) {
                if (level > tocList[i].level) {
                    var tocChild = tocList[i].li.children('ol.toc-child');
                    if (tocChild.length === 0) {
                        tocChild = $('<ol>').addClass('toc-child');
                        tocList[i].li.append(tocChild);
                    }
                    tocChild.append(li);
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                toc.append(li);
            }
        } else {
            toc.append(li);
        }

        if (!tocCollapsed) {
            li.addClass('active');
        }

        tocList.push({ li, level });

        currentLevel = level;
    });

    $('.aside-bottom-toc-content').replaceWith(toc); // 将原来的目录替换为新的目录
}

function onShowAsideButton() {
    $('.main-wrapper').toggleClass('close-aside');

    var value = localStorage.getItem('aside-status');
    localStorage.setItem('aside-status', (value === 'true' ? 'false' : 'true'));  // localStorage 访问不需要改变
}

function getTopHeadingId(filteredHeadings) {
    if (filteredHeadings) {
        let topHeadingId = null;
        let minDistanceFromTop = Infinity;

        filteredHeadings.each(function (_, heading) {
            const boundingRect = heading.getBoundingClientRect();
            if (boundingRect.y < window.innerHeight) {
                const distanceFromTop = Math.abs(boundingRect.y - 80);
                if (distanceFromTop < minDistanceFromTop) {
                    minDistanceFromTop = distanceFromTop;
                    topHeadingId = heading.id;
                }
            }
        });
        return topHeadingId;
    } else {
        return null;
    }
}

function activeTocItem(filteredHeadings) {
    const $tocLinks = $('a.toc-link'); // 获取所有 TOC 链接
    const topHeadingId = getTopHeadingId(filteredHeadings);

    // 移除所有 TOC 链接的 'active' 类
    $tocLinks.each(function () {
        var $link = $(this);
        $link.removeClass('active');

        if (tocCollapsed) {
            // 获取每个链接的父 <li> 元素
            var $parentLi = $link.closest('li');

            // 如果父 <li> 元素包含 'active' 类，则移除
            if ($parentLi.length && $parentLi.hasClass('active')) {
                $parentLi.removeClass('active');
            }
        }
    });

    // 处理 TOC 链接，根据 topHeadingId 设置 'active' 类
    $tocLinks.each(function () {
        var $link = $(this);
        var href = decodeURIComponent($link.attr('href')).replace(/^#/, '');

        if (href == topHeadingId) {
            $link.addClass('active');

            // 滚动到当前活动的 TOC 项目
            var $toc = $('.aside-bottom-toc-content');
            var $activeItem = $toc.find('.active');

            if ($activeItem.length) {
                if (tocCollapsed) {
                    var $parent = $link.parent();

                    while ($parent.length && !$parent.hasClass('aside-bottom-toc-content')) {
                        if ($parent.hasClass('toc-item')) {
                            $parent.addClass('active');
                        }
                        $parent = $parent.parent(); // 向上遍历
                    }
                }

                // 滚动到活动的 TOC 项
                $toc.scrollTop($activeItem[0].offsetTop - 80);
            }
        }
    });
}

function activeSeriesItem() {
    var $series = $('.aside-top-series-content');
    if ($series.length) {  // 检查元素是否存在
        var $activeItem = $series.find('.active');
        if ($activeItem.length) {  // 检查是否找到 .active 元素
            $series.scrollTop($activeItem.offset().top - 400);  // 使用 scrollTop 来滚动
        }
    }
}
