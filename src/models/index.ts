export type Flake = {
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

export type AudioFile = HTMLAudioElement;
export type Picture = HTMLImageElement;