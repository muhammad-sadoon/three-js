const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100)
scene.add(camera)
const box = new THREE.TorusGeometry( 10, 3, 16, 100 );
const material = new THREE.MeshBasicMaterial({ color: 0x000ff00,wireframe:true})
const mesh = new THREE.Mesh(box, material)
scene.add(mesh)
camera.position.z = 70;

let canvas = document.getElementById("drow")
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(window.innerWidth,window.innerHeight)

window.addEventListener("resize",()=>{
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix()
})

function animate(){
    window.requestAnimationFrame(animate)
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene,camera)
}
animate()