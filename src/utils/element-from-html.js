export function createElementFromHTML(htmlString) {
    const div = document.createElement('div');
    div.innerHTML = htmlString;

    return div;
}