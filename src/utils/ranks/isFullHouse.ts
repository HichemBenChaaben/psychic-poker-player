import { Hand } from "../../types";
import getUniqKingAndColourFromHand from "../getUniqKingAndColourFromHand";

export default function isFullHouse(hand: Hand): boolean {
  const { uniqKind, uniqColour } = getUniqKingAndColourFromHand(hand);
  // A full house, also known as a full boat or a tight or a boat
  // (and originally called a full hand), is a hand that contains;
  // three cards of one rank and two cards of another rank,
  // such as 3♣ 3♠ 3♦ 6♣ 6♥
  return (uniqKind.length === 2 && uniqColour.length >= 3);
}
