import { Letter } from ".";
import { score } from "../global-state";
import { HEIGHT, WIDTH } from "../data";
import { angryLetterImg } from "../data/images";
import { canvasGame } from "../canvas";
import { ILetter } from "../../models";

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

export const fillAngryLetters = () =>
  [...Array(3)].map(
    (_, i) =>
      new AngryLetter(Math.floor(Math.random() * WIDTH), i * 600, 50, 50)
  );

export const angryLetters: ILetter[] = fillAngryLetters();

export function drawAngryLetters(score: number) {
  return null;
}
