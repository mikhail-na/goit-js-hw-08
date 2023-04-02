import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form ');
const KEY = 'feedback-form-state';


form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(KEY)) || {};
const { email, message } = form.elements;
reloadPage();

function onInputData() {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem(KEY, JSON.stringify(dataForm));
};

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
};

function onFormSubmit(event) {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert("Будь ласка, заповніть УСІ обов'язкові поля.");
  }

  localStorage.removeItem(KEY);
  event.currentTarget.reset();
  dataForm = {};
};