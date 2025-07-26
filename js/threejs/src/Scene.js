import { World } from './World/World.js';
import { GLTFLoader } from '../vendor/three/examples/jsm/loaders/GLTFLoader.js';
import { setupModel } from './World/components/setupModel.js';

class Scene {
    constructor(containerID, modelPath, height) {
        this.containerID = containerID;
        this.modelPath = modelPath;
        this.height = height;
    }

    async createScene(){
        // Get a reference to the container element
        const container = document.querySelector(this.containerID);

        const loader = new GLTFLoader();

        const [modelData] = await Promise.all([
            loader.loadAsync(this.modelPath),
        ]);

        const model = setupModel(modelData);

        // create a new world
        const world = new World(container, model, this.height);

        // complete async tasks
        await world.init();

        // start the animation loop
        world.start();
    }
}

export { Scene };
