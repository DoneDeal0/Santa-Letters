export type AudioFile = HTMLAudioElement;

export type IFlake = {
  x: number;
  y: number;
  radius: number;
  density: number;
};

export type ILetter = {
  x: number;
  y: number;
  width: number;
  height: number;
  caught: boolean;
  draw: () => void;
};

export type Picture = HTMLImageElement;

export type ISanta = {
  x: number;
  y: number;
  width: number;
  height: number;
  spriteX: number;
  spriteY: number;
  visible: boolean;
  image: HTMLImageElement;
  draw: () => void;
  stopWalk: () => void;
  walk: () => void;
  flash: () => void;
  reset: () => void;
  stopFlash: () => void;
};

export type IScore = {
  visible: boolean;
  zoom: () => void;
  flash: () => void;
  stopFlash: () => void;
  update: (score:number) => void;
};

export type ISnow = {
  x: number;
  y: number;
  width: number;
  height: number;
  draw: () => void;
};

