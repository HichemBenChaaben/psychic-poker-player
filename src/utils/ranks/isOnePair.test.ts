import isOnePair from "./isOnePair";

describe('isOnePair()', () => {
  it('should return true for one pair', () => {
    const hand = '4H 4S KS JD 5S';
    expect(isOnePair(hand.split(' '))).toBe(true);
  });
  it('should return false for another type of hand', () => {
    const hand = '2D 2S 2C KS 6H';
    expect(isOnePair(hand.split(' '))).toBe(false);
  });
})