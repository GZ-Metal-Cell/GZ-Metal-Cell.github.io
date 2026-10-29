(function () {
    const $book = $('#book');
    const book = $book[0];
    if (!book) return;
    const pages = {};
    $('article').find('h1, h2, h3, h4, h5, h6').each(function (index) {
        if (index === 1) pages[this.id] = 1;
        else if (index > 1) pages[this.id] = index * 2 - 2;
    });
    let topHeadingId = null;

    $('#loading').remove();
    $book.show();
    function resizeBook() {
        const width = $book.parent().width() * (window.innerWidth <= 660 ? 1 : 0.5);
        if (!width) return;
        if ($book.data('done')) $book.turn('size', width, width * 3 / 8);
        else $book.css({ width: width, height: width * 3 / 8 });
    }
    resizeBook();
    $book.turn({ display: 'double', acceleration: true, gradients: !$.isTouch, elevation: 50, duration: 1000 });

    function onKeydown(event) {
        if (event.target.closest('input, textarea, select, [contenteditable="true"]')) return;
        if (event.key === 'ArrowLeft') $book.turn('previous');
        else if (event.key === 'ArrowRight') $book.turn('next');
    }
    function onScroll() {
        const top = book.getBoundingClientRect().bottom;
        let nearest = null;
        let distance = Infinity;
        $('article').find('h1, h2, h3, h4, h5, h6').each(function () {
            if (!(this.id in pages)) return;
            const rect = this.getBoundingClientRect();
            const candidate = Math.abs(rect.y - top);
            if (rect.bottom < top - 180 && candidate < distance) {
                distance = candidate;
                nearest = this.id;
            }
        });
        if (nearest !== null && nearest !== topHeadingId) {
            topHeadingId = nearest;
            const page = pages[nearest];
            if (page <= $book.turn('pages')) $book.turn('page', page);
        }
    }
    window.addEventListener('keydown', onKeydown);
    window.addEventListener('resize', resizeBook);
    document.addEventListener('scroll', onScroll, { passive: true });
    const observer = new MutationObserver(() => {
        if (book.isConnected) return;
        observer.disconnect();
        window.removeEventListener('keydown', onKeydown);
        window.removeEventListener('resize', resizeBook);
        document.removeEventListener('scroll', onScroll);
        $book.turn('destroy');
    });
    observer.observe(document.body, { childList: true, subtree: true });
})();
