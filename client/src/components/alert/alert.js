import { createElementFromHTML } from '../../utils/element-from-html';
import alertHtml from './alert.html';

export function createAlertComponent(text, type) {
  const alert = createElementFromHTML(alertHtml);
  const alertContainer = alert.querySelector('#alert-container');
  const textElement = alert.querySelector('#alert-text');

  textElement.innerHTML = text;

  switch (type) {
    case 'warning': {
      alertContainer.classList.add('alert-warning');
      break;
    }
    case 'danger': {
      alertContainer.classList.add('alert-danger');
      break
    }
    default: {
      alertContainer.classList.add('alert-primary');
      break;
    }
  }

  return alert;
}