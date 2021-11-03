import { createElementFromHTML } from '../../utils/element-from-html';
import sortHtml from './sort.html';

export function createSortComponent(handlers) {
    const sort = createElementFromHTML(sortHtml);

    if (handlers?.onByNameClick) {
        const byNameButton = sort.querySelector('#by-name');

        byNameButton.addEventListener('click', handlers.onByNameClick);
    }

    if (handlers?.onByScoreClick) {
        const byScoreButton = sort.querySelector('#by-score');

        byScoreButton.addEventListener('click', handlers.onByScoreClick);
    }

    return sort;
}

