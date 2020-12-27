import './coast.scss'
import rand from '../math/rand'

export default function() {
  const coastElement = document.querySelector('.coast');

  let sumBendsHeight = 0;
  while (sumBendsHeight < coastElement.offsetHeight) {
    const bendElement = createBend();
    coastElement.append(bendElement);
    sumBendsHeight += bendElement.offsetHeight;
  }

  function createBend() {
    const randWidth = rand(10, 300);
    const randHeight = rand(10, 300);
    const bendElement = document.createElement('div');
    bendElement.classList.add('coast__bend');
    bendElement.style.width = randWidth+'px';
    bendElement.style.left = -randWidth+'px';
    bendElement.style.height = randHeight+'px';

    if(rand(1,10) === 1) {
      bendElement.classList.add('coast__bend_fooded');
      bendElement.style.backgroundColor = 'yellow';
    }

    return bendElement;
  }
}

