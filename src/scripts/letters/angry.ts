import { Letter } from "./index";
import { canvasGame } from "../canvas/index";
import { pain } from "../data/audio";
import { HEIGHT, WIDTH } from "../data/index";
import { angryLetterImg } from "../data/images";
import { playAudio } from "../engine/audio";
import { isCollision } from "../engine/collision";
import { score, updateScore } from "../global-state";
import { ILetter, ISanta } from "../../models/index";
import { scoreBox } from "../score/index";

class AngryLetter extends Letter {
  constructor(x: number, y: number, width: number, height: number) {
    super(x, y, width, height);
  }
  draw() {
    if (score > 0) {
      this.y += 1;
    }
    if (this.y > HEIGHT && this.caught === false) {
      this.y = -500;
    }
    canvasGame.drawImage(
      angryLetterImg,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

const fillAngryLetters = () =>
  [...Array(3)].map(
    (_, i) =>
      new AngryLetter(Math.floor(Math.random() * WIDTH), i * -600, 50, 50)
  );

export let angryLetters: ILetter[] = fillAngryLetters();

export const refillAngryLetters = () => {
  angryLetters = fillAngryLetters();
};

export function drawAngryLetters(score: number, santa: ISanta) {
  angryLetters.forEach((letter) => {
    letter.draw();
    if (!letter.caught && isCollision(santa, letter)) {
      updateScore(score - 3);
      letter.caught = true;
      santa.flash();
      scoreBox.flash();
      playAudio(pain);
    }
  });
}
