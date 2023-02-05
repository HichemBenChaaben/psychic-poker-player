import { Hand } from "../../types";
import isStraightFlush from "./isStraightFlush";

describe('isStraightFlush()', () => {
  it('should return true for five consetive cards in a hand', () => {
    const input = 'QH JH TH 9H 8H';
    const hand = input.split(' ') as Hand;
    expect(isStraightFlush(hand)).toBe(true);
  });
  it('should not care about the order', () => {
    const input = 'QH 8H TH 9H JH';
    const hand = input.split(' ') as Hand;
    expect(isStraightFlush(hand)).toBe(true);
  });
  it('should handle A in the beginning', () => {
    const input = 'AH KH QH JH TH';
    const hand = input.split(' ') as Hand;
    expect(isStraightFlush(hand)).toBe(true);
  });
});