const form = document.querySelector('form');
form.addEventListener('submit', (event) => submitAction(event));




function createPromise(position, delay) {
    return  new Promise((resolve, reject) => {
      // console.log(delay);
      
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
        } else {
          reject(`❌ Rejected promise ${position} in ${delay}ms`);
        }
  }
    )};
    
    function submitAction(event){
      event.preventDefault();
    
      const amount = document.querySelector('input[name = "amount"]').value;
      const delay = document.querySelector('input[name = "delay"]').value;
      const step = document.querySelector('input[name = "step"]').value;
      
    
      for(let i = 1; i <= amount; i++) {
        console.log('help');
        
          createPromise(i, delay).then((resolve) => {
            console.log('result => ', resolve);
          }).catch((reject) => {
            console.log('result => ', reject);
          })
        
        
      }
    };


// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });