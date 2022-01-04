import { santaReverse, santaImg } from "../data/images";
import { score, updateScore } from "../global-state";
import { refillAngryLetters } from "../letters/angry";
import { refillLetters } from "../letters/index";
import { santa } from "../santa/index";

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
    santa.walk();
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
    santa.stopWalk();
  };
}

function restart() {
  updateScore(8);
  santa.reset();
  refillAngryLetters();
  refillLetters();
}
