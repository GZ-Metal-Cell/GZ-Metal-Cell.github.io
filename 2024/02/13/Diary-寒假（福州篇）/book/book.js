const $headings = $('article').find('h1, h2, h3, h4, h5, h6');
var topHeadingId = null;
var pages = {};
var $book = $('#book');

$(document).ready(function () {
	// 初始化
	let index = 0;
	$headings.each(function () {
		if(index === 0);
		else if(index === 1)
			pages[this.id] = 1;
		else
			pages[this.id] = index * 2 - 2;
		index += 1;
	});
	$("#loading").remove();
	$book.removeAttr("style");  // 将 book 设为可见
	// 设置容器宽度
	$book.css('width', '50%');
	// 计算高度
	var width = $book.width(); // 获取容器的实际宽度
	var height = (3 / 8) * width; // 根据比例计算高度
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
			turned: function (e, p) {
				// console.log('Current view: ', p);
			}
		}
	});

});

$(window).bind('keydown', function (e) {
	// 键盘翻页
	if (e.keyCode == 37) {  // 左键
		$book.turn('previous');
	}
	else if (e.keyCode == 39) {  // 右键
		$book.turn('next');
	}
});

function myGetTopHeadingId() {
    // 获得最近的标题 ID
    let topHeadingId = null;
    let minDistanceFromTop = Infinity;
    let top = $book[0].getBoundingClientRect().y + $book[0].getBoundingClientRect().height;

    $headings.each(function () {
        const boundingRect = this.getBoundingClientRect();
        const distanceFromTop = Math.abs(boundingRect.y - top);

        // 排除页面最底端比标题顶部高的情况
        if (boundingRect.y + boundingRect.height < top - 180) {
            if (distanceFromTop < minDistanceFromTop) {
                minDistanceFromTop = distanceFromTop;
                topHeadingId = this.id;
            }
        }
    });

    return topHeadingId;
}


document.addEventListener("scroll", function (event) {
	// 滚动自动翻书
	const tempId = myGetTopHeadingId();
	if (topHeadingId != tempId) {
		topHeadingId = tempId;
		$book.turn("page", pages[topHeadingId]);
	}
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

