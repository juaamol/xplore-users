import './show-more.css';

export function createShowMoreComponent(handlers) {
    const showMoreButton = document.createElement('div');
    showMoreButton.innerText = 'Show more';

    showMoreButton.classList.add(
        'text-primary',
        'text-center',
        'w-100',
        'py-3',
        'show-more'
    );

    if (handlers?.onClick) {
        showMoreButton.addEventListener('click', handlers.onClick)
    }

    return showMoreButton;
}