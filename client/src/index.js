import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { setNavBar } from './layout/set-navbar';
import { setShowMore } from './layout/set-show-more';
import { setSortBy } from './layout/set-sort-by';
import { setUsers } from './layout/set-users';
import './style.css';


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
