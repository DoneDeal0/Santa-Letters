// @ts-nocheck
import { AudioFile } from "models/index";
const bellSound = new URL("../../assets/audio/santa-bell.mp3", import.meta.url);
const goodBoySound = new URL("../../assets/audio/santa-goodboy.mp3", import.meta.url);
const laughSound = new URL("../../assets/audio/santa-laugh.mp3", import.meta.url);
const laughLowSound = new URL("../../assets/audio/santa-lowlaugh.mp3", import.meta.url);
const merrySound = new URL("../../assets/audio/santa-merry.mp3", import.meta.url);
const painSound = new URL("../../assets/audio/santa-pain.mp3", import.meta.url);
const themeSound = new URL("../../assets/audio/santa-loop.mp3", import.meta.url);

const bell: AudioFile = new Audio(bellSound);
const goodBoy: AudioFile = new Audio(goodBoySound);
const laugh: AudioFile = new Audio(laughSound);
const laughLow: AudioFile = new Audio(laughLowSound);
const merry: AudioFile = new Audio(merrySound);
const pain: AudioFile = new Audio(painSound);
const theme: AudioFile = new Audio(themeSound);
goodBoy.volume = 0.5;
laugh.volume = 0.3;
laughLow.volume = 0.3;
merry.volume = 0.6;
pain.volume = 0.4;
theme.volume = 0.3;
theme.loop = true;

export { bell, goodBoy, laugh, laughLow, merry, pain, theme };
