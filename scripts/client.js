// Art 109 Three.js Demo Site
// client.js
// A basic three.js scene which displays and rotates a polygon with a wireframe

// Extract globals from external script
const {
  THREE
} = window;

// Create a scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  50,
  500 / 500,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xdbbdd5);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(500, 500);
document.body.appendChild(renderer.domElement);

// Add a polygon to the scene

const geometry = new THREE.CylinderGeometry(2, 1, 1.25, 30);
const material = new THREE.MeshBasicMaterial({
  color: 0x344473
});
const cylinder = new THREE.Mesh(geometry, material);
scene.add(cylinder);

// add wireframe to shape
const matLineBasic = new THREE.LineBasicMaterial({
  color: 0xe8c9b3
});
const wireframe = new THREE.WireframeGeometry(geometry);
const line = new THREE.LineSegments(wireframe, matLineBasic);
line.material.depthTest = false;
line.material.opacity = 0.9;
line.material.transparent = false;
scene.add(line);

// Position our camera so we can see the shape
camera.position.z = 5;

// Add a directional light to the scene
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
scene.add(directionalLight);

// Add an ambient light to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
scene.add(ambientLight);

// Define and then call the render loop
// Define
function render() {
  requestAnimationFrame(render);

  // Rotate our shape
  cylinder.rotation.x += 0.005;
  cylinder.rotation.y += 0.005;
  line.rotation.x += 0.005;
  line.rotation.y += 0.005;
  renderer.render(scene, camera);
}
// Call
render();