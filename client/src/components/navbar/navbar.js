import { createElementFromHTML } from '../../utils/element-from-html';
import navbarHtml from './navbar.html';

export function createNavbarComponent() {
    const navbar = createElementFromHTML(navbarHtml);
    return navbar;
}

