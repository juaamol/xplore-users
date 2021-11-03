import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createAlertComponent } from './components/alert/alert';
import { createCardsListComponent } from './components/cards-list/cards-list';
import { createNavbarComponent } from './components/navbar/navbar';
import { createShowMoreComponent } from './components/show-more/show-more';
import { createSortComponent } from './components/sort/sort';
import usersService from './services/users';
import './style.css';


function setNavBar(query) {
  document.querySelector('#layout-navbar').appendChild(
    createNavbarComponent({
      onType: (typed) => {
        query.name = typed;
        query.page = 0;
        setUsers(query);
      }
    })
  )
}

function setSortBy(query) {
  document.querySelector('#layout-sort-by').appendChild(
    createSortComponent({
      onByNameClick: () => {
        query.sortBy = 'name';
        query.page = 0;
        setUsers(query);
      },
      onByScoreClick: () => {
        query.sortBy = 'score';
        query.page = 0;
        setUsers(query);
      }
    })
  );
}

function setShowMore(query) {
  document.querySelector('#layout-more').appendChild(
    createShowMoreComponent({
      onClick: () => {
        query.page = query.page + 1;
        setUsers(query, true);
      }
    })
  );
}

async function setUsers(query, append = false) {
  const layoutUsersElement = document.querySelector('#layout-users')
  const layoutAlerstElement = document.querySelector('#layout-alerts')

  try {
    const users = await usersService.getUsers(
      query.page,
      query.sortBy,
      query.name,
    );

    if (users?.length) {
      if (append) {
        layoutUsersElement.appendChild(createCardsListComponent(users));
      } else {
        layoutUsersElement.replaceChildren(createCardsListComponent(users));
      }
    }

    if (query.page === 0 && users?.length === 0) {
      layoutUsersElement.innerHTML = '';
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
        'danger'
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
  setShowMore(query);
}

setComponents();
