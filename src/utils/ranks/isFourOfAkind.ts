import getUniqKingAndColourFromHand from "../getUniqKingAndColourFromHand";
import hasRepeatedLetters from "./hasRepeatedLetters";

export default function isFourOfAkind(hand: string[]): boolean {
  // also known as quads, is a hand that contains;
  // four cards of one rank and one card of another rank (the kicker),
  // such as 9♣ 9♠ 9♦ 9♥ J♥
  const { uniqKind, uniqColour, kind } = getUniqKingAndColourFromHand(hand);

  // in a hand of 5 cards
  // 4 cards of the same rank
  if (uniqKind.length === 2 && uniqColour.length == 4 && hasRepeatedLetters(kind, 4)) {
    return true;
  }
  return false;
}