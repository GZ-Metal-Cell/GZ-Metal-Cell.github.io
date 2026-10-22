(() => {
    // 外层闭包允许文章在客户端切换路由后重新加载脚本。
    const instances = new WeakMap();

    class ImageSlider {
        constructor(slider, widthPercent) {
            this.slider = slider;
            this.mask = slider.querySelector('.mask');
            this.pointerId = null;
            this.setPosition(widthPercent);

            this.mask.addEventListener('pointerdown', (event) => {
                if (!event.isPrimary || event.button !== 0 || this.pointerId !== null) return;
                event.preventDefault();
                this.pointerId = event.pointerId;
                this.mask.focus({ preventScroll: true });
                // 拖出滑块甚至容器后，仍由滑块接收移动和松开事件。
                this.mask.setPointerCapture(event.pointerId);
                this.drag(event);
            });
            this.mask.addEventListener('pointermove', (event) => {
                if (event.pointerId === this.pointerId) this.drag(event);
            });
            const stopDragging = (event) => {
                if (event.pointerId !== this.pointerId) return;
                this.pointerId = null;
                if (this.mask.hasPointerCapture(event.pointerId)) {
                    this.mask.releasePointerCapture(event.pointerId);
                }
            };
            this.mask.addEventListener('pointerup', stopDragging);
            this.mask.addEventListener('pointercancel', stopDragging);
            this.mask.addEventListener('lostpointercapture', stopDragging);
            this.mask.addEventListener('keydown', (event) => {
                let value = this.widthPercent;
                switch (event.key) {
                    case 'ArrowLeft': value -= 1; break;
                    case 'ArrowRight': value += 1; break;
                    case 'Home': value = 0; break;
                    case 'End': value = 100; break;
                    default: return;
                }
                event.preventDefault();
                this.setPosition(value);
            });
        }

        setPosition(value) {
            this.widthPercent = Math.min(Math.max(value, 0), 100);
            this.slider.style.setProperty('--slider-position', this.widthPercent + '%');
            this.mask.setAttribute('aria-valuenow', String(Math.round(this.widthPercent)));
        }

        drag(event) {
            const rect = this.slider.getBoundingClientRect();
            if (rect.width > 0) {
                this.setPosition((event.clientX - rect.left) / rect.width * 100);
            }
        }
    }

    window.createImageSlider = (sliderId, widthPercent = 50) => {
        const slider = document.getElementById(sliderId);
        if (!slider || !slider.querySelector('.mask')) return null;
        if (instances.has(slider)) return instances.get(slider);
        const instance = new ImageSlider(slider, widthPercent);
        instances.set(slider, instance);
        return instance;
    };
})();
