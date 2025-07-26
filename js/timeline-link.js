window.addEventListener('hexo-blog-decrypt', initTimelineLink);

function initTimelineLink() {
    $(function () {
        $(document).on('click', 'a.timeline-link', function (e) {
            e.preventDefault();
            var href = $(this).attr('href');
            var target = document.querySelector(href);
            if (target) {
                window.scrollTo({
                    top: $(target).offset().top - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
}

initTimelineLink();