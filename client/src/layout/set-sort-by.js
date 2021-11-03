import { createSortComponent } from "../components/sort/sort";
import { setUsers } from "./set-users";

export function setSortBy(query) {
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