import './boat.scss'

export default class Boat {
  constructor(props) {
    this.element = document.querySelector('.boat');
    this.food = props.food;
    this.special = 0;
    this.isSplash = false;
  }

  mealTime() {
    this.food -= 10;

    const splashSoundElement = this.element.querySelector('.boat__meal-sound');
    splashSoundElement.volume = 0.05;
    splashSoundElement.play();

    if (this.food <= 0) {
      this.food = 0;
      return false;
    }
    return true;
  }
  addFood(value) {
    this.food += value;
  }
  addSpecial(value) {
    this.special += value;
  }
  splashing(splash = false) {
    if(splash) {
      this.isSplash = splash;
      this.element.classList.add('boat_water-effect');
      
      const splashSoundElement = this.element.querySelector('.boat__splash-sound');
      splashSoundElement.volume = 0.2;
      splashSoundElement.play();
    } else {
      this.isSplash = !splash;
      this.element.classList.remove('boat_water-effect');
    }
  }
}