function initTimelineLink() {
    document.addEventListener('click', function (e) {
        const link = e.target.closest('a.timeline-link');

        if (!link) return;

        e.preventDefault();

        const href = link.getAttribute('href');
        const target = document.querySelector(href);

        if (target) {
            window.scrollTo({
                top: target.getBoundingClientRect().top + window.scrollY - 70,
                behavior: 'smooth'
            });
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTimelineLink, { once: true });
} else {
    initTimelineLink();
}
