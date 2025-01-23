import { Runner } from './resources/dino_game/offline.js';

window.addEventListener('load', () => {
  const trexGameContainer = document.querySelector('.trex-game');
  const runner = new Runner(trexGameContainer);

  //   On keypress 'F' enable Arcade mode
  document.addEventListener('keydown', event => {
    if (event.key === 'f') {
      runner.setArcadeMode();
    }
  });
});
