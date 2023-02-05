import { Hand } from "../../types";
import getUniqKingAndColourFromHand from "../getUniqKingAndColourFromHand";
import hasRepeatedLetters from "./hasRepeatedLetters";

export default function isThreeOfaKind(hand: Hand): boolean {
  const { kind } = getUniqKingAndColourFromHand(hand);
  // a hand that contains three cards of one rank;
  // and two cards of two other ranks (the kickers),
  // such as 2♦ 2♠ 2♣ K♠ 6♥
  return hasRepeatedLetters(kind, 3)
}