import Observer from 'fontfaceobserver';

import './fonts.css';

const bokka = new Observer('Bokka');

bokka.load().then(() => {
  document.documentElement.classList.add('bokka-font-loaded');
});
