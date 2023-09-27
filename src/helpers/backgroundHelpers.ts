import anime from 'animejs';
import windowHelpers from './windowHelpers';

/* ----------------- */
/* Shooting stars    */
/* ----------------- */

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

/* ----------------- */
/* Pulsating Circles */
/* ----------------- */

const circleArr: HTMLDivElement[] = [];
const sky = document.getElementById('sky') as HTMLDivElement;

const createCircle = (quantity: number) => {
  for (let i = 0; i < quantity; i++) {
    const radius = windowHelpers.randomRadius(8, 2);
    const circle = document.createElement('div');
    circle.style.left = `${windowHelpers.getRandomX()}px`;
    circle.style.top = `${windowHelpers.getRandomY()}px`;
    circle.style.width = `${radius}px`;
    circle.style.height = `${radius}px`;
    circle.style.setProperty('--delay', i.toString());
    circle.classList.add('circle');
    circleArr.push(circle);
    sky.appendChild(circle);
  }
};

const shuffleCircles = () => {
  circleArr.forEach((circle) => {
    const radius = windowHelpers.randomRadius(8, 2);
    circle.style.left = `${windowHelpers.getRandomX()}px`;
    circle.style.top = `${windowHelpers.getRandomY()}px`;
    circle.style.width = `${radius}px`;
    circle.style.height = `${radius}px`;
  });
};

const backgroundHelpers = {
  animateStars,
  createStar,
  createCircle,
  shuffleCircles,
};

export default backgroundHelpers;
