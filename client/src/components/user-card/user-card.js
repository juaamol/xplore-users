import { createElementFromHTML } from '../../utils/element-from-html';
import userCardHtml from './user-card.html';
import './user-card.css';

export function createUserCardComponent(userSource) {
    const user = userSource || {};
    const card = createElementFromHTML(userCardHtml);
    card.classList.add('card', 'card-size');

    card.setAttribute('data-id', user.id)
    card.querySelector('[data-id="image"]')
        .setAttribute('src', user.avatarUrl);
    card.querySelector('[data-id="name"]').innerHTML = user.name;
    card.querySelector('[data-id="birthday"]').innerHTML = user.birthday;
    card.querySelector('[data-id="score"]').innerHTML = user.score;

    return card;
}

