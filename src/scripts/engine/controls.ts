import { score, updateScore } from "../global-state";
import { santa } from "../santa";
import { santaReverse, santaImg } from "../data/images";
import { fillAngryLetters } from "../letters/angry";
import { fillLetters } from "../letters";

export function initControls() {
  document.onkeydown = (event) => {
    switch (event.keyCode) {
      case 13: //ENTER
        restart();
        break;
    }
    if (score >= 20 || score <= 0) {
      return null;
    }
    santa.startWalking();
    switch (event.keyCode) {
      case 37: // ARROW LEFT
        santa.image = santaReverse;
        santa.x -= 20;
        break;
      case 39: // ARROW RIGHT
        santa.image = santaImg;
        santa.x += 20;
        break;
    }
  };
  document.onkeyup = () => {
    santa.stopWalking();
  };
}

function restart() {
  updateScore(8);
  santa.restart();
  fillAngryLetters();
  fillLetters();
}
