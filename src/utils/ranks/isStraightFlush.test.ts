import isStraightFlush from "./isStraightFlush";

describe('isStraightFlush()', () => {
  it('should return true for five consetive cards in a hand', () => {
    const hand = 'QH JH TH 9H 8H';
    expect(isStraightFlush(hand.split(' '))).toBe(true);
  });
  it('should not care about the order', () => {
    const hand = 'QH 8H TH 9H JH';
    expect(isStraightFlush(hand.split(' '))).toBe(true);
  });
  it('should handle A in the beginning', () => {
    const hand = 'AH KH QH JH TH';
    expect(isStraightFlush(hand.split(' '))).toBe(true);
  });
});