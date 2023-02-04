import getUniqKingAndColourFromHand from './getUniqKingAndColourFromHand';
import isFourOfAkind from './ranks/isFourOfAkind';
import isThreeOfaKind from './ranks/isThreeOfAkind';
import isOnePair from './ranks/isOnePair';
import isFullHouse from './ranks/isFullHouse';
import isFlush from './ranks/isFlush';
import isFiveOfAKind from './ranks/isFiveOfAKind';
import isStraightFlush from './ranks/isStraightFlush';
import isStraight from './ranks/isStraight';
import isTwoPair from './ranks/isTwoPair';

export default function getHandRanking(input: string): number {
  const hand = input.split(' ');

  if (hand.length !== 5) {
    throw new Error('A hand should always have 5 cards');
  }

  const { uniqColour, uniqKind } = getUniqKingAndColourFromHand(hand);

  // five of a kind
  if (isFiveOfAKind(uniqKind)) {
    return 10;
  }

  /// straight flush
  if (isStraightFlush(hand)) {
    return 9;
  }

  // four of a kind
  if (isFourOfAkind(hand)) {
    return 8;
  }

  // full house
  if (isFullHouse(hand)) {
    return 7;
  }

  // flush
  if (isFlush(uniqColour)) {
    return 6;
  }

  // staight 7C 6S 5S 4H 3H
  if (isStraight(hand)) {
    return 5;
  }

  // is three of a kind
  if (isThreeOfaKind(hand)) {
    return 4;
  }

  // is two pair
  if (isTwoPair(uniqKind)) {
    return 3;
  }

  // one pair
  if (isOnePair(hand)) {
    return 2;
  }

  // highest card
  return 1;
}