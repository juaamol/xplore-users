import { createElementFromHTML } from '../../utils/element-from-html';
import alertHtml from './alert.html';

export function createAlertComponent(text, type) {
    const alert = createElementFromHTML(alertHtml);
    const alertContainer = alert.querySelector('#alert-container');
    const textElement = alert.querySelector('#alert-text');

    textElement.innerHTML = text;

    if (type == 'warning') {
        alertContainer.classList.add('alert-warning')
    }

    if (type == 'danger') {
        alertContainer.classList.add('alert-danger')
    }

    return alert;
}