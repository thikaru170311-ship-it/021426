const button = document.getElementById('click-btn');
const startScreen = document.getElementById('start-screen');
const imageScreen = document.getElementById('image-screen');

button.addEventListener('click', () => {
  startScreen.classList.remove('active');
  imageScreen.classList.add('active');
});
