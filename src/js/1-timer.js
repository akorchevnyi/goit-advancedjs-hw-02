import 'flatpickr/dist/flatpickr.min.css';
import '../css/styles.css';
import { refs } from '../constants/constants.js';
import flatpickr from 'flatpickr';
import convertMs from '../utils/convertMs.js';
import { Ukrainian } from 'flatpickr/dist/l10n/uk.js';
import addLeadingZero from '../utils/addLeadingZero.js';
import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';

let selectedDate;
const options = {
  enableTime     : true,
  time_24hr      : true,
  defaultDate    : new Date(),
  locale         : Ukrainian,
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      iziToast.warning({ message: 'Please choose a date in the future', position: 'topRight' });
      refs.startBtn.disabled = true;
      return;
    }

    refs.startBtn.disabled = false;
    selectedDate = selectedDates[0].getTime();
  },
};

refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click', handleStartClick);

flatpickr(refs.timeInput, options);



function handleStartClick() {
  refs.startBtn.disabled = true;
  refs.timeInput.disabled = true;

  const timerId = setInterval(() => {
    const now = new Date().getTime();
    const timeDifference = selectedDate - now;

    if (timeDifference < 0) {
      stopTimer(timerId);
      return;
    }

    const time = convertMs(timeDifference);
    addLeadingZero(time);

    changeDisplayedTime(time);
  }, 1000);
}


function stopTimer(timerId) {
  refs.startBtn.disabled = false;
  refs.timeInput.disabled = false;
  clearInterval(timerId);
}


function changeDisplayedTime(time) {
  for (const timeKey in time) {
    refs[timeKey].textContent = time[timeKey];
  }
}