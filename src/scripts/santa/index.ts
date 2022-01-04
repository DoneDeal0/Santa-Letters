import { santaImg } from "../data/images";
import { canvasGame } from "../canvas/index";
import { HEIGHT } from "../data/index";

export const santa = {
  x: 300,
  y: HEIGHT - 223,
  width: 150,
  height: 150,
  spriteX: 0,
  spriteY: 450,
  image: santaImg,
  walkInterval: null,
  flashInterval: null,
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
  stopWalking() {
    clearInterval(this.walkInterval);
    this.walkInterval = null;
    this.spriteX = 0;
    this.spriteY = 450;
  },

  startWalking() {
    if (this.walkInterval) {
      return null;
    }
    this.walkInterval = setInterval(() => {
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

  santaClick() {
    let count = 0;
    this.flashInterval = setInterval(() => {
      this.visible = !this.visible;
      count++;
      if (count === 6) {
        clearInterval(this.flashInterval);
        this.visible = true;
      }
    }, 150);
  },

  restart() {
    this.x = 300;
    this.y = HEIGHT - 223;
    this.stopWalking();
  },
};
