import { createShowMoreComponent } from "../components/show-more/show-more";
import { setUsers } from "./set-users";

export function setShowMore(query) {
    document.querySelector('#layout-more').appendChild(
      createShowMoreComponent({
        onClick: () => {
          query.page = query.page + 1;
          setUsers(query, true);
        }
      })
    );
  }