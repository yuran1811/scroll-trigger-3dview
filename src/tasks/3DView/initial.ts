import * as THREE from 'three';
import { getWindowRatio } from '..';

export const initApp = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, getWindowRatio(), 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();

  return { scene, camera, renderer };
};

export const initialConfig = ({
  camera,
  renderer,
  scene,
  configs,
}: {
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  configs: CallableFunction[];
}) => {
  configs.forEach((callback) => callback());

  camera.position.setZ(30);
  camera.position.setX(-3);

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
};
