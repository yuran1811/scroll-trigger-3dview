import * as THREE from 'three';

const texture = new THREE.TextureLoader().load('Avatar.jpg');

export const Avatar = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: texture })
);

export const initialConfigAvatar = () => {
  Avatar.position.z = -5;
  Avatar.position.x = 2;
};

export const animateAvatar = (delta?: number) => {
  Avatar.rotation.x += delta || 0.01;
  Avatar.rotation.y += delta || 0.01;
  Avatar.rotation.z += delta || 0.01;
};
