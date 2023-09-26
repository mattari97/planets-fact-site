import windowHelpers from './windowHelpers';

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

const circlesHelpers = {
  createCircle,
  shuffleCircles,
};

export default circlesHelpers;
