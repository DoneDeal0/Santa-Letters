// @ts-nocheck
import { AudioFile } from "../../models/index";
const bellSound = new URL("../../assets/audio/santa-bell.mp3", import.meta.url);
const laughSound = new URL(
  "../../assets/audio/santa-laugh.mp3",
  import.meta.url
);
const laughLowSound = new URL(
  "../../assets/audio/santa-lowlaugh.mp3",
  import.meta.url
);
const goodBoySound = new URL(
  "../../assets/audio/santa-goodboy.mp3",
  import.meta.url
);
const merrySound = new URL(
  "../../assets/audio/santa-merry.mp3",
  import.meta.url
);
const painSound = new URL("../../assets/audio/santa-pain.mp3", import.meta.url);
const themeSound = new URL(
  "../../assets/audio/santa-loop.mp3",
  import.meta.url
);

const laugh: AudioFile = new Audio(laughSound);
const laughLow: AudioFile = new Audio(laughLowSound);
const goodBoy: AudioFile = new Audio(goodBoySound);
const merry: AudioFile = new Audio(merrySound);
const bell: AudioFile = new Audio(bellSound);
const pain: AudioFile = new Audio(painSound);
const theme: AudioFile = new Audio(themeSound);
theme.volume = 0.3;
pain.volume = 0.4;
laugh.volume = 0.3;
goodBoy.volume = 0.5;
merry.volume = 0.6;
laughLow.volume = 0.3;

export { theme, laugh, laughLow, goodBoy, merry, bell, pain };
