import { playGame } from "canvas/game";
import { animateSky } from "canvas/sky";
import { theme } from "data/audio";
import { initControls } from "engine/controls";

const startScreen = document.querySelector<HTMLElement>("#start-screen");
const start = document.querySelector<HTMLElement>("#start-button");

start.onclick = () => {
  startScreen.remove();
  theme
    .play()
    .then(() => {
      animateSky();
      initControls();
      playGame();
    })
    .catch((_) => alert("An error occured"));
};
