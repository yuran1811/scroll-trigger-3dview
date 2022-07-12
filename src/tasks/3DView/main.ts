import { animate } from './animation';
import { setBackground } from './background';
import { initApp, initialConfig } from './initial';
import { ambientLight, initialConfigLight, pointLight } from './light';
import {
  addStars,
  Avatar,
  initialConfigAvatar,
  initialConfigMoon,
  initialConfigTorus,
  Moon,
  Torus,
} from './models';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const { camera, renderer, scene } = initApp();

initialConfig({
  camera,
  scene,
  renderer,
  configs: [initialConfigLight, initialConfigAvatar, initialConfigMoon, initialConfigTorus],
});

// new OrbitControls(camera, renderer.domElement);
setBackground(scene);
addStars(scene);

// scene.add(lightHelper, gridHelper);
scene.add(pointLight, ambientLight);
scene.add(Avatar);
scene.add(Torus);
scene.add(Moon);

animate({ camera, renderer, scene })();

export const ThreeBGElement = renderer.domElement;
