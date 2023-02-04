function getDupes(str: string) {
  return str.match(/(.)\1+/g);
}

function checkDuplicatedCharactersLength(str: string, numDuplicates: number): boolean {
  return getDupes(str)?.some(str => str.length === numDuplicates) || false;
}

export function hasPair(str: string): boolean {
  return checkDuplicatedCharactersLength(str, 2);
}