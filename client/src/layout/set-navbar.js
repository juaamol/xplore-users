import { createNavbarComponent } from "../components/navbar/navbar";
import { setUsers } from "./set-users";

export function setNavBar(query) {
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