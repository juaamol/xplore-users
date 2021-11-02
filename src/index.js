import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createCardsListComponent } from './components/cards-list/cards-list';
import { createNavbarComponent } from './components/navbar/navbar';
import { createSortComponent } from './components/sort/sort';
import './style.css';


function setComponents() {
  document.body
    .appendChild(createNavbarComponent())
    .appendChild(createSortComponent())
    .appendChild(createCardsListComponent([
      {
        id: 1,
        name: 'User 1',
        birthday: '10-10-1990',
        score: 1111,
        avatarUrl: 'https://robohash.org/1'
      },
      {
        id: 2,
        name: 'User 2',
        birthday: '10-10-1990',
        score: 2222,
        avatarUrl: 'https://robohash.org/2'
      }
    ]));
}

setComponents();
