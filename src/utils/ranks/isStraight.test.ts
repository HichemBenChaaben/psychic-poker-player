import isStraight from "./isStraight";
describe('isStraight()', () => {
  it('should return true for five consetive cards in a hand', () => {
    const hand = '7C 6S 5S 4H 3H';
    expect(isStraight(hand.split(' '))).toBe(true);
  });
  it('should return false for no consecutive cards', () => {
    const hand = '7C AS 9S 4H TH';
    expect(isStraight(hand.split(' '))).toBe(false);
  });
  it('should return sequence no matter the cards order', () => {
    const hand = '7C 3S 5S 4H 6H';
    expect(isStraight(hand.split(' '))).toBe(true);
  });
});