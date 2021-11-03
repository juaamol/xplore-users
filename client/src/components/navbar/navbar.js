import { createElementFromHTML } from '../../utils/element-from-html';
import navbarHtml from './navbar.html';

export function createNavbarComponent(handlers) {
    const navbar = createElementFromHTML(navbarHtml);

    if (handlers?.onType) {
        const input = navbar.querySelector('#search-input');

        input.addEventListener('input', function (event) {
            handlers.onType(event.target.value);
        });
    }

    return navbar;
}

