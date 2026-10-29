(function () {
const $book = $('#book');
const $page = $('#page');
const $paragraph = $('#paragraph');

// Scripts are loaded after the article has hydrated.
$(function () {
    const bookElement = $book[0];
    if (!bookElement) return;
    $('#loading').remove();
    $book.show();
    function resizeBook() {
        const width = $book.parent().width();
        if (!width) return;
        if ($book.data('done')) $book.turn('size', width, width * 3 / 8);
        else $book.css({ width: width, height: width * 3 / 8 });
    }
    resizeBook();

	// 配置 turn.js 的参数
	$book.turn({
		display: 'double',
		acceleration: true,
		gradients: !$.isTouch,
		elevation: 50,
		duration: 1000,
		when: {
			turned: function (_, p) {
				if (p == 1) {
					window.summerDiarySetData([]);
					$page.text('封面');
					$paragraph.html('');
				}
				else if (p >= 2 && p <= 3) {
					window.summerDiarySetData([['2024-07-15', 0]]);
					$page.text('7.15');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;暑假开始咯😍！</p>');
				}
				else if (p >= 4 && p <= 5) {
					window.summerDiarySetData([['2024-07-16', 0]]);
					$page.text('7.16');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;乌山的日落。</p>');
				}
				else if (p >= 6 && p <= 7) {
					window.summerDiarySetData([['2024-07-17', 0]]);
					$page.text('7.17');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;人山人海的三坊七巷。</p>');
				}
				else if (p >= 8 && p <= 9) {
					window.summerDiarySetData([['2024-07-19', 0]]);
					$page.text('7.19');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;挪地方的保定。</p>');
				}
				else if (p >= 10 && p <= 11) {
					window.summerDiarySetData([['2024-07-20', 0]]);
					$page.text('7.20');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;六年后，再次装修的翠竹园。</p>');
				}
				else if (p >= 12 && p <= 13) {
					window.summerDiarySetData([['2024-07-22', 0]]);
					$page.text('7.22');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;盛夏的气息！</p>');
				}
				else if (p >= 14 && p <= 15) {
					window.summerDiarySetData([['2024-07-23', 0]]);
					$page.text('7.23');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;回鼓楼顺便转转。</p>');
				}
				else if (p >= 16 && p <= 17) {
					window.summerDiarySetData([['2024-07-24', 0]]);
					$page.text('7.24');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;台风要来力！</p>');
				}
				else if (p >= 18 && p <= 19) {
					window.summerDiarySetData([['2024-07-30', 0]]);
					$page.text('7.30');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是福建师范学堂！</p>');
				}
				else if (p >= 20 && p <= 21) {
					window.summerDiarySetData([['2024-08-01', 0]]);
					$page.text('8.1');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;在西湖，居然可以看见镇海楼。</p>');
				}
				else if (p >= 22 && p <= 23) {
					window.summerDiarySetData([['2024-08-03', 0]]);
					$page.text('8.3');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;美丽的白云！</p>');
				}
				else if (p >= 24 && p <= 25) {
					window.summerDiarySetData([['2024-08-04', 0]]);
					$page.text('8.4');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;回鼓楼顺便转转。</p>');
				}
				else if (p >= 26 && p <= 27) {
					window.summerDiarySetData([['2024-08-05', 0]]);
					$page.text('8.5');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;山中寺。</p>');
				}
				else if (p >= 28 && p <= 29) {
					window.summerDiarySetData([['2024-08-07', 0]]);
					$page.text('8.7');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;暑假过半了！</p>');
				}
				else if (p >= 30 && p <= 31) {
					window.summerDiarySetData([['2024-08-11', 0]]);
					$page.text('8.11');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！亭江炮台！</p>');
				}
				else if (p >= 32 && p <= 33) {
					window.summerDiarySetData([['2024-08-17', 0]]);
					$page.text('8.17');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;福地再相聚！</p>');
				} else if (p >= 34 && p <= 35) {
					window.summerDiarySetData([['2024-08-24', 0]]);
					$page.text('8.24');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;时代变了，但还没完全变。</p>');
				}
				else {
					window.summerDiarySetData([]);
					$page.text('尾页');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;我想今年内回来😭。</p>');
				}
			}
		}
	});

    const onKeydown = function (e) {
        if (e.target.closest('input, textarea, select, [contenteditable="true"]')) return;
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') $book.turn('previous');
        else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') $book.turn('next');
    };
    const previous = () => $book.turn('previous');
    const next = () => $book.turn('next');
    $(window).on('keydown', onKeydown);
    $('#prev').on('click', previous);
    $('#next').on('click', next);
    window.addEventListener('resize', resizeBook);
    const observer = new MutationObserver(() => {
        if (bookElement.isConnected) return;
        observer.disconnect();
        $(window).off('keydown', onKeydown);
        window.removeEventListener('resize', resizeBook);
        $book.turn('destroy');
    });
    observer.observe(document.body, { childList: true, subtree: true });
});
})();
