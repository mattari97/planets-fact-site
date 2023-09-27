import anime from 'animejs';

const animatePlanet = () =>
  anime({
    targets: '.planet',
    easing: 'linear',
    scale: [
      { duration: 0, value: 0 },
      { duration: 750, value: 1 },
    ],
    rotate: [
      { duration: 0, value: '0deg' },
      { duration: 750, value: '360deg' },
    ],
  });

const planetHelpers = {
  animatePlanet,
};

export default planetHelpers;
