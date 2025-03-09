import * as THREE from 'three';
let scene, camera, renderer, geometry, material, plane, vShader, fShader, uniforms, clock;

main();

function loadShaders() {
    const vertexShaderPromise = fetch('glsl/vertexShader.glsl')
        .then(response => response.text())
        .then(data => {
            vShader = data; // 将加载的顶点着色器源码赋给 vShader
        });

    const fragmentShaderPromise = fetch('glsl/fragmentShader.glsl')
        .then(response => response.text())
        .then(data => {
            fShader = data; // 将加载的片段着色器源码赋给 fShader
        });

    // 使用 Promise.all 等待两个 Promise 都完成
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

    uniforms = {
        u_time: { value: 0.0 },
    };

    loadShaders().then(() => {

        material = new THREE.ShaderMaterial({ uniforms: uniforms, vertexShader: vShader, fragmentShader: fShader });  // 应用顶点着色器和片元着色器

        plane = new THREE.Mesh(geometry, material);
        scene.add(plane);
    }).catch(error => console.error('Error loading shaders:', error));

    camera.position.z = 1;

    onWindowResize();

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
    uniforms.u_time.value += clock.getDelta();  // clock.getElapsedTime(); 如果选这个会闪瞎狗眼
    renderer.render(scene, camera);
}