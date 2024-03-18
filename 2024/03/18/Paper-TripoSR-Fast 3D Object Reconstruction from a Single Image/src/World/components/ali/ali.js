import { GLTFLoader } from '../../../../vendor/three/examples/jsm/loaders/GLTFLoader.js';

import { setupModel } from './setupModel.js';

async function loadAli() {
    const loader = new GLTFLoader();

    const [aliData] = await Promise.all([
        loader.loadAsync('assets/models/Ali.glb'),
    ]);

    console.log(aliData);

    const ali = setupModel(aliData);

    return { ali };
}

export { loadAli };
