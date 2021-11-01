import 'bootstrap';
import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

async function getComponent() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  const { default: _ } = await import('lodash');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.classList.add('ml-2');
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});