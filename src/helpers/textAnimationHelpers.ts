import anime from 'animejs';

const TEXT_ANIMATION_DURATION = 1500;

const animateMovingTitle = () => {
  const textWrapper = document.querySelector('.moving-letters .letters') as HTMLSpanElement;
  textWrapper.innerHTML = textWrapper.textContent!.replace(/\S/g, "<span class='letter'>$&</span>");

  anime({
    targets: '.moving-letters .letter',
    scale: [0, 1],
    duration: TEXT_ANIMATION_DURATION,
    elasticity: 600,
    delay: (_, i) => 45 * (i + 1),
  });
};

const animateBodyText = () => {
  anime({
    targets: '.body-text',
    opacity: [{ duration: 0, value: '0' }, { value: '1' }],
    duration: TEXT_ANIMATION_DURATION,
    easing: 'easeInQuad',
  });
};
const movingTitleHelpers = {
  animateBodyText,
  animateMovingTitle,
};

export default movingTitleHelpers;
