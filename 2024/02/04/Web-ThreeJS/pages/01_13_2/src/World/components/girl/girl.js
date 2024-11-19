import { GLTFLoader } from '../../../../../vendor/three/examples/jsm/loaders/GLTFLoader.js';

import { setupModel } from './setupModel.js';

async function loadGirl() {
    const loader = new GLTFLoader();

    const [girlData] = await Promise.all([
        loader.loadAsync('assets/models/girl.glb'),
    ]);

    console.log(girlData);

    const girl = setupModel(girlData);

    return { girl };
}

export { loadGirl };
