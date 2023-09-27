import anime from 'animejs';

const animateMovingTitle = () => {
  const textWrapper = document.querySelector('.moving-letters .letters') as HTMLSpanElement;
  textWrapper.innerHTML = textWrapper.textContent!.replace(/\S/g, "<span class='letter'>$&</span>");
  anime({
    targets: '.moving-letters .letter',
    translateY: ['1.1em', 0],
    translateX: ['0.55em', 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: 'easeOutExpo',
    delay: (_, i) => 50 * i,
  });
};

const movingTitleHelpers = {
  animateMovingTitle,
};

export default movingTitleHelpers;
