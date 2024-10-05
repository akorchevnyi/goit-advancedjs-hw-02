export const refs = {
  timeInput: document.querySelector('#datetime-picker'),
  startBtn : document.querySelector('button[data-start]'),
  days     : document.querySelector('[data-days]'),
  hours    : document.querySelector('[data-hours]'),
  minutes  : document.querySelector('[data-minutes]'),
  seconds  : document.querySelector('[data-seconds]'),
  delay    : document.querySelector('[name="delay"]'),
  fulfilled: document.querySelector('[value="fulfilled"]'),
  rejected : document.querySelector('[value="rejected"]'),
  submit   : document.querySelector('[type="submit"]'),
};