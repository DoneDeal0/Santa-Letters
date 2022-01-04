import { HEIGHT, WIDTH } from "../data/index";
import { snowImg } from "../data/images";
import { canvasGame } from "./index";

export const snow = {
  x: 0,
  y: HEIGHT - 235,
  width: WIDTH,
  height: 300,
  image: snowImg,
  draw() {
    canvasGame.drawImage(this.image, this.x, this.y, this.width, this.height);
  },
};
