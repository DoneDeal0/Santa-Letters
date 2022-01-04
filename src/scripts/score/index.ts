import { COUNTER_RADIUSES, COLORS, WIDTH } from "../data";
import { updateScoreRadius, radius } from "../global-state";
import { laughLow, laugh, goodBoy, merry } from "../data/audio";
import { canvasGame } from "../canvas";

let zoomInterval: NodeJS.Timeout = null;

export let scoreBox = {
  flashInterval: null,
  visible: true,

  scoreZoom() {
    let count = 0;
    zoomInterval = setInterval(() => {
      updateScoreRadius(COUNTER_RADIUSES[count]);
      count++;
      if (count === COUNTER_RADIUSES.length) {
        clearInterval(zoomInterval);
      }
    }, 50);
  },

  scoreClick() {
    let count = 0;
    this.flashInterval = setInterval(() => {
      scoreBox.visible = !scoreBox.visible;
      count++;
      if (count === 6) {
        clearInterval(scoreBox.flashInterval);
        scoreBox.visible = true;
      }
    }, 150);
  },

  update(score: number) {
    if (this.visible) {
      canvasGame.beginPath();
      canvasGame.arc(WIDTH - 115, 120, radius, 0, 2 * Math.PI);
      canvasGame.lineWidth = 6;
      canvasGame.stroke();
      canvasGame.font = "bold 70px monospace";
      canvasGame.fillStyle = COLORS.WHITE;
      canvasGame.textAlign = "center";
      canvasGame.textBaseline = "middle";
      canvasGame.fillText(score.toString(), WIDTH - 115, 120);
      canvasGame.strokeStyle = getScoreColor(score);
      playAudioBasedOnScore(score);
      canvasGame.closePath();
    }
  },
};

export function getScoreColor(score: number) {
  if (score > 15) return COLORS.GREEN;
  if (score >= 10) return COLORS.SOFT_GREEN;
  if (score > 5) return COLORS.WHITE;
  return COLORS.RED;
}

export function playAudioBasedOnScore(score: number) {
  if (score <= 0) {
    laughLow.play();
    setTimeout(() => {
      laughLow.pause();
      laughLow.currentTime = 0;
    }, 2000);
  }
  if (score === 10) {
    laugh.play();
    setTimeout(() => {
      laugh.pause();
      laugh.currentTime = 0;
    }, 2000);
  }
  if (score === 15) {
    goodBoy.play();
    setTimeout(() => {
      goodBoy.pause();
      goodBoy.currentTime = 0;
    }, 2500);
  }
  if (score === 20) {
    merry.play();
    setTimeout(() => {
      merry.pause();
      merry.currentTime = 0;
    }, 2000);
  }
}
