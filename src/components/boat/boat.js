import './boat.scss'

export default class Boat {
  constructor(props) {
    this.element = document.querySelector('.boat');
    this.food = props.food;
    this.isSplash = false;
  }

  mealTime() {
    this.food -= 10;
    if (this.food <= 0) {
      this.food = 0;
      return false;
    }
    return true;
  }
  addFood(value) {
    this.food += value;
  }
  splashing(duration = 300) {
    if (duration !== true && duration !== false) {
      if (!this.isSplash) {
        this.isSplash = true;
        this.element.classList.toggle('boat_water-effect');
        setTimeout((e = this.element)=>{
          e.classList.toggle('boat_water-effect');
          this.isSplash = false;
        }, duration);
      }
      console.log('scroll-splash')
    } else {
      this.isSplash = duration;
      this.element.classList.toggle('boat_water-effect');
      console.log('touch-splash')
    }

    if (duration !== false) {
      const splashSoundElement = this.element.querySelector('.boat__splash-sound');
      splashSoundElement.volume = 0.2;
      splashSoundElement.play();
    }
  }
}