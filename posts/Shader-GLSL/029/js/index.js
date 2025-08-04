import * as THREE from 'three';
let scene, camera, renderer, geometry, material, plane, vShader, fShader, uniforms, clock, noise;

main();

function loadNoiseShader() {
    const vertexShaderPromise = fetch('glsl/noise.glsl')
        .then(response => response.text())
        .then(data => {
            noise = data;
        });

    return vertexShaderPromise;
}

function loadUniforms() {
    const vertexShaderPromise = fetch('json/uniforms.json').then(response => response.json())  // 解析 JSON 数据
        .then(data => {
            uniforms = {
                u_tex: { value: new THREE.TextureLoader().load(data.uniforms.u_tex.value) },
                u_time: { value: data.uniforms.u_time.value },
                u_mouse: { value: { x: data.uniforms.u_mouse.value.x, y: data.uniforms.u_mouse.value.y } },
                u_resolution: { value: { x: data.uniforms.u_resolution.value.x, y: data.uniforms.u_resolution.value.y } }
            };
        });

    return vertexShaderPromise;
}

function loadShaders() {
    const vertexShaderPromise = fetch('glsl/vertexShader.glsl')
        .then(response => response.text())
        .then(data => {
            vShader = data;
        });

    const fragmentShaderPromise = fetch('glsl/fragmentShader.glsl')
        .then(response => response.text())
        .then(data => {
            fShader = data;
        });

    return Promise.all([vertexShaderPromise, fragmentShaderPromise]);
}

function main() {
    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    clock = new THREE.Clock();
    geometry = new THREE.PlaneGeometry(2, 2);

    loadNoiseShader().then(() => {
        THREE.ShaderChunk.noise = noise;
        loadUniforms().then(() => {
            loadShaders().then(() => {
                material = new THREE.ShaderMaterial({ uniforms: uniforms, vertexShader: vShader, fragmentShader: fShader });
                plane = new THREE.Mesh(geometry, material);
                scene.add(plane);
            }).catch(error => console.error('Error loading shaders:', error));
        }).catch(error => console.error('Error loading uniforms:', error));
    }).catch(error => console.error('Error loading noise shader:', error));

    camera.position.z = 1;

    onWindowResize();
    window.addEventListener('resize', onWindowResize, false);

    animate();

}

function onWindowResize(event) {
    const aspectRatio = window.innerWidth / window.innerHeight;
    let width, height;
    if (aspectRatio >= 1) {
        width = 1;
        height = (window.innerHeight / window.innerWidth) * width;
    } else {
        width = aspectRatio;
        height = 1;
    }
    camera.left = -width;
    camera.right = width;
    camera.top = height;
    camera.bottom = -height;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    uniforms.u_time.value += clock.getDelta();
    renderer.render(scene, camera);
}