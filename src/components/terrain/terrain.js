import './terrain.scss'
import rand from '../math/rand'
import Coasts from '../coast/coast';

export default class Terrain {
  constructor() {
    this.element = document.querySelector('.terrain');
    this.containerElement = document.querySelector('.terrain__container');
    this.length = rand(200, 300);
    this.setHeight(this.length);
    this.coasts = new Coasts();
  }
  unblock() {
    this.containerElement.classList.toggle('terrain__container_blocked');
  }
  setHeight(height) {
    this.length = height;
    this.element.style.height = this.length+'%';
  }
  addHeight(value) {
    this.length += value;
    this.setHeight(this.length);
    this.coasts.addCoasts();
  }
}

