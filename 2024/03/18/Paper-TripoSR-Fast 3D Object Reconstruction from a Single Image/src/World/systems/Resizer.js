const setSize = (container, camera, renderer) => {
    camera.aspect = container.clientWidth / 300;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, 300);
    renderer.setPixelRatio(window.devicePixelRatio);
};

class Resizer {
    constructor(container, camera, renderer) {
        // set initial size on load
        setSize(container, camera, renderer);

        window.addEventListener('resize', () => {
            // set the size again if a resize occurs
            setSize(container, camera, renderer);
            // perform any custom actions
            this.onResize();
        });
    }

    onResize() { }
}

export { Resizer };
