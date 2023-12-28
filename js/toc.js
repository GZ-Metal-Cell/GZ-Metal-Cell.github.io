$("#js-toc").click(function () {
    var postToc = $("#post-toc");
    var content = $("#content");
    if (postToc.hasClass("show-toc")) {
        content.removeClass("show-toc");
        postToc.removeClass("show-toc");
    } else {
        content.addClass("show-toc");
        postToc.addClass("show-toc");
    }
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
    console.log(topHeadingId);
    tocLinks.forEach(link => {
        var href =  decodeURIComponent(link.getAttribute('href')).replace(/^#/, '');;
        console.log(href);
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

