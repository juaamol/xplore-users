import { createElementFromHTML } from '../../utils/element-from-html';
import sortHtml from './sort.html';

export function createSortComponent() {
    const sort = createElementFromHTML(sortHtml);
    return sort;
}

