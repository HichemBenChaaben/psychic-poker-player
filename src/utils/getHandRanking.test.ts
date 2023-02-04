import getHandRanking from './getHandRanking';

describe('getHandRanking()', () => {
  it('should return 10 for five of a kind', () => {
    const expected = 10;
    const line = '3H 3S 3D 3C 3C';
    expect(getHandRanking(line)).toBe(expected);
  });

  it('should return 9 for straigh fluch', () => {
    const expected = 9;
    const line = 'QH JH TH 9H 8H';
    expect(getHandRanking(line)).toBe(expected);
  });

  it('should return 9 for straight flush', () => {
    const expected = 9;
    const line = 'AH KH QH JH TH';
    expect(getHandRanking(line)).toBe(expected);
  });

  it('should return 8 as four of a kind', () => {
    const expected = 8;
    const line = '9S 9D 9H 9C JD';
    expect(getHandRanking(line)).toBe(expected);
  });

  it('should return 7 for full house', () => {
    const expected = 7;
    const line = '3C 3S 3D 6C 6H';
    expect(getHandRanking(line)).toBe(expected);
  });

  it('should return 6 for flush', () => {
    const expected = 6;
    const line = 'KC 10C 7C 6C 4C';
    expect(getHandRanking(line)).toBe(expected);
  });
  it('should return 5 for straight', () => {
    const expected = 5;
    const line = '7C 6S 5S 4H 3H';
    expect(getHandRanking(line)).toBe(expected);
  });
  it('should return 4 for three of a kind', () => {
    const expected = 4;
    const line = '2D 2S 2C KS 6H';
    expect(getHandRanking(line)).toBe(expected);
  });
  it('should return 3 for two pair', () => {
    const expected = 3;
    const line = 'JH JC 4C 4S 9H';
    expect(getHandRanking(line)).toBe(expected);
  });
  it('should return 2 as one pair', () => {
    const expected = 2;
    const line = '4S 4S KS 10D 5S';
    expect(getHandRanking(line)).toBe(expected);
  });
  it('should return 1 for any other hand', () => {
    const expected = 1;
    const line = 'KH JH 8C 7D 4S';
    expect(getHandRanking(line)).toBe(expected);
  });
});