import { Hand } from "../../types";
import isOnePair from "./isOnePair";

describe('isOnePair()', () => {
  it('should return true for one pair', () => {
    const input = '4H 4S KS JD 5S';
    const hand = input.split(' ') as Hand;
    expect(isOnePair(hand)).toBe(true);
  });
  it('should return false for another type of hand', () => {
    const input = '2D 2S 2C KS 6H';
    const hand = input.split(' ') as Hand;
    expect(isOnePair(hand)).toBe(false);
  });
})