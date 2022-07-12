import { animateAvatar, animateMoon, animateStars, animateTorus } from './models';

export const animate = ({
  camera,
  renderer,
  scene,
}: {
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
}) => {
  const moveCamera = () => {
    const t = document.body.getBoundingClientRect().top;

    animateStars();
    animateAvatar(0.02);
    animateTorus(0.02);
    animateMoon(0.1);

    camera.position.z = t * -0.01;
    camera.position.x = t * -0.0002;
    camera.rotation.y = t * -0.0002;
  };

  document.body.onscroll = moveCamera;
  moveCamera();

  const animating = () => {
    requestAnimationFrame(animating);

    animateStars();
    animateAvatar();
    animateTorus();
    animateMoon();

    // controls.update();

    renderer.render(scene, camera);
  };

  return animating;
};
