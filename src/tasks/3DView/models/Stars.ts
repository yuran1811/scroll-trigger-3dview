import * as THREE from 'three';

export const stars: THREE.Mesh<any, any>[] = [];

const newStar = () => {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill(null)
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);

  return star;
};

export const addStars = (scene: THREE.Scene) => {
  for (let i = 1; i <= 2000; i++) stars.push(newStar());
  stars.forEach((star) => scene.add(star));
};

export const animateStars = () => {
  stars.forEach((star) => {
    const [x, y, z] = Array(3)
      .fill(null)
      .map(() => THREE.MathUtils.randFloatSpread(0.04));

    star.position.x += x;
    star.position.y += y;
    star.position.z += z;
  });
};
