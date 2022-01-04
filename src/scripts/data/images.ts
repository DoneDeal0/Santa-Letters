import { Picture } from "../../models/index";

const angryLetterImg: Picture = new Image();
angryLetterImg.src = require("../../assets/images/angryletter.png");

const gameoverImg: Picture = new Image();
gameoverImg.src = require("../../assets/images/gameover.jpg");

const letterCatch: Picture = new Image();
letterCatch.src = require("../../assets/sprites/spritecatch.png");

const letterImg: Picture = new Image();
letterImg.src = require("../../assets/images/letter.png");

const santaImg: Picture = new Image();
santaImg.src = require("../../assets/sprites/santasprite.jpg");

const santaReverse: Picture = new Image();
santaReverse.src = require("../../assets/sprites/santaspriteReverse.png");

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
