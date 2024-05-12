import * as THREE from 'three';
import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';

export function createTorus(scene) {
  const geometry = new THREE.TorusGeometry(5, 2.5, 16, 100);

  const uniforms = {
    u_time: { type: 'f', value: 0.0 },
    u_flag_thinking: { type: 'f', value: 0.0 },
  };


  const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    wireframe: false,
    uniforms,
  });
  const torus = new THREE.Mesh(geometry, material);
  torus.position.z = -15;
  torus.rotation.x = Math.PI / 2;
  scene.add(torus);
  return torus;
}