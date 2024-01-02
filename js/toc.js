function initToc()
{
    var value = localStorage.getItem('aside-status');
    if (value === null) {  // 如果存储项不存在，则创建它
        localStorage.setItem('aside-status', "true");
        value = true;
    }
    if (value === "true" && !$("#post-toc").hasClass("hidden"))
    {
        $("#post-toc").addClass("show-toc");
        $("#content").addClass("show-toc");
    }
}

function showToc()
{
    var postToc = $("#post-toc");
    var content = $("#content");
    if (!postToc.hasClass("show-toc")) {
        localStorage.setItem('aside-status', true);
        content.addClass("show-toc");
        postToc.addClass("show-toc");
    } else {
        content.removeClass("show-toc");
        postToc.removeClass("show-toc");
        localStorage.setItem('aside-status', false);
    }
}

$("#js-toc").click(function () {
    showToc();
});

function getTopHeadingId() {
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    let topHeadingId = null;
    let minDistanceFromTop = Infinity;
    for (const heading of headings) {
        const boundingRect = heading.getBoundingClientRect();
        const distanceFromTop = Math.abs(boundingRect.y);
        if (distanceFromTop < minDistanceFromTop) {
            minDistanceFromTop = distanceFromTop;
            topHeadingId = heading.id;
        }
    }
    return topHeadingId;
}

document.addEventListener("scroll", function (event) {
    const tocLinks = document.querySelectorAll('a.toc-link');
    const topHeadingId = getTopHeadingId();
    tocLinks.forEach(link => {
        var href =  decodeURIComponent(link.getAttribute('href')).replace(/^#/, '');;
        if (href == topHeadingId) {
            if (!link.classList.contains('active')) {
                link.classList.add("active");
                var toc = document.querySelector(".toc");
                var activeItem = toc.querySelector(".active");
                if (activeItem) {
                    toc.scrollTop = activeItem.offsetTop - 100;
                }
            }
        } else {
            link.classList.remove("active");
        }
    });
}, 3000);

