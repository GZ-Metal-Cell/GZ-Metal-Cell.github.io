let scene, camera, geometry, clock, renderer, controls, uniforms, ball, material, material1, vShader, fShader;

main();

function main() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );
    camera.position.z = 100;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    clock = new THREE.Clock();

    geometry = new THREE.BoxGeometry(30, 30, 30, 10, 10, 10);

    uniforms = {};
    uniforms.u_time = { value: 0.0 };
    uniforms.u_mouse = { value: { x: 0.0, y: 0.0 } };
    uniforms.u_resolution = { value: { x: 0, y: 0 } };
    uniforms.u_radius = { value: 20.0 };

    loadShaders().then(() => {
        material = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: vShader,
            fragmentShader: fShader,
            wireframe: true
        });

        material1 = new THREE.MeshBasicMaterial({
            color: 0xb7ff00,
            wireframe: true
        });

        ball = new THREE.Mesh(geometry, material);
        scene.add(ball);

        controls = new THREE.OrbitControls(camera, renderer.domElement);

        onWindowResize();
        if ('ontouchstart' in window) {
            document.addEventListener('touchmove', move);
        } else {
            window.addEventListener('resize', onWindowResize, false);
            document.addEventListener('mousemove', move);
        }

        function move(evt) {
            uniforms.u_mouse.value.x = (evt.touches) ? evt.touches[0].clientX : evt.clientX;
            uniforms.u_mouse.value.y = (evt.touches) ? evt.touches[0].clientY : evt.clientY;
        }

        animate();
    }).catch(error => console.error('Error loading shaders:', error));
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

function onWindowResize(event) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    uniforms.u_resolution.value.x = window.innerWidth;
    uniforms.u_resolution.value.y = window.innerHeight;
}

function animate() {
    requestAnimationFrame(animate);
    uniforms.u_time.value += clock.getDelta();
    renderer.render(scene, camera);
}