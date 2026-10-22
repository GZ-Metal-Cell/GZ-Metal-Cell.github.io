(() => {
    // 文章切换后脚本可以重复加载；委托事件也能处理稍后挂载的 RawHtml。
    if (window.__ARTICLE_PANORAMA_DRAG_BOUND__) return;
    window.__ARTICLE_PANORAMA_DRAG_BOUND__ = true;

    let drag = null;
    let suppressClick = false;

    document.addEventListener('pointerdown', (event) => {
        if (!event.isPrimary || event.button !== 0 || drag) return;
        suppressClick = false;
        const panorama = event.target.closest?.('.panorama');
        if (!panorama || panorama.scrollWidth <= panorama.clientWidth) return;
        drag = {
            panorama,
            pointerId: event.pointerId,
            startX: event.clientX,
            startY: event.clientY,
            startScroll: panorama.scrollLeft,
            moved: false,
        };
    });

    document.addEventListener('pointermove', (event) => {
        if (!drag || event.pointerId !== drag.pointerId) return;
        const dx = event.clientX - drag.startX;
        const dy = event.clientY - drag.startY;
        if (!drag.moved) {
            // 轻点仍打开灯箱；竖向手势留给页面滚动。
            if (Math.abs(dx) < 6 || Math.abs(dx) <= Math.abs(dy)) return;
            drag.moved = true;
            drag.panorama.classList.add('is-dragging');
            drag.panorama.setPointerCapture(event.pointerId);
        }
        event.preventDefault();
        drag.panorama.scrollLeft = drag.startScroll - dx;
    });

    const stopDragging = (event) => {
        if (!drag || event.pointerId !== drag.pointerId) return;
        const finished = drag;
        drag = null;
        suppressClick = finished.moved && event.type !== 'pointercancel';
        finished.panorama.classList.remove('is-dragging');
        if (finished.panorama.hasPointerCapture(event.pointerId)) {
            finished.panorama.releasePointerCapture(event.pointerId);
        }
    };
    document.addEventListener('pointerup', stopDragging);
    document.addEventListener('pointercancel', stopDragging);
    document.addEventListener('lostpointercapture', stopDragging);

    // 阻止浏览器原生拖走图片/链接；横向拖动后的 click 不应打开灯箱。
    document.addEventListener('dragstart', (event) => {
        if (event.target.closest?.('.panorama')) event.preventDefault();
    });
    document.addEventListener('click', (event) => {
        if (!suppressClick) return;
        suppressClick = false;
        if (event.detail === 0) return; // 保留键盘触发的链接操作。
        event.preventDefault();
        event.stopPropagation();
    }, true);
})();
