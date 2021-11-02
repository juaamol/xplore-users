import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createNavbarComponent } from './components/navbar/navbar';
import { createSortComponent } from './components/sort/sort';
import './style.css';


function setComponents() {
  document.body
    .appendChild(createNavbarComponent())
    .appendChild(createSortComponent());
}

setComponents();
