import { hasPair } from "../checkPairs";
import getUniqKingAndColourFromHand from "../getUniqKingAndColourFromHand";

export default function isOnePair(hand: string[]): boolean {
  const { kind } = getUniqKingAndColourFromHand(hand);
  // a hand that contains three cards of one rank;
  // and two cards of two other ranks (the kickers),
  // such as 2♦ 2♠ 2♣ K♠ 6♥
  const arrToString = kind.join('');
  return (hasPair(arrToString));
}