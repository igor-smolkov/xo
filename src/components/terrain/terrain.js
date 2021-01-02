import './terrain.scss'
import coast from '../coast/coast'
import rand from '../math/rand'

export default function() {
  const terrainElement = document.querySelector('.terrain');
  terrainElement.style.height = rand(1000, 10000)+'%';

  coast();
}

