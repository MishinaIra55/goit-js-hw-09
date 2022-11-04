import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
   inputPicker:  document.querySelector('#datetime-picker'),
   btnStart:     document.querySelector('[data-start]'),
   timerDays:    document.querySelector('[data-days]'),
   timerHours:   document.querySelector('[data-hours]'),
   timerMinutes: document.querySelector('[data-minutes]'),
   timerSeconds: document.querySelector('[data-seconds]'),
};

const options = {
   enableTime: true,
   time_24hr: true,
   defaultDate: new Date(),
   minuteIncrement: 1,
   onClose(selectedDates) {
      const currentDate = new Date();
      // console.log('dates', currentDate - selectedDates[0]);
      if( selectedDates[0] - currentDate > 0) {
         refs.btnStart.disabled = false;
      } else {
         window.alert("Please choose a date in the future");
      }
   },
};

refs.btnStart.disabled = true;
const flat = flatpickr(refs.inputPicker, options);



const timer = {
   timerId: null,
  
   start() {
      //  console.log('startTime', startTime);
      this.timerId = setInterval(() => {
         let startTime = new Date();
         const selectTime = flat.selectedDates[0];
         const deltaTime = selectTime - startTime;
         console.log('deltaTime', deltaTime);
         if (deltaTime < 0) {
            clearInterval(this.timerId);
            return;
         } 
            const timeComponents = convertMs(deltaTime);
            updateClockface(timeComponents);
         
         console.log(timeComponents);
      }, 1000);
   },
}

refs.btnStart.addEventListener('click', ()=> {
   timer.start();
});

//  refs.btnStart.addEventListener('click', ()=> {
//    timer.stop();
//  });
 //  Форматирование времени
function addLeadingZero(value) {
   return String(value).padStart(2, '0');
}

 //отрисовка таймера

function updateClockface ({ days, hours, minutes, seconds }) {
   refs.timerDays.textContent = `${days}`;
   refs.timerHours.textContent = `${hours}`;
   refs.timerMinutes.textContent = `${minutes}`;
   refs.timerSeconds.textContent = `${seconds}`;
}

// // Для подсчета значений используй готовую функцию convertMs, где ms - разница между конечной и текущей датой в миллисекундах.
function convertMs(ms) {

   const second = 1000;
   const minute = second * 60;
   const hour = minute * 60;
   const day = hour * 24;
   
   const days = addLeadingZero(Math.floor(ms / day));
   const hours = addLeadingZero(Math.floor((ms % day) / hour));
   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
   const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

   return { days, hours, minutes, seconds };
}