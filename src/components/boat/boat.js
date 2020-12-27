import './boat.scss'

export default class Boat {
  constructor(props) {
    this.food = props.food;
  }

  mealTime() {
    this.food -= 10;
  }
  addFood(value) {
    this.food += value;
  }
}

// export default function(props) {
//   return new Boat(props)
// }