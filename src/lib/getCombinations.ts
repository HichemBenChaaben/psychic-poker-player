var combinations = require('combinations');

/**
 * Get possible combination of an array of items and a number
 * example ['a','b', 'c'] -> ['a'] or ['a', 'b'] or ['a', 'b', 'c']
 * this function doesn't account for empty array
 */
export default function getCombinations(str: string[], min: number): string[] | any[] {
  return combinations(str, min);
}