function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
let timerId = null;

btnStart.addEventListener('click', ()=> {
   timerId = setInterval(()=> {
      document.body.style.backgroundColor = getRandomHexColor();
   }, 1000);
});