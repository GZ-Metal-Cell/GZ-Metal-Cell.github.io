$(document).ready(function () {
	// 获取容器元素
	var container = $('#magazine');
	// 设置容器宽度
	container.css('width', '95%');
	// 计算高度
	var width = container.width(); // 获取容器的实际宽度
	var height = (752 / 1152) * width; // 根据比例计算高度
	// 设置容器高度
	container.css('height', height + 'px'); // 将高度值赋给容器的高度属性
});

$(window).ready(function () {
	$('#magazine').turn({
		display: 'double',
		acceleration: true,
		gradients: !$.isTouch,
		elevation: 50,
		when: {
			turned: function (e, page) {
				/*console.log('Current view: ', $(this).turn('view'));*/
			}
		}
	});
});

$(window).bind('keydown', function (e) {
	if (e.keyCode == 37)
		$('#magazine').turn('previous');
	else if (e.keyCode == 39)
		$('#magazine').turn('next');
});