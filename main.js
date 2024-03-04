import './style.css';
import * as THREE from 'three';
import * as dat from 'dat.gui'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';



// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//const camera = new THREE.OrthographicCamera( window.innerWidth /-2, window.innerWidth /2, window.innerHeight/2,window.innerHeight/-2, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

var model;

const loader = new GLTFLoader();

loader.load( '../girl_model/scene.gltf', function ( gltf ) {

  model = gltf.scene;
  console.log(model);
  model.scale=(0.1,0.1,0.1);
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );


const controls = new OrbitControls( camera, renderer.domElement );

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(40);
camera.position.setX(-3);


renderer.render(scene, camera);

// Torus
var vertexShader;
var fragmentShader;
await fetch('./shaders/vertex.glsl')
    .then(response => {
        return response.text();
    })
    .then(fileContent => {
        vertexShader = fileContent;
    });

await fetch('./shaders/fragment.glsl')
    .then(response => {
        return response.text();
    })
    .then(fileContent => {
        fragmentShader = fileContent;
    });

// const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const geometry2 = new THREE.TorusGeometry(10,3,16,100);
// const material2 = new THREE.MeshStandardMaterial();

console.log(fragmentShader);
console.log(vertexShader);

const uniforms={
  u_time:{type: "f", value: 0.0}
};

const material2 = new THREE.ShaderMaterial({
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
  wireframe: false,
  uniforms: uniforms,
}); 
//const torus = new THREE.Mesh(geometry, material);
const torus2 = new THREE.Mesh(geometry2, material2);

//scene.add(torus);
scene.add(torus2);

// Lights

const pointLight = new THREE.PointLight(0xffffff,100.0);
pointLight.position.set(1, 0, 0);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight);

const gui = new dat.GUI;
const options = {
  color: "#ffea00"
};
gui.addColor(options,'color').onChange(function(e){
  torus2.material.color.set(e);
});

// Helpers

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);

// Background


// Avatar

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  
  // camera.position.z = t * -0.001;
  // camera.position.x = t * -0.00002;
  // camera.rotation.y = t * -0.00002;

}

document.body.onscroll = moveCamera;


// Animation Loop

let time = Date.now()

function animate() {
  requestAnimationFrame(animate);
  const currentTime = Date.now();
  const deltaTime = currentTime - time;

  uniforms.u_time.value=deltaTime;

  model.rotateY(0.001);
  controls.update();

  renderer.render(scene, camera);
}

animate();