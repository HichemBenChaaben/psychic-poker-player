import getSquenceByPatttern from "./sequence";
import { CARDS_SEQUENCE_PATTERN } from './config';

describe(' the sequence fun', () => {
  it("should return the number of characters of a squence", () => {
    const input = '9TJQK';
    const result = getSquenceByPatttern(input, CARDS_SEQUENCE_PATTERN);
    expect(result).toBe(5);
  });
  it('should return 0 when there are no sequence in any direction', () => {
    const input = '2572J';
    const res = getSquenceByPatttern(input, CARDS_SEQUENCE_PATTERN);
    expect(res).toBe(0);
  });
  it('should not care about the order', () => {
    const input = '89TJQ';
    const res = getSquenceByPatttern(input, CARDS_SEQUENCE_PATTERN);
    expect(res).toBe(5);
  });
  it('should return the sequence for characters in random order', () => {
    const input = '73546';
    const res = getSquenceByPatttern(input, CARDS_SEQUENCE_PATTERN);
    expect(res).toBe(5);
  });
  it('should handle A in the beginning of a hand', () => {
    const input = 'AKQJT';
    const res = getSquenceByPatttern(input, CARDS_SEQUENCE_PATTERN);
    expect(res).toBe(5);
  })
});
