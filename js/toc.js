const btn = document.getElementById('js-toc');
const postToc = document.getElementById('post-toc');

// 给按钮绑定点击事件
btn.addEventListener('click', () => {
    if (postToc.classList.contains('active')) {
        postToc.classList.remove("active");
    }
    else
    {
        postToc.classList.add("active"); 
    }
});
// 获取所有的 <a class="toc-link"> 元素
const tocLinks = document.querySelectorAll('a.toc-link');
var tocTextList = [];
// 遍历每个元素，并为其添加 href 属性和 click 事件监听器
tocLinks.forEach(link => {
    // 获取嵌套在 <a> 元素内的 <span> 元素
    const span = link.querySelector('span.toc-text');
    // 如果找到了 <span> 元素，则将其文本内容添加到 href 属性中
    if (span) {
        const textContent = span.textContent;
        const replacedText = textContent.replace(/[.?#/:&\s]+/g, "-");
        const encodedText = encodeURIComponent(replacedText); // 对生成的 ID 进行编码
        tocTextList.push(replacedText);
        link.setAttribute('href', `#${encodedText}`);
    }

    // 添加 click 事件监听器
    link.addEventListener('click', function (event) {
        // 阻止默认行为
        event.preventDefault();
        // 执行你想要的操作，例如跳转到目标位置
        const targetId = decodeURIComponent(this.getAttribute('href')).replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                // behavior: 'smooth'
            });
        }
    });
});

function getTopHeadingId() {
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    let topHeadingId = null;
    let minDistanceFromTop = Infinity;
    for (const heading of headings) {
        const boundingRect = heading.getBoundingClientRect();
        const distanceFromTop = Math.abs(boundingRect.y);
        if (distanceFromTop < minDistanceFromTop) {
            minDistanceFromTop = distanceFromTop;
            topHeadingId = heading.id;
        }
    }
    return topHeadingId;
}

document.addEventListener("scroll", function (event) {
    const topHeadingId = getTopHeadingId();
    tocLinks.forEach(link => {
        // 获取嵌套在 <a> 元素内的 <span> 元素
        const span = link.querySelector('span.toc-text');
        // 如果找到了 <span> 元素，则将其文本内容添加到 href 属性中
        if (span) {
            const textContent = span.textContent;
            const replacedText = textContent.replace(/[.?#/:&\s]+/g, "-");
            if (replacedText == topHeadingId) {
                if (!link.classList.contains('active')) {
                    link.classList.add("active");
                    var toc = document.querySelector(".toc");
                    var activeItem = toc.querySelector(".active");
                    if (activeItem) {
                      toc.scrollTop = activeItem.offsetTop - 100;
                    }
                }
            } else {
                link.classList.remove("active");
            }
        }
    });
}, 3000);

