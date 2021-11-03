import { createUserCardComponent } from '../user-card/user-card';

export function createCardsListComponent(cardsList) {
    const list = cardsList || [];
    const emptyListElement = document.createElement('div');

    emptyListElement.setAttribute('id', 'cards-list');
    emptyListElement.classList.add(
        'card-deck',
        'justify-content-center',
        'mx-3'
    );

    const listElement = list.reduce((accumulatorElement, user) => {
        accumulatorElement.appendChild(createUserCardComponent(user));

        return accumulatorElement;
    }, emptyListElement);

    return listElement;
}