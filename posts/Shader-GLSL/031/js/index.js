import * as THREE from 'three';

let scene, camera, renderer, clock, geometry, material, plane, uniforms, vShader, fShader, index, images, loader;

main();


function main() {
    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    clock = new THREE.Clock();

    geometry = new THREE.PlaneGeometry(2, 1.5);
    uniforms = {
        u_tex_1: { value: null },
        u_tex_2: { value: null },
        u_duration: { value: 2.0 },
        u_time: { value: 0.0 },
        u_mouse: { value: { x: 0.0, y: 0.0 } },
        u_resolution: { value: { x: 0, y: 0 } }
    }

    loadShaders().then(() => {
        material = new THREE.ShaderMaterial({ uniforms: uniforms, vertexShader: vShader, fragmentShader: fShader });
        plane = new THREE.Mesh(geometry, material);
        scene.add(plane);
    }).catch(error => console.error('Error loading shaders:', error));

    camera.position.z = 1;

    onWindowResize();
    if ('ontouchstart' in window) {
        document.addEventListener('touchmove', move);
    } else {
        window.addEventListener('resize', onWindowResize, false);
        document.addEventListener('mousemove', move);
    }



    index = 0;
    images = [];
    loader = new THREE.TextureLoader();
    loader.setPath('https://s3-us-west-2.amazonaws.com/s.cdpn.io/2666677/');
    loadNextImage(loader);
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

function loadNextImage(loader) {
    index++;
    if (index > 5) {
        index = 0;
        uniforms.u_tex_1.value = images[0];
        uniforms.u_tex_2.value = images[1];
        uniforms.u_time.value = 0;

        const prev = document.getElementById("prev");

        prev.onclick = function () {
            uniforms.u_time.value = 0;

            if (index == 4) {
                uniforms.u_tex_1.value = images[0];
                uniforms.u_tex_2.value = images[4];
            } else if (index < 0) {
                index = 4;
                uniforms.u_tex_1.value = images[0];
                uniforms.u_tex_2.value = images[4];
            } else {
                uniforms.u_tex_1.value = images[index + 1];
                uniforms.u_tex_2.value = images[index];
            }
            const msg = document.getElementById("msg");
            msg.style.display = "none";
            index--;
        };

        const next = document.getElementById("next");

        next.onclick = function () {
            uniforms.u_time.value = 0;

            index++;
            if (index >= 5) {
                index = 0;
                uniforms.u_tex_1.value = images[0];
                uniforms.u_tex_2.value = images[1];
            } else if (index == 4) {
                uniforms.u_tex_1.value = images[4];
                uniforms.u_tex_2.value = images[0];
            } else {
                uniforms.u_tex_1.value = images[index];
                uniforms.u_tex_2.value = images[index + 1];
            }
            const msg = document.getElementById("msg");
            msg.style.display = "none";
        };

        animate();
    } else {
        loader.load(`sa${index}.jpg`, function (tex) {
            images.push(tex);
            loadNextImage(loader);
        })
    }
}


function move(evt) {
    uniforms.u_mouse.value.x = (evt.touches) ? evt.touches[0].clientX : evt.clientX;
    uniforms.u_mouse.value.y = (evt.touches) ? evt.touches[0].clientY : evt.clientY;
}

function onWindowResize(event) {
    const aspectRatio = window.innerWidth / window.innerHeight;
    let width, height;
    if (aspectRatio >= (2 / 1.5)) {
        console.log("resize: Use width");
        width = 1;
        height = (window.innerHeight / window.innerWidth) * width;
    } else {
        console.log("resize: Use height")
        height = 1.5 / 2;
        width = (window.innerWidth / window.innerHeight) * height;
    }
    camera.left = -width;
    camera.right = width;
    camera.top = height;
    camera.bottom = -height;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    uniforms.u_resolution.value.x = window.innerWidth;
    uniforms.u_resolution.value.y = window.innerHeight;
}

function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    if (uniforms.u_time.value < uniforms.u_duration.value) {
        uniforms.u_time.value += delta;
    } else {
        uniforms.u_time.value = uniforms.u_duration.value;
    }
    renderer.render(scene, camera);
}