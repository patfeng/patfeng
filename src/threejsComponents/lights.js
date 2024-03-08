import * as THREE from 'three';

export function createLights(scene) {
  const pointLight = new THREE.PointLight(0xffffff, 100.0);
  pointLight.position.set(1, 0, 0);
  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(pointLight, ambientLight);
  return {
    "pointLight": pointLight, 
    "ambientLight": ambientLight,
  }
}