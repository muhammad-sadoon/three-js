const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);

const light = new THREE.AmbientLight("white",1)
scene.add(light)
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );

const geometry = new THREE.SphereGeometry( 15, 32, 16 ); 
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } ); 
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 2;
const canvas = document.querySelector("#drow")
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function animate() {
    renderer.render(scene, camera);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}
animate()