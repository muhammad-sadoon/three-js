import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// lighting in modeling
const light = new THREE.AmbientLight( "#afb0b3" ,10); // soft white light
scene.add( light );
const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
scene.add( directionalLight );

// 3d model
// const geometry = new THREE.SphereGeometry(1, 1, 1,20);
// const material = new THREE.MeshBasicMaterial({ color: 0xffff00,slide:THREE.DoubleSide});
// const cylinder = new THREE.Mesh(geometry, material); scene.add(cylinder);

// cube.rotation.x = 2
camera.position.z = 5;
let canvas = document.getElementById("mycanvas")
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
// let clock = new THREE.Clock()

window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix()
})


// OrbitControls to handle the box
let controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 11.3;
controls.enableZoom = true

canvas.addEventListener("mouseover",(e)=>{
    let ex = e.clientX;
    let ey = e.clientY;
})

const loader = new GLTFLoader();

// Load a glTF resource
loader.load(
    // resource URL
    './scene.gltf',
    // called when the resource is loaded
    function (gltf) {

        scene.add(gltf.scene);
    })

function animate() {
    // animation for box
    window.requestAnimationFrame(animate)
    renderer.render(scene, camera);
    // after click to update box rotation by userClicking
    controls.update()
}
animate()