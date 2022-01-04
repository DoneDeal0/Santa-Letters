export function playAudio(audio: HTMLAudioElement, timeout: number = 2000) {
  audio.play();
  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, timeout);
}
