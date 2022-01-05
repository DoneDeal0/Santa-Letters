import { canvasGame } from "../canvas/index";
import { laughLow, laugh, goodBoy, merry } from "../data/audio";
import { COUNTER_RADIUSES, COLORS, WIDTH } from "../data/index";
import { playAudio } from "../engine/audio";
import { updateScoreRadius, radius } from "../global-state";
import { IScore } from "../../models/index";

let zoomInterval: NodeJS.Timeout = null;
let flashInterval: NodeJS.Timeout = null;

export let scoreBox: IScore = {
  visible: true,
  zoom() {
    let count = 0;
    zoomInterval = setInterval(() => {
      updateScoreRadius(COUNTER_RADIUSES[count]);
      count++;
      if (count === COUNTER_RADIUSES.length) {
        clearInterval(zoomInterval);
      }
    }, 50);
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
    flashInterval = null;
    this.visible = true;
  },

  update(score: number) {
    if (this.visible) {
      canvasGame.beginPath();
      canvasGame.arc(WIDTH - 115, 120, radius, 0, 2 * Math.PI);
      canvasGame.lineWidth = 6;
      canvasGame.stroke();
      canvasGame.font = "bold 70px sans-serif";
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
    playAudio(laughLow);
  }
  if (score === 10) {
    playAudio(laugh);
  }
  if (score === 15) {
    playAudio(goodBoy, 2500);
  }
  if (score === 20) {
    playAudio(merry);
  }
}
