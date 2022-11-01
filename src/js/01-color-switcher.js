function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const btnDisable = document.querySelector('button');
let timerId = null;

btnStart.addEventListener('click', () => {
   timerId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
   }, 1000);

   if (timerId) {
   btnDisable.setAttribute('disabled', true);
   }
});

btnStop.addEventListener('click', () => {
   clearInterval(timerId);

   btnDisable.removeAttribute('disabled');
});
