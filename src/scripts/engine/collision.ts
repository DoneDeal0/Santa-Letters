import { ILetter, ISanta } from "../../models/index";

export function isCollision(santa: ISanta, letter: ILetter): boolean {
  return (
    santa.y + santa.height >= letter.y &&
    santa.y <= letter.y + letter.height &&
    santa.x + santa.width >= letter.x &&
    santa.x <= letter.x + letter.width
  );
}
