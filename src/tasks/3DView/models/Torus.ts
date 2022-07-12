import * as THREE from 'three';

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshToonMaterial({ color: 0xff6347 });

export const Torus = new THREE.Mesh(geometry, material);

export const initialConfigTorus = () => {};

export const animateTorus = (delta?: number) => {
  Torus.rotation.x += delta || 0.01;
  Torus.rotation.y += delta || 0.005;
  Torus.rotation.z += delta || 0.01;
};
