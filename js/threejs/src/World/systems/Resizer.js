const setSize = (container, camera, renderer, height) => {
    camera.aspect = container.clientWidth / height;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, height);
    renderer.setPixelRatio(window.devicePixelRatio);
};

class Resizer {
    constructor(container, camera, renderer, height) {
        // set initial size on load
        setSize(container, camera, renderer, height);

        window.addEventListener('resize', () => {
            // set the size again if a resize occurs
            setSize(container, camera, renderer, height);
            // perform any custom actions
            this.onResize();
        });
    }

    onResize() { }
}

export { Resizer };
