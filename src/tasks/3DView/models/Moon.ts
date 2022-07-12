import * as THREE from 'three';

const texture = new THREE.TextureLoader().load('moon.jpg');
const normalTexture = new THREE.TextureLoader().load('normal.jpg');

export const Moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: texture,
    normalMap: normalTexture,
  })
);

export const initialConfigMoon = () => {
  Moon.position.z = 30;
  Moon.position.setX(-10);
};

export const animateMoon = (deg?: number) => {
  Moon.rotation.x += deg || 0.005;
};
