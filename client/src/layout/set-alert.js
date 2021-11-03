import { createAlertComponent } from "../components/alert/alert";

export function setAlertNotFound() {
  const layoutAlerstElement = document.querySelector('#layout-alerts')

  layoutAlerstElement.replaceChildren(
    createAlertComponent(
      'There are no users that match the criteria',
      'warning'
    )
  );
}

export function setAlertLoadingError() {
  const layoutAlerstElement = document.querySelector('#layout-alerts')

  layoutAlerstElement.replaceChildren(createAlertComponent(error, 'danger'));
}

export function setAlertNoMoreData() {
  const layoutAlerstElement = document.querySelector('#layout-alerts')

  layoutAlerstElement.replaceChildren(
    createAlertComponent('You have retrieved all data', 'primary')
  );
}