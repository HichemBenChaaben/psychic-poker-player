import { Hand } from "../../types";
import isFourOfAkind from "./isFourOfAkind";

describe('four of a kind', () => {
  it('should return true if hand have four different kinds of cards', () => {
    const input = '9C 9S 9D 9H JH';
    const hand = input.split(' ') as Hand;
    expect(isFourOfAkind(hand)).toBe(true)
  });
  it('should return false when confused with higher rank of 8', () => {
    const input = '3C 3S 3D 6C 6H';
    const hand = input.split(' ') as Hand;
    expect(isFourOfAkind(hand)).toBe(false)
  });
  it('should return true for non sequenced cards', () => {
    const input = '2H 2S 3H 2C 2D';
    const hand = input.split(' ') as Hand;
    expect(isFourOfAkind(hand)).toBe(true);
  });
});