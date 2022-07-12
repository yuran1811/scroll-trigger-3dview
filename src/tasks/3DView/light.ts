import * as THREE from 'three';

export const pointLight = new THREE.PointLight(0xffffff);

export const ambientLight = new THREE.AmbientLight(0xffffff);

export const initialConfigLight = () => {
  pointLight.position.set(5, 5, 5);
};
