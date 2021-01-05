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
  splashing(splash = false) {
    if(splash) {
      this.isSplash = splash;
      this.element.classList.add('boat_water-effect');
      console.log('add-splash')
      
      const splashSoundElement = this.element.querySelector('.boat__splash-sound');
      splashSoundElement.volume = 0.2;
      splashSoundElement.play();
    } else {
      this.isSplash = !splash;
      this.element.classList.remove('boat_water-effect');
      console.log('remove-splash')
    }
  }
}