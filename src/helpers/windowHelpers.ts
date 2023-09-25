const getRandomX = () => Math.floor(Math.random() * Math.floor(window.innerWidth)).toString();
const getRandomY = () => Math.floor(Math.random() * Math.floor(window.innerHeight)).toString();

const windowHelpers = {
  getRandomX,
  getRandomY,
};

export default windowHelpers;
