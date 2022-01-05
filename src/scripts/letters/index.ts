import { canvasGame } from "canvas/index";
import { HEIGHT, WIDTH } from "data/index";
import { bell } from "data/audio";
import { letterImg, letterCatch } from "data/images";
import { playAudio } from "engine/audio";
import { isCollision } from "engine/collision";
import { score, updateScore } from "../global-state";
import { ILetter, ISanta } from "models/index";
import { scoreBox } from "score/index";

export class Letter {
  x: number;
  y: number;
  width: number;
  height: number;
  caught: boolean;
  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.caught = false;
  }
  draw() {
    if (score > 0) {
      this.y += 1;
    }
    if (this.y > HEIGHT && !this.caught) {
      this.y = -500;
      updateScore(score - 1);
    }
    canvasGame.drawImage(letterImg, this.x, this.y, this.width, this.height);
  }
}

function createLetter(xPosition: number = 0) {
  return new Letter(Math.floor(Math.random() * WIDTH), xPosition, 50, 50);
}

const fillLetters = () => [...Array(10)].map((_, i) => createLetter(i * -200));

export let letters: ILetter[] = fillLetters();

export const refillLetters = () => {
  letters = fillLetters();
};

export function drawLetters(score: number, santa: ISanta) {
  letters.forEach((letter) => {
    letter.draw();
    if (!letter.caught && isCollision(santa, letter)) {
      updateScore(score + 1);
      letter.caught = true;
      letterHit.x = letter.x;
      letterHit.y = letter.y;
      letterHit.draw();
      if (score === 10 || score === 15) {
        scoreBox.zoom();
      }
      letters.push(createLetter());
      playAudio(bell);
    }
  });
  letters = letters.filter((letter) => !letter.caught);
}

export const letterHit = {
  x: 500,
  y: 500,
  width: 150,
  height: 150,
  spriteX: 0,
  spriteY: 103,
  draw() {
    canvasGame.drawImage(
      letterCatch,
      this.spriteX,
      this.spriteY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
    setInterval(() => {
      letterHit.spriteX += 128;
      if (letterHit.spriteX === 640) {
        letterHit.spriteX = 0;
      }
    }, 1000);
  },
};
