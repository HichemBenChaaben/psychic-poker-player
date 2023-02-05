import hasRepeatedLetters from "./hasRepeatedLetters";

describe('hasRepeated letters ', () => {
  test("Returns true for [A, A, B, B], 2", () => {
    expect(hasRepeatedLetters(["A", "A", "B", "B"], 2)).toBe(true);
  });

  test("Returns false for [A, A, B, B], 3", () => {
    expect(hasRepeatedLetters(["A", "A", "B", "B"], 3)).toBe(false);
  });

  test("Returns true for [A, A, A, B], 3", () => {
    expect(hasRepeatedLetters(["A", "A", "A", "B"], 3)).toBe(true);
  });

  test("Returns false for [A, A, A, B], 4", () => {
    expect(hasRepeatedLetters(["A", "A", "A", "B"], 4)).toBe(false);
  });

  test("Returns false for [], 3", () => {
    expect(hasRepeatedLetters([], 3)).toBe(false);
  });

})