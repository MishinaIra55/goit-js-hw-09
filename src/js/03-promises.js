import Notiflix from 'notiflix'; //подключила библиотеку

const form = document.querySelector('.form'); //достучалась до формы

// console.log(form);
form.addEventListener('submit', OnSubmitAction); //навешала слушателя

//логика увеличения delay на step
function OnSubmitAction(event) {
  event.preventDefault();

  const amount = document.querySelector('input[name = "amount"]').value;
  const delay = document.querySelector('input[name = "delay"]').value;
  const step = document.querySelector('input[name = "step"]').value;

  for (let i = 1; i <= amount; i += 1) {
    let numberdelay = Number(delay);
    let numberstep = Number(step);

    setTimeout(() => {
      console.log(i, numberdelay, numberstep);

      setTimeout(() => {
        createPromise(i, numberdelay + numberstep * i)
          .then(onSuccess)
          .catch(onError);
      }, numberdelay);
    }, numberstep);

    form.reset();
  }
}

function onError(data) {
  Notiflix.Notify.failure(data);
}

function onSuccess(data) {
  Notiflix.Notify.success(data);
}

//создание промиса
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
