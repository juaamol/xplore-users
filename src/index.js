import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createNavbarComponent } from './components/navbar/navbar';
import './style.css';


function setComponents() {
  document.body.appendChild(createNavbarComponent());
}

setComponents();
