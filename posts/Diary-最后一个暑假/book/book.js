const $headings = $('article').find('h1, h2, h3, h4, h5, h6');
var topHeadingId = null;
var pages = {};
const $book = $('#book');
const $page = $('#page');
const $desc = $('.desc');
const $paragraph = $('#paragraph');

$(document).ready(function () {
	// 初始化
	let index = 0;
	$headings.each(function () {
		if (index === 0);
		else if (index === 1)
			pages[this.id] = 1;
		else
			pages[this.id] = index * 2 - 2;
		index += 1;
	});
	$("#loading").remove();
	$book.removeAttr("style");  // 将 book 设为可见
	// 设置容器宽度
	$book.css('width', '100%');
	// 计算高度
	const width = $book.width(); // 获取容器的实际宽度
	const height = (3 / 8) * width; // 根据比例计算高度
	// 设置容器高度
	$book.css('height', height + 'px'); // 将高度值赋给容器的高度属性
});

$(window).ready(function () {
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
					setData([]);
					$page.text('封面');
					$paragraph.html('');
				}
				else if (p >= 2 && p <= 3) {
					setData([['2024-07-15', 0]]);
					$page.text('7.15');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;暑假开始咯😍！</p>');
				}
				else if (p >= 4 && p <= 5) {
					setData([['2024-07-16', 0]]);
					$page.text('7.16');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;乌山的日落。</p>');
				}
				else if (p >= 6 && p <= 7) {
					setData([['2024-07-17', 0]]);
					$page.text('7.17');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;人山人海的三坊七巷。</p>');
				}
				else if (p >= 8 && p <= 9) {
					setData([['2024-07-19', 0]]);
					$page.text('7.19');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;挪地方的保定。</p>');
				}
				else if (p >= 10 && p <= 11) {
					setData([['2024-07-20', 0]]);
					$page.text('7.20');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;六年后，再次装修的翠竹园。</p>');
				}
				else if (p >= 12 && p <= 13) {
					setData([['2024-07-22', 0]]);
					$page.text('7.22');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;盛夏的气息！</p>');
				}
				else if (p >= 14 && p <= 15) {
					setData([['2024-07-23', 0]]);
					$page.text('7.23');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;回鼓楼顺便转转。</p>');
				}
				else if (p >= 16 && p <= 17) {
					setData([['2024-07-24', 0]]);
					$page.text('7.24');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;台风要来力！</p>');
				}
				else if (p >= 18 && p <= 19) {
					setData([['2024-07-30', 0]]);
					$page.text('7.30');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;这就是福建师范学堂！</p>');
				}
				else if (p >= 20 && p <= 21) {
					setData([['2024-08-01', 0]]);
					$page.text('8.1');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;在西湖，居然可以看见镇海楼。</p>');
				}
				else if (p >= 22 && p <= 23) {
					setData([['2024-08-03', 0]]);
					$page.text('8.3');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;美丽的白云！</p>');
				}
				else if (p >= 24 && p <= 25) {
					setData([['2024-08-04', 0]]);
					$page.text('8.4');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;回鼓楼顺便转转。</p>');
				}
				else if (p >= 26 && p <= 27) {
					setData([['2024-08-05', 0]]);
					$page.text('8.5');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;山中寺。</p>');
				}
				else if (p >= 28 && p <= 29) {
					setData([['2024-08-07', 0]]);
					$page.text('8.7');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;暑假过半了！</p>');
				}
				else if (p >= 30 && p <= 31) {
					setData([['2024-08-11', 0]]);
					$page.text('8.11');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;啊！亭江炮台！</p>');
				}
				else if (p >= 32 && p <= 33) {
					setData([['2024-08-17', 0]]);
					$page.text('8.17');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;福地再相聚！</p>');
				} else if (p >= 34 && p <= 35) {
					setData([['2024-08-24', 0]]);
					$page.text('8.24');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;时代变了，但还没完全变。</p>');
				}
				else {
					setData([[]]);
					$page.text('尾页');
					$paragraph.html('<p>&nbsp;&nbsp;&nbsp;&nbsp;我想今年内回来😭。</p>');
				}
			}
		}
	});

});

$(window).bind('keydown', function (e) {
	// 键盘翻页
	if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {  // 左键
		$book.turn('previous');
	}
	else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {  // 右键
		$book.turn('next');
	}
});

$("#prev").on("click", function () {
	$book.turn('previous');
});

$("#next").on("click", function () {
	$book.turn('next');
});