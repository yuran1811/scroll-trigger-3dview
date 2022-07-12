import * as THREE from 'three';

const texture = new THREE.TextureLoader().load('space.jpg');

export const setBackground = (scene: THREE.Scene) => (scene.background = texture);
