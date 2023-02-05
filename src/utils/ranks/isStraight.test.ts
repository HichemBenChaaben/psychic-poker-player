import { Hand } from "../../types";
import isStraight from "./isStraight";
describe('isStraight()', () => {
  it('should return true for five consetive cards in a hand', () => {
    const input = '7C 6S 5S 4H 3H';
    const hand = input.split(' ') as Hand;
    expect(isStraight(hand)).toBe(true);
  });
  it('should return false for no consecutive cards', () => {
    const input = '7C AS 9S 4H TH';
    const hand = input.split(' ') as Hand;
    expect(isStraight(hand)).toBe(false);
  });
  it('should return sequence no matter the cards order', () => {
    const input = '7C 3S 5S 4H 6H';
    const hand = input.split(' ') as Hand;
    expect(isStraight(hand)).toBe(true);
  });
});