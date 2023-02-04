import isFourOfAkind from "./isFourOfAkind";

describe('four of a kind', () => {
  it('should return true if hand have four different kinds of cards', () => {
    const hand = '9C 9S 9D 9H JH';
    expect(isFourOfAkind(hand.split(' '))).toBe(true)
  });
  it('should return false when confused with higher rank of 8', () => {
    const hand = '3C 3S 3D 6C 6H';
    expect(isFourOfAkind(hand.split(' '))).toBe(false)
  });
  it('should return true for non sequenced cards', () => {
    const hand = '2H 2S 3H 2C 2D';
    expect(isFourOfAkind(hand.split(' '))).toBe(true);
  });
});