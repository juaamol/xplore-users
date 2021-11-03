import usersService from '../services/users';
import { createCardsListComponent } from '../components/cards-list/cards-list';
import { setAlertLoadingError, setAlertNoMoreData, setAlertNotFound } from './set-alert';

const PAGE_SIZE = 8;

export async function setUsers(query, append = false) {
  const layoutUsersElement = document.querySelector('#layout-users')

  try {
    const users = await usersService.getUsers(
      query.page,
      query.sortBy,
      query.name,
    );

    append
      ? layoutUsersElement.appendChild(createCardsListComponent(users))
      : layoutUsersElement.replaceChildren(createCardsListComponent(users));

    if (query.page === 0 && users.length === 0) {
      layoutUsersElement.innerHTML = '';
      setAlertNotFound();
    } else if (users.length < PAGE_SIZE) {
      setAlertNoMoreData();
    }
  } catch (error) {
    setAlertLoadingError();
  }
}