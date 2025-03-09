var bodyBackground;
var dropDownButton;

const backgrounds = [
    'images/0.webp',
    'images/1.webp',
    'images/2.webp',
    'images/3.webp',
    'images/4.webp',
    'images/5.webp',
    'images/6.webp',
    'images/7.webp',
    'images/8.webp',
    'images/9.webp'
];

const strings = [
    [' 嗨！欢迎来到我的`<b>`博客`</b>🤩`！ ^1000接下来请允许我介绍我自己`😀`。^500',],
    ['你可以叫我`<b>`^250小^250 Z `</b>🤗`。^500我今年 `<b>`' + (new Date().getFullYear() - 1999).toString() + '</b> 岁了`🫣`。^1000我来自`<b>`^250福建省^500福州市`</b>😬`，^1000但我并不会说福州话`😶`，^500也不喜欢吃海鲜 `😵`……^1000真是一个^250假^250福^250州^250人`😇`。^500',],
    ['MBTI 测试显示我是一个 `<div style="display: inline; color: #88619a; font-weight: bold;">`INTJ`</div>🤔`。^1000不过我的房间总是乱乱的，^500还是一个`<b>`^250内^250向^250的^250大^1000闷骚男`</b>🤤`。^1000我讨厌形式主义`😠`，^500只喜欢做我喜欢做的事情`😕`。^500',],
    ['曾是一名`<b>`游戏成瘾少年`</b>😮‍💨`。^1000从小到大玩过各种电脑游戏`😆`。^1000比较喜欢玩赛车类游戏、^500策略类游戏^500和自由度高的沙盒类游戏，^500不太会玩 MOBA`😅`。^500',],
    ['游戏一直玩，^500学习一直马马虎虎`🥱`。^1000本科就选择了有趣的`<b>`^250数^250字^250媒^250体^250技^250术`</b>`^250专业`😍`！^1000我喜欢用计算机创造各种有趣的事物`😎`！^1000额……^1000写论文不是有趣的事物`😒`。^500',],
    ['精通 Ps、Pr、Ai、Ae、An 等软件^1000的安装与卸载`🤪`！^1000额……^1000还是对其中的一些软件比较熟悉的`🧐`。^1000对三维建模软件和游戏引擎也有所涉猎`🫢`。^1000励志成为一名`<b>`游戏行业里的六边形战士`</b>😏`！^1000虽然这还有很长的路要走`🥴`。^500',],
    ['精通 C、C++、C#、Python、HTML、CSS、Javascript 等^1000单词的拼写`🤠`！^1000额……^1000至少会用它们写点东西`🙃`。^500',],
    ['会游泳，^500会打羽毛球，^500还喜欢摄影，^500下象棋`🥸`。^1000额……^1000虽然都是菜鸟水平`😳`……^1000曾经学过点素描，^500还是因为太懒就搁置了`🤐`。^500',],
    ['考研后阴差阳错地来到了`<b>`河北`</b>`上学`🤨`，^1000阴差阳错地选择了`<b>`人工智能`</b>`专业`🤫`，^1000成为了一名`<b>`^250科^250研^250废^250物`</b>😵`。^1000在这里体验到了不一样的生活`🤧`。^1000希望能在研究生的闲暇时光里多去看看祖国的大好河山`🥳`！^1000然后学点实在的东西。^500','考研后阴差阳错地来到了<b>河北</b>上学🤨，阴差阳错地选择了<b>人工智能</b>专业🤫，成为了一名<b>科研废物</b>😵。在这里体验到了不一样的生活🤧。希望能在研究生的闲暇时光里多去看看祖国的大好河山🥳！^1000然后能够^250顺^250利^250毕^250业`😵‍💫`。^500',],
    ['尽管对一些人或事物仍存在遗憾`🫤`，^1000但……`<b>`^1000不^250以^250物^250喜^250，^250不^250以^250己^250悲`</b>`^250。^1000希望能在以后的生活中成为^500更^250好^250的^250自^250己`🫡`！^500',]];

function setStep(step) {
    dropDownButton.css({ 'display': 'none' });
    bodyBackground.css({ 'opacity': 0 });
    $('#stepContainer_' + step.toString()).css({ 'max-height': '300px' });

    new Typed('#typed_' + step.toString(), {
        strings: strings[step],
        typeSpeed: 30,
        backSpeed: 30,
        startDelay: 1500,
        loop: false,
        onComplete: function (self) {
            self.cursor.style.display = 'none';
            bodyBackground.css({ 'background-image': 'url("' + backgrounds[step] + '")' });
            bodyBackground.css({ 'opacity': 1 });
            if (step < strings.length - 1) {
                dropDownButton.css({ 'display': 'block' });
            } else {
                $('.dropDownButtonContainer').css({ 'height': '2px' });
            }
        }
    });
}

$(document).ready(function () {

    for (var i = 0; i < backgrounds.length; i++) {
        var img = new Image();

        // 设置图片的src属性
        img.src = backgrounds[i];

        // 在图片加载完成后执行的函数
        $(img).on('load', function () {
            // 图片加载完成后的处理逻辑，例如显示图片等
        });
    }

    // 创建一个新的div元素
    bodyBackground = $('<div class="bodyBackground"></div>');

    // 将新的div元素添加到body下的第一个子元素位置
    $('body').prepend(bodyBackground);

    bodyBackground.css({ 'opacity': 1 });

    var step = 0;

    dropDownButton = $('#dropDownButton');

    dropDownButton.on('click', function () {
        step += 1;
        setStep(step);
    });
    setStep(0);
});