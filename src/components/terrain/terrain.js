import './terrain.scss'
import rand from '../math/rand'
import Coasts from '../coast/coast';

export default class Terrain {
  constructor() {
    this.element = document.querySelector('.terrain');
    this.containerElement = document.querySelector('.terrain__container');
    this.element.style.height = rand(1000, 10000)+'%';
    this.coasts = new Coasts();
  }
  unblock() {
    this.containerElement.classList.toggle('terrain__container_blocked');
  }
}

