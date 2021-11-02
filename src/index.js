import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import navbar from './components/navbar/navbar.html';
import './style.css';

function setComponents() {
  document.body.appendChild(createNavbarComponent());
}

function createNavbarComponent() {
  return createElementFromHTML(navbar);
}

function createElementFromHTML(htmlString) {
  const div = document.createElement('div');
  div.innerHTML = htmlString

  return div;
}

setComponents();
