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
    const vertexShaderPromise = fetch('json/uniforms.json')
        .then(response => response.text())
        .then(data => {
            uniforms = JSON.parse(data).uniforms;
        });

    return vertexShaderPromise;
}

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

    THREE.ShaderChunk.simple_lambert_vertex = `
	vec3 vLightFront, vLightBack;
	#include <beginnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <project_vertex>
	#include <lights_lambert_vertex>`

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
    renderer.render(scene, camera);
}