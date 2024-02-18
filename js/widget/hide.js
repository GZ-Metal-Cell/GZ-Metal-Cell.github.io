/**
 * tag-hide
 */
const initTagHide = () => {
    const hideButtons = document.querySelectorAll('.hide-button');
    if (!hideButtons.length) return;
    const handleClick = function (e) {
        const $this = this;
        $this.classList.add('open');
        const $fjGallery = $this.nextElementSibling.querySelectorAll('.gallery-container');
        $fjGallery.length && addJustifiedGallery($fjGallery);
    }

    hideButtons.forEach(item => {
        item.addEventListener('click', handleClick, { once: true });
    })
}

$(document).ready(function() {
    initTagHide();
});