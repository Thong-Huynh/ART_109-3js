// Art 109 Three.js Demo Site
// client2.js
// A three.js scene which loads a custom GLTF model and implements Orbit controls

// Import required source code
// Import three.js core
import * as THREE from "../build/three.module.js";

// Import add-ons for GLTF models and orbit controls
import {
  OrbitControls
} from "../src/OrbitControls.js";
import {
  GLTFLoader
} from "../src/GLTFLoader.js";

//Identify div in HTML to place scene
var container = document.getElementById("space");

//Create scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xd4c6ec);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
// renderer.setSize(400, 400);
// Add scene to gltf.html
container.appendChild(renderer.domElement);

// Material to be added to model
var newMaterial = new THREE.MeshStandardMaterial({
  color: 0x2E5939
});

// Variable for GLTF data
var mesh;
var mesh1;
var mesh2;
var mesh3;


// Load GLTF model, add material, and add it to the scene
const loader = new GLTFLoader().load(
  // "../../assets/testing123fogv3.glb", // comment this line out and un comment the line below to swithc models
  "../../assets/umbrella.gltf", // comment this line out and un comment the line below to switch models
  //"./assets/gourd_web.glb", //<-- photogrammetery model
  function (gltf) {
    // Scan loaded model for mesh and apply defined material if mesh is present
    gltf.scene.traverse(function (child) {
      if (child.isMesh) {
        //child.material = newMaterial;
      }
    });

    // set position and scale
    mesh = gltf.scene;
    mesh.position.set(0, -0.5, 0);
    mesh.rotation.set(0, 0, 0);
    mesh.scale.set(.1, .1, .1);

    // Add model to scene
    scene.add(mesh);
    console.log('Add Mesh 1 successfully');
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const loader1 = new GLTFLoader().load(
  "../../assets/umbrella.gltf",
  function (gltf) {
    gltf.scene.traverse(function (child) {
      if (child.isMesh) {}
    });

    // set position and scale
    mesh1 = gltf.scene;
    mesh1.position.set(2, -1, 1.5);
    mesh1.rotation.set(0, -1, 0);
    mesh1.scale.set(.075, .075, .075);

    // Add model to scene
    scene.add(mesh1);
    console.log('Add Mesh 2 successfully');
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const loader2 = new GLTFLoader().load(
  "../../assets/umbrella.gltf",
  function (gltf) {
    gltf.scene.traverse(function (child) {
      if (child.isMesh) {}
    });

    // set position and scale
    mesh2 = gltf.scene;
    mesh2.position.set(1.5, -1.5, 3);
    mesh2.rotation.set(0, -2, 0);
    mesh2.scale.set(.05, .05, .05);

    // Add model to scene
    scene.add(mesh2);
    console.log('Add Mesh 3 successfully');
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const loader3 = new GLTFLoader().load(
  "../../assets/umbrella.gltf",
  function (gltf) {
    gltf.scene.traverse(function (child) {
      if (child.isMesh) {}
    });

    // set position and scale
    mesh3 = gltf.scene;
    mesh3.position.set(0.5, -1.75, 3.5);
    mesh3.rotation.set(0, -3, 0);
    mesh3.scale.set(.025, .025, .025);

    // Add model to scene
    scene.add(mesh3);
    console.log('Add Mesh 4 successfully');
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

// Add Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 5;
controls.maxDistance = 15;
controls.target.set(0, 0, -0.1);
controls.update();

// Position our camera so we can see the shape
camera.position.z = 10;

// Add a directional light to the scene
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
scene.add(directionalLight);

// Add an ambient light to the scene
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// Define and call the render loop
// Define
function render() {
  requestAnimationFrame(render);
  mesh.rotation.y -= 0.02;
  mesh1.rotation.y += 0.04;
  mesh2.rotation.y -= 0.06;
  mesh3.rotation.y += 0.08;
  renderer.render(scene, camera);
}
// Call
render();

// Respond to Window Resizing
window.addEventListener("resize", onWindowResize);

// Window resizing function
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
}