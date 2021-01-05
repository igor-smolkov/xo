import './game.scss'
import Boat from '../boat/boat'
import Terrain from '../terrain/terrain'

export default class Game {
  constructor() {
    this.element = document.querySelector('.game');
    this.logElement = this.element.querySelector('.game__log');
    this.bgSoundElement = this.element.querySelector('.game__bg-sound');
    this.harvestSoundElement = document.querySelector('.game__harvest-sound');
    this.isStart = false;
    this.isTouchScreen = false;
    this.isScrollStart = false;
    this.isScrollMove = false;
    this.scrollEndTimer = null;
    this.scrollMoveTimer = null;
    this.moves = 0;
    this.distance = 0;
    this.boat = new Boat({food: 100});
    this.terrain = new Terrain();
    this.element.addEventListener('click', (event) => this.click(event), true);
    this.element.addEventListener('scroll', (event) => this.scroll(event), true);
    setInterval(this.showInfo.bind(this), 500);
  }
  init() {
    this.isStart = true;
    this.bgSoundElement.volume = 0.5;
    this.bgSoundElement.play();
    this.terrain.unblock();
  }
  click(event) {
    if (!this.isStart) {
      this.init();
    }
    if (event.target.classList.contains('coast__bend_fooded')){
      this.harvesting(event.target);
    }
  }
  scroll(event) {
    if (this.isStart) {
      this.scrollStart();
      this.distance =  event.target.scrollTop / 100;

      clearTimeout(this.scrollEndTimer);
      this.scrollEndTimer = setTimeout(this.scrollEnd.bind(this), 300)
      clearTimeout(this.scrollMoveTimer);
      this.scrollMoveTimer = setTimeout(this.scrollMove.bind(this), 30)
      console.log('scroll-check')

      if ((event.target.scrollHeight - event.target.scrollTop)<=event.target.clientHeight) { this.gameWin(); } //win
    }
  }
  scrollStart() {
    if (!this.isScrollStart) {
      this.isScrollStart = true;
      this.boat.splashing(true);
    }
  }
  scrollMove() {
    if (this.isScrollStart && !this.isScrollMove) {
      this.isScrollMove = true;
      this.moves++;
      this.showInfo();

      if ((this.moves % 5 === 0) && !this.boat.mealTime()) { this.gameOver(); } //loss
    }
  }
  scrollEnd() {
    this.isScrollStart = false;
    this.isScrollMove = false;
    this.boat.splashing(false);
    console.log('end-yes')
  }
  harvesting(element) {
    const plus = Math.ceil((element.offsetWidth / 100) * (element.offsetHeight / 100));
    this.boat.addFood(plus);
    this.showInfo(plus);

    this.harvestSoundElement.volume = 0.04;
    this.harvestSoundElement.play();
  }
  showInfo(plus = undefined) {
    this.logElement.innerText = this.moves + ' ход\n';
    this.logElement.innerText += this.distance + ' м\n';
    this.logElement.innerText += this.boat.food + ' еды';
    if (plus) {
      this.logElement.innerText += '\n+ ' + plus;
    }
  }
  gameOver() {
    alert('вы померли с голоду');
  }
  gameWin() {
    alert('вы победили')
  }
}