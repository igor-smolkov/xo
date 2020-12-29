import './coast.scss'
import rand from '../math/rand'

export default function() {
  const coastElements = document.querySelectorAll('.coast');

  coastElements.forEach((coastElement, index) => {
    let sumBendsHeight = 0;
    while (sumBendsHeight < coastElement.offsetHeight) {
      const bendElement = index === 0 ? createBend(coastElement.offsetWidth) : createBend();
      coastElement.append(bendElement);
      sumBendsHeight += bendElement.offsetHeight;
    }
  })
  
  function createBend(shift = 0) {
    const randWidth = rand(10, 300);
    const randHeight = rand(10, 300);
    const bendElement = document.createElement('div');
    bendElement.classList.add('coast__bend');
    bendElement.style.width = randWidth+'px';
    bendElement.style.left = shift !== 0 ? shift+'px' : -randWidth+'px';
    bendElement.style.height = randHeight+'px';

    if(rand(1,10) === 1) {
      bendElement.classList.add('coast__bend_fooded');
      bendElement.addEventListener('click', (e)=>{
        e.target.classList.remove('coast__bend_fooded');
      })
      // bendElement.style.backgroundColor = 'yellow';
    }

    return bendElement;
  }
}

