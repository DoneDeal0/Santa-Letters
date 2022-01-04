import { initControls } from "./engine/controls";
import { playGame } from "./canvas/game";
import { animateSky } from "./canvas/sky";
import { theme } from "./data/audio";

const start = document.querySelector<HTMLElement>("#start");

start.onclick = () => {
  start.style.display = "none";
  theme
    .play()
    .then(() => {
      animateSky();
      initControls();
      playGame();
    })
    .catch((_) => alert("An error occured"));
};
