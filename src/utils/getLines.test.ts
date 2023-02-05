import { getLines } from './getLines';

describe('getInitialHand', () => {
  test("returns an array of strings split by line break", () => {
    const input = "first line\nsecond line\nthird line";
    const expectedOutput = ["first line", "second line", "third line"];
    expect(getLines(input)).toEqual(expectedOutput);
  });

  test("trims leading whitespace from each line", () => {
    const input = "  first line\n    second line\n  third line";
    const expectedOutput = ["first line", "second line", "third line"];
    expect(getLines(input)).toEqual(expectedOutput);
  });

  test("ignores empty lines", () => {
    const input = "first line\n\nsecond line\n\n\nthird line";
    const expectedOutput = ["first line", "second line", "third line"];
    expect(getLines(input)).toEqual(expectedOutput);
  });

  test("returns an empty array for an empty string", () => {
    expect(getLines("")).toEqual([]);
  });
});