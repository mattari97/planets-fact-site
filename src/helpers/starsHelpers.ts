import anime from 'animejs';
import windowHelpers from './windowHelpers';

const shootingstars = document.getElementById('shootingstars') as HTMLDivElement;

const animateStars = () =>
  anime({
    targets: ['.star'],
    easing: 'linear',
    loop: true,
    delay: (_, i) => 3000 * i,
    opacity: [{ duration: 100, value: '1' }],
    width: [{ value: '150px' }, { value: '0px' }],
    translateX: 350,
  });

const createStar = (quantity: number) => {
  for (let i = 0; i < quantity; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${windowHelpers.getRandomY()}px`;
    star.style.top = `${windowHelpers.getRandomX()}px`;
    shootingstars.appendChild(star);
  }
};

const starsHelpers = {
  animateStars,
  createStar,
};

export default starsHelpers;
