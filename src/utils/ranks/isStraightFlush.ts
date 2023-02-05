import { Hand } from '../../types';
import { CARDS_SEQUENCE_PATTERN } from '../config'
import getUniqKingAndColourFromHand from '../getUniqKingAndColourFromHand';
import getSquenceByPatttern from '../sequence'

export default function isStraightFlush(hand: Hand): boolean {
  const { uniqColour, kind } = getUniqKingAndColourFromHand(hand);
  const sequenceLength = getSquenceByPatttern(kind.join(''), CARDS_SEQUENCE_PATTERN);
  return uniqColour.length === 1 && sequenceLength === 5;
}