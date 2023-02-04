import { UniqHandAndColor } from "../types";

export default function getUniqKingAndColourFromHand(hand: string[]): UniqHandAndColor {
  const kind = hand.map((str: string) => str.slice(0, 1));
  const colour = hand.map((str: string) => str.slice(-1));
  return ({
    kind,
    colour,
    // @ts-ignore
    uniqKind: [...new Set(kind)],
    // @ts-ignore
    uniqColour: [... new Set(colour)]
  })
}