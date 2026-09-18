document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.hover-row .hover-item a').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetRect = document.querySelector(this.getAttribute('href')).getBoundingClientRect();
            window.scrollTo({
                top: targetRect.top + window.scrollY - 70,
                behavior: 'smooth'
            });
        });
    });
});
