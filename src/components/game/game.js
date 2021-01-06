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
    this.isScrollStart = false;
    this.scrollEndTimer = null;
    this.scrollStartTime = 0;
    this.scrollCurrentTime = 0;
    this.scrollCurrentInterval = 0;
    this.scrollIntervalAverage = 0;
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
      this.catchingMovement(event);
      this.scrollStart();
      this.distance =  event.target.scrollTop / 100;

      clearTimeout(this.scrollEndTimer);
      this.scrollEndTimer = setTimeout(this.scrollEnd.bind(this), 300)

      if ((event.target.scrollHeight - event.target.scrollTop)<=event.target.clientHeight) { 
        this.terrain.addHeight(500);
      }
      // if ((event.target.scrollHeight - event.target.scrollTop)<=event.target.clientHeight) { this.gameWin(); } //win
    }
  }
  scrollStart() {
    if (!this.isScrollStart) {
      this.scrollCurrentTime = new Date().getTime();
      this.scrollStartTime = this.scrollCurrentTime;
      this.isScrollStart = true;
      this.boat.splashing(true);
      this.move();
    }
  }
  scrollMove() {
    if (this.isScrollStart) {
      this.boat.splashing(false);
      this.boat.splashing(true);
      this.move();
    }
  }
  scrollEnd() {
    this.isScrollStart = false;
    this.boat.splashing(false);
  }
  catchingMovement(event) {
    if (this.scrollStart) {
      const currentTime = new Date().getTime();
      if (this.scrollIntervalAverage === 0) { this.scrollIntervalAverage = (currentTime - this.scrollCurrentTime) }
      if (((this.scrollCurrentInterval>this.scrollIntervalAverage-10)&&(this.scrollCurrentInterval<this.scrollIntervalAverage+10))
        &&((currentTime - this.scrollCurrentTime)>this.scrollIntervalAverage+10)) {
        if (((currentTime - this.scrollCurrentTime)>this.scrollIntervalAverage*2)
          &&((currentTime - this.scrollStartTime)>300)
          &&(!((event.target.scrollTop/100)<this.distance+0.5)&&((event.target.scrollTop/100)>this.distance-0.5))) {
          this.scrollMove();
        }
      } else {
        this.scrollIntervalAverage = (this.scrollIntervalAverage+(currentTime - this.scrollCurrentTime))/2;
      }
      this.scrollCurrentInterval = (currentTime - this.scrollCurrentTime);
      this.scrollCurrentTime = currentTime;
    }
  }
  move() {
    this.moves++;
    this.showInfo();

    if ((this.moves % 5 === 0) && !this.boat.mealTime()) { this.gameOver(); } //loss
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