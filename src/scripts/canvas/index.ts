import { HEIGHT, WIDTH } from "../data";

const skyNode: HTMLCanvasElement = document.querySelector("#sky");
skyNode.width = WIDTH;
skyNode.height = HEIGHT;
const canvasSky = skyNode.getContext("2d");

const gameNode: HTMLCanvasElement = document.querySelector("#game");
gameNode.width = WIDTH;
gameNode.height = HEIGHT;
const canvasGame = gameNode.getContext("2d");

export { canvasSky, canvasGame };
