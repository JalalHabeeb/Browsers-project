import { COUNT_DOWN } from '../constants.js';
import { nextQuestion } from '../pages/questionPage.js';

const paragraphEl = document.createElement('p');
paragraphEl.textContent = '00 : 30';
paragraphEl.setAttribute('id', COUNT_DOWN);
document.body.appendChild(paragraphEl);

/*countdown start */
let time = 30;

const countdownEl = document.getElementById(COUNT_DOWN);
const Countdown = () => {
  
  if (time === -1) {
    nextQuestion();
    time = 30;
  } else {
    countdownEl.innerHTML = '00 : ' + time;
    time--;
  }
};

export const startCountdown = () => { setInterval(Countdown, 1000) }
clearInterval(startCountdown)
/*countdown end */
