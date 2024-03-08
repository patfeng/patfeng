import * as THREE from 'three';
import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';

export function createTorus(scene) {
  const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
  const uniforms = {
    u_time: { type: 'f', value: 0.0 },
  };


  const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    wireframe: false,
    uniforms,
  });
  const torus = new THREE.Mesh(geometry, material);
  torus.position.z = -15;
  scene.add(torus);
  return torus;
}