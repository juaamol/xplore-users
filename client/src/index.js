import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createCardsListComponent } from './components/cards-list/cards-list';
import { createNavbarComponent } from './components/navbar/navbar';
import { createSortComponent } from './components/sort/sort';
import usersService from './services/users';
import './style.css';


async function setComponents() {
  document.body
    .appendChild(createNavbarComponent())
    .appendChild(createSortComponent());

  try {
    const users = await usersService.getUsers();
    document.body.appendChild(createCardsListComponent(users));

  } catch (error) {
    const errorElement = document.createElement('div');

    errorElement.innerText = `Error loading the users: ${error}`;
    document.body.appendChild(errorElement);
  }
}

setComponents();
