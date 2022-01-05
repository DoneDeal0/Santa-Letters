import { Picture } from "models/index";

const angryLetterImg: Picture = new Image();
angryLetterImg.src = require("../../assets/images/angry-letter.png");

const gameoverImg: Picture = new Image();
gameoverImg.src = require("../../assets/images/game-over.jpg");

const letterCatch: Picture = new Image();
letterCatch.src = require("../../assets/sprites/letter-catch-sprite.png");

const letterImg: Picture = new Image();
letterImg.src = require("../../assets/images/letter.png");

const santaImg: Picture = new Image();
santaImg.src = require("../../assets/sprites/santa-sprite.jpg");

const santaReverse: Picture = new Image();
santaReverse.src = require("../../assets/sprites/santa-sprite-reverse.png");

const snowImg: Picture = new Image();
snowImg.src = require("../../assets/images/snow.png");

const winImg: Picture = new Image();
winImg.src = require("../../assets/images/win.jpg");

export {
  angryLetterImg,
  gameoverImg,
  letterImg,
  letterCatch,
  santaImg,
  santaReverse,
  snowImg,
  winImg,
};
