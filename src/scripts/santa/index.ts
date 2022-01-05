import { canvasGame } from "../canvas/index";
import { santaImg } from "../data/images";
import { HEIGHT } from "../data/index";
import { ISanta } from "../../models/index";

let flashInterval: NodeJS.Timeout = null;
let walkInterval: NodeJS.Timeout = null;

export const santa: ISanta = {
  x: 300,
  y: HEIGHT - 223,
  width: 150,
  height: 150,
  spriteX: 0,
  spriteY: 450,
  image: santaImg,
  visible: true,
  draw() {
    if (this.visible) {
      canvasGame.drawImage(
        this.image,
        this.spriteX,
        this.spriteY,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
  },

  flash() {
    let count = 0;
    flashInterval = setInterval(() => {
      this.visible = !this.visible;
      count++;
      if (count === 6) {
        clearInterval(flashInterval);
        this.visible = true;
      }
    }, 150);
  },

  stopFlash() {
    clearInterval(flashInterval);
    this.visible = true;
  },

  stopWalk() {
    clearInterval(walkInterval);
    walkInterval = null;
    this.spriteX = 0;
    this.spriteY = 450;
  },

  reset() {
    this.x = 300;
    this.y = HEIGHT - 223;
    flashInterval = null;
    this.stopWalk();
  },

  walk() {
    if (walkInterval) {
      return null;
    }
    walkInterval = setInterval(() => {
      this.spriteX += 150;
      if (this.spriteX === 600) {
        this.spriteX = 0;
        this.spriteY += 150;
        if (this.spriteY === 600) {
          this.spriteY = 0;
        }
      }
    }, 75);
  },
};
