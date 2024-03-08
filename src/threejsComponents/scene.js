import * as THREE from 'three';

export function createScene() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.setY(40);
  camera.position.setX(0);
  camera.rotation.x = -Math.PI / 2;

  renderer.render(scene, camera);

  return { scene, camera, renderer };
}