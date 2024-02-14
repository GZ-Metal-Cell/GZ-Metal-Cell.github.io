const $headings = $('.post-content').find('h1, h2, h3, h4, h5, h6');
var topHeadingId = null;
var pages = {};
var $book = $('#book');

$(document).ready(function () {
	// 设置容器宽度
	$book.css('width', '95%');
	// 计算高度
	var width = $book.width(); // 获取容器的实际宽度
	var height = (3 / 8) * width; // 根据比例计算高度
	// 设置容器高度
	$book.css('height', height + 'px'); // 将高度值赋给容器的高度属性

	let index = 0;
	$headings.each(function () {
		if(index === 0)
			pages[this.id] = 1;
		else
			pages[this.id] = index * 2;
		index += 1;
	});
});

$(window).ready(function () {
	$book.turn({
		display: 'double',
		acceleration: true,
		gradients: !$.isTouch,
		elevation: 50,
		duration: 1000,
		when: {
			turned: function (e, p) {
				console.log('Current view: ', p);
			}
		}
	});

});

$(window).bind('keydown', function (e) {
	if (e.keyCode == 37) {
		$book.turn('previous');
	}
	else if (e.keyCode == 39) {
		$book.turn('next');
	}
});

function myGetTopHeadingId() {
	let topHeadingId = null;
	let minDistanceFromTop = Infinity;
	let top = $book[0].getBoundingClientRect().y + $book[0].getBoundingClientRect().height + 20;
	if ($headings[0].getBoundingClientRect().y + $headings[0].getBoundingClientRect().height > 140) {
		return $headings[0].id;
	}
	else {
		$headings.each(function () {
			const boundingRect = this.getBoundingClientRect();
			const distanceFromTop = Math.abs(boundingRect.y - top);
			if (distanceFromTop < minDistanceFromTop) {
				minDistanceFromTop = distanceFromTop;
				topHeadingId = this.id;
			}
		});
		return topHeadingId;
	}
}

document.addEventListener("scroll", function (event) {
	const tempId = myGetTopHeadingId();
	if (topHeadingId != tempId) {
		topHeadingId = tempId;
		$book.turn("page", pages[topHeadingId]);
	}
	console.log(topHeadingId);
});

function findKeyByValue(obj, value) {
	// 根据字典的值找到键
	for (var key in obj) {
		if (obj.hasOwnProperty(key) && obj[key] === value) {
			return key;
		}
	}
	return null; // 未找到匹配的键
}

