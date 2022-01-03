import { canvasSky } from ".";
import { WIDTH, HEIGHT, MAX_FLAKES, FLOOR_HEIGHT } from "../data";
import { Flake } from "../../models";

const flakes: Flake[] = [...Array(MAX_FLAKES)].map((_) => ({
  x: Math.random() * WIDTH,
  y: Math.random() * HEIGHT,
  radius: Math.random() * 5 + 2, // a flake can't be bigger than 7px and smaller than 2px.
  density: Math.random() + 1, // bigger the density, quicker the flake reaches the ground.
}));

let angle = 0;

function moveFlakes() {
  angle += 0.01;
  flakes.forEach((flake, i) => {
    (flake.y += Math.pow(flake.density, 2) + 1),
      (flake.x += Math.sin(angle) * 2);
    if (flake.y > HEIGHT - FLOOR_HEIGHT) {
      flakes[i] = {
        x: Math.random() * WIDTH,
        y: 0,
        radius: flake.radius,
        density: flake.density,
      };
    }
  });
}

function drawFlakes() {
  canvasSky.clearRect(0, 0, WIDTH, HEIGHT);
  canvasSky.fillStyle = "white";
  canvasSky.beginPath();
  flakes.forEach((flake) => {
    canvasSky.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2, true);
    canvasSky.moveTo(flake.x, flake.y); // place the flakes to it x,y coordinates.
  });
  canvasSky.fill();
  moveFlakes();
}

export function animateSky() {
  setInterval(drawFlakes, 25);
}
