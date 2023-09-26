const getRandomX = () => Math.floor(Math.random() * Math.floor(window.innerWidth)).toString();
const getRandomY = () => Math.floor(Math.random() * Math.floor(window.innerHeight)).toString();
const randomRadius = (max: number, min: number = 0) => Math.floor(Math.random() * (max - min) + min);

const windowHelpers = {
  getRandomX,
  getRandomY,
  randomRadius,
};

export default windowHelpers;
