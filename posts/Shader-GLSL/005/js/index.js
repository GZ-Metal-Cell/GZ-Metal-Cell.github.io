import * as THREE from 'three';

const scene = new THREE.Scene();  // 创建一个新的场景
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);  // 正交相机
const renderer = new THREE.WebGLRenderer();  // 初始化渲染器
renderer.setSize(window.innerWidth, window.innerHeight);  // 设置其尺寸为浏览器窗口的宽高
document.body.appendChild(renderer.domElement);  // 将渲染器的 dom 元素添加到 body 中

const geometry = new THREE.PlaneGeometry(2, 2);  // 创建一个 2x2 的平面几何体
const material = new THREE.ShaderMaterial();  // 使用着色器材质
const plane = new THREE.Mesh(geometry, material);  // 由几何体和材质构建平面网格
scene.add(plane);

camera.position.z = 1;  // 相机位置

onWindowResize();  // 处理窗口大小变化

animate();  // 开启动画循环函数，以便持续渲染场景

function onWindowResize(event) {
    /* 该函数根据窗口的宽高比调整相机的可视范围，并相应地更新渲染器的大小，以确保图像不失真。*/
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
    /* 实现平滑的动画更新，以不断渲染场景和相机的视图。*/
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}