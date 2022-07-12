import * as THREE from 'three';

export const getHelpers = (light: THREE.PointLight) => {
  const lightHelper = new THREE.PointLightHelper(light);
  const gridHelper = new THREE.GridHelper(200, 50);

  return { lightHelper, gridHelper };
};
