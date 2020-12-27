import './game.scss'
import Boat from '../boat/boat'
import terrain from '../terrain/terrain'

const gameElement = document.querySelector('.game')
const logElement = gameElement.querySelector('.game__log')

const boat = new Boat({food: 100});

let moves = 0;
let distance = 0;

gameElement.addEventListener('scroll', (e)=>{
  distance = e.target.scrollTop / 100;
  if ((e.target.scrollHeight - e.target.scrollTop)<=e.target.clientHeight){
    gameWin();
  }
  if (distance % 1 === 0) {
    moves++;
    showInfo();
    if (moves % 5 === 0) {
      boat.mealTime();
      if (boat.food < 0) {
        boat.food = 0;
        gameOver();
      }
    }
  }
}, true);

gameElement.addEventListener('click', (e)=>{
  if (e.target.classList.contains('coast__bend_fooded')){
    e.target.style.backgroundColor = 'yellowgreen';
    const plus = Math.ceil((e.target.offsetWidth / 100) * (e.target.offsetHeight / 100));
    boat.addFood(plus);
    showInfo(plus);
  }
}, true);

terrain();

function gameOver() {
  alert('вы померли с голоду')
}
function gameWin() {
  alert('вы победили')
}

function showInfo(plus) {
  logElement.innerText = moves + ' ход\n';
  logElement.innerText += distance + ' м\n';
  logElement.innerText += boat.food + ' еды';
  if (plus) {
    logElement.innerText += '\n+ ' + plus;
  }
}

setInterval(showInfo, 500);