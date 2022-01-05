import { canvasGame } from "canvas/index";
import { HEIGHT, WIDTH } from "data/index";
import { snowImg } from "data/images";
import { ISnow } from "models/index";

export const snow: ISnow = {
  x: 0,
  y: HEIGHT - 235,
  width: WIDTH,
  height: 300,
  draw() {
    canvasGame.drawImage(snowImg, this.x, this.y, this.width, this.height);
  },
};
