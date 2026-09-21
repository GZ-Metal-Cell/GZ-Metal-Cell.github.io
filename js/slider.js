class ImageSlider {
    constructor(mask, leftImage, rightImage, widthPercent) {
        this.mask = mask;
        this.leftImage = leftImage;
        this.rightImage = rightImage;
        this.isDragging = false;

        this.mask.style.left = (widthPercent - 0.5) + '%';
        this.leftImage.style.clipPath = 'inset(0 ' + (100 - widthPercent) + '% 0 0)';
        this.rightImage.style.clipPath = 'inset(0 0 0 ' + widthPercent + '%)';

        // 添加触摸事件监听器
        this.mask.addEventListener('touchstart', (e) => {
            this.isDragging = true;
            e.preventDefault(); // 阻止默认事件（如滚动）
        });
        document.addEventListener('touchend', () => {
            this.isDragging = false;
        });
        document.addEventListener('touchmove', (e) => {
            if (this.isDragging) {
                this.touchDrag(e);
            }
        });

        // 添加鼠标事件监听器
        this.mask.addEventListener('mousedown', (e) => {
            this.isDragging = true;
            e.preventDefault(); // 阻止默认事件（如选择文本）
        });
        document.addEventListener('mouseup', () => {
            this.isDragging = false;
        });
        document.addEventListener('mousemove', (e) => {
            if (this.isDragging) {
                this.drag(e);
            }
        });
    }

    // 触摸拖动事件处理函数
    touchDrag(e) {
        var rect = this.mask.parentNode.getBoundingClientRect();
        var x = e.touches[0].clientX - rect.left; // 获取触摸点相对于容器的位置
        var widthPercent = (x / rect.width) * 100;
        widthPercent = Math.min(Math.max(widthPercent, 0.5), 99.5);
        this.mask.style.left = (widthPercent - 0.5) + '%';
        this.leftImage.style.clipPath = 'inset(0 ' + (100 - widthPercent) + '% 0 0)';
        this.rightImage.style.clipPath = 'inset(0 0 0 ' + widthPercent + '%)';
    }

    // 鼠标拖动事件处理函数
    drag(e) {
        var rect = this.mask.parentNode.getBoundingClientRect();
        var x = e.clientX - rect.left; // 获取鼠标相对于容器的位置
        var widthPercent = (x / rect.width) * 100;
        widthPercent = Math.min(Math.max(widthPercent, 0.5), 99.5);
        this.mask.style.left = (widthPercent - 0.5) + '%';
        this.leftImage.style.clipPath = 'inset(0 ' + (100 - widthPercent) + '% 0 0)';
        this.rightImage.style.clipPath = 'inset(0 0 0 ' + widthPercent + '%)';
    }
}

var POST_BODY_HYDRATED_EVENT = 'next-gzblog:post-body-hydrated';
var pendingImageSliders = [];
var imageSliderFlushScheduled = false;
var initializedImageSliders = typeof WeakSet !== 'undefined' ? new WeakSet() : null;
var initializedImageSliderIds = {};

function isImageSliderInitialized(slider) {
    if (initializedImageSliders) {
        return initializedImageSliders.has(slider);
    }
    return initializedImageSliderIds[slider.id] === true;
}

function markImageSliderInitialized(slider) {
    if (initializedImageSliders) {
        initializedImageSliders.add(slider);
        return;
    }
    initializedImageSliderIds[slider.id] = true;
}

function initImageSlider(sliderId, widthPercent) {
    var slider = document.getElementById(sliderId);
    if (!slider || isImageSliderInitialized(slider)) return null;
    var mask = slider.querySelector('.mask');
    var leftImage = slider.querySelector('.left-image');
    var rightImage = slider.querySelector('.right-image');
    if (!mask || !leftImage || !rightImage) return null;
    markImageSliderInitialized(slider);
    return new ImageSlider(mask, leftImage, rightImage, widthPercent);
}

function flushPendingImageSliders() {
    imageSliderFlushScheduled = false;
    window.removeEventListener(POST_BODY_HYDRATED_EVENT, onPostBodyHydratedForSliders);
    var pending = pendingImageSliders.splice(0);
    for (var i = 0; i < pending.length; i++) {
        var item = pending[i];
        initImageSlider(item.sliderId, item.widthPercent);
    }
}

function onPostBodyHydratedForSliders() {
    flushPendingImageSliders();
}

function scheduleImageSliderFlush() {
    if (typeof window === 'undefined') return;
    if (window.__NEXT_GZBLOG_POST_BODY_HYDRATED__) {
        flushPendingImageSliders();
        return;
    }
    if (imageSliderFlushScheduled) return;
    imageSliderFlushScheduled = true;
    window.addEventListener(POST_BODY_HYDRATED_EVENT, onPostBodyHydratedForSliders);
}

function createImageSlider(sliderId, widthPercent) {
    if (widthPercent === undefined) widthPercent = 50;
    pendingImageSliders.push({ sliderId: sliderId, widthPercent: widthPercent });
    scheduleImageSliderFlush();
}
