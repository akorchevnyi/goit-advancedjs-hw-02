import { refs } from '../constants/constants.js';
import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';

refs.submit.addEventListener('click', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const fulfilled = refs.fulfilled.checked;
  const rejected = refs.rejected.checked;
  if (!fulfilled && !rejected) {
    iziToast.warning({ message: 'Please select either fulfilled or rejected.', position: 'topRight' });
    return;
  }

  const delay = refs.delay.value;

  const promise = fulfilled => fulfilled
    ? Promise.resolve(`✅ Fulfilled promise in ${delay}ms`)
    : Promise.reject(`❌ Rejected promise in ${delay}ms`);

  promise(fulfilled)
    .then(message => setTimeout(() => showResolved(message), delay))
    .catch(message => setTimeout(() => showRejected(message), delay));
}


function showResolved(message) {
  iziToast.success({ message, position: 'topRight' });
}

function showRejected(message) {
  iziToast.error({ message, position: 'topRight' });
}