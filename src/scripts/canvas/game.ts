import { canvasGame } from ".";
import { snowImg, gameoverImg, winImg } from "../data/images";
import { HEIGHT, WIDTH, COLORS } from "../data";
import { score } from "../global-state";
import { scoreBox } from "../score";
import { drawLetters } from "../letters";
import { drawAngryLetters } from "../letters/angry";
import { santa } from "../santa";

const snow = {
  x: 0,
  y: HEIGHT - 235,
  width: WIDTH,
  height: 300,
  image: snowImg,
  draw() {
    canvasGame.drawImage(this.image, this.x, this.y, this.width, this.height);
  },
};

function drawGame() {
  canvasGame.fillStyle = COLORS.SKY_BLUE;
  canvasGame.fillRect(0, 0, WIDTH, HEIGHT);
  canvasGame.fillStyle = COLORS.SNOW_WHITE;
  canvasGame.fillRect(0, HEIGHT - 80, WIDTH, 210);
  santa.draw();
  scoreBox.update(score);
  snow.draw();

  if (score <= 0 || score >= 20) {
    const newWidth = HEIGHT * 0.64;
    canvasGame.drawImage(
      score < 20 ? gameoverImg : winImg,
      WIDTH / 2 - newWidth / 2,
      100,
      newWidth,
      HEIGHT * 0.7
    );
    canvasGame.font = "bold 25px monospace";
    canvasGame.fillText("PRESS ENTER TO PLAY AGAIN", WIDTH / 2, 70);
    return;
  }
  drawLetters(score, santa);
  drawAngryLetters(score, santa);
}

export function playGame() {
  canvasGame.clearRect(0, 0, WIDTH, HEIGHT);
  drawGame();
  requestAnimationFrame(() => playGame());
}
