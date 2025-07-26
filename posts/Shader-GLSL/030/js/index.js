import * as THREE from 'three';
let scene, camera, renderer, geometry, material, plane, vShader, fShader, uniforms, clock, noise;

main();

function loadUniforms() {
    const vertexShaderPromise = fetch('json/uniforms.json').then(response => response.json())
        .then(data => {
            uniforms = data.uniforms;
            uniforms.u_tex.value = new THREE.TextureLoader().load(data.uniforms.u_tex.value);
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

    uniforms = {u_time: { value: 0 }};

    loadUniforms().then(() => {
        loadShaders().then(() => {
            material = new THREE.ShaderMaterial({ uniforms: uniforms, vertexShader: vShader, fragmentShader: fShader });
            plane = new THREE.Mesh(geometry, material);
            scene.add(plane);
        }).catch(error => console.error('Error loading shaders:', error));
    }).catch(error => console.error('Error loading uniforms:', error));

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