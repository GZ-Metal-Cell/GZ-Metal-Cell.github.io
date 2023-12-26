class ImageSlider {
    constructor(mask, leftImage, rightImage, widthPercent) {
        this.mask = mask;
        this.leftImage = leftImage;
        this.rightImage = rightImage;
        this.isDragging = false;

        this.mask.style.left = (widthPercent - 0.5) + '%';
        this.leftImage.style.clipPath = 'inset(0 ' + (100 - widthPercent) + '% 0 0)';
        this.rightImage.style.clipPath = 'inset(0 0 0 ' + widthPercent + '%)';

        this.mask.addEventListener('mousedown', (e) => {
            this.isDragging = true;
            e.preventDefault(); // 防止默认事件（如选择文本）
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
function createImageSlider(sliderId, widthPercent=50) {
    const slider = document.getElementById(sliderId);
    const mask = slider.querySelector('.mask');
    const leftImage = slider.querySelector('.left-image');
    const rightImage = slider.querySelector('.right-image');
    return new ImageSlider(mask, leftImage, rightImage, widthPercent);
}
