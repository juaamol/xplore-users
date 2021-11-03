import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createAlertComponent } from './components/alert/alert';
import { createCardsListComponent } from './components/cards-list/cards-list';
import { createNavbarComponent } from './components/navbar/navbar';
import { createSortComponent } from './components/sort/sort';
import usersService from './services/users';
import './style.css';


function setNavBar(query) {
  document.querySelector('#layout-navbar')
    .appendChild(createNavbarComponent({
      onType: (typed) => {
        query.name = typed;
        setUsers(query);
      }
    }))
}

function setSortBy(query) {
  document.querySelector('#layout-sort-by')
    .appendChild(createSortComponent({
      onByNameClick: () => {
        query.sortBy = 'name';
        setUsers(query);
      },
      onByScoreClick: () => {
        query.sortBy = 'score';
        setUsers(query);
      }
    }));
}

async function setUsers(query) {
  const layoutUsersElement = document.querySelector('#layout-users')
  const layoutAlerstElement = document.querySelector('#layout-alerts')

  try {
    const users = await usersService.getUsers(
      query.page,
      query.sortBy,
      query.name,
    );

    if (users?.length) {
      layoutUsersElement.replaceChildren(createCardsListComponent(users));
    } else {
      layoutAlerstElement.replaceChildren(
        createAlertComponent(
          'There are no users that match the criteria',
          'warning'
        )
      );
    }


  } catch (error) {
    layoutAlerstElement.replaceChildren(
      createAlertComponent(
        `Error: ${error}`,
        'warning'
      )
    );
  }
}

async function setComponents() {

  const query = {
    name: '',
    page: 0,
    sortBy: 'name',
  };

  setNavBar(query);
  setSortBy(query);
  setUsers(query);
}

setComponents();
