function sortByCustomPattern(arr: string[], order: string) {
  return arr.sort(function (a: string, b: string): number {
    return order.indexOf(a.slice(0, 4)) - order.indexOf(b.slice(0, 4));
  });
}

export default function getSquenceByPatttern(str: string, pattern: string): number {
  const sortedString = sortByCustomPattern(str.split(''), pattern);
  // @ts-ignore
  const uniqKindsFromSorted = [...new Set(sortedString)];
  let charsInSeq = 1;
  for (let i = 0; i < uniqKindsFromSorted.length - 1; i++) {
    const nextChatIndex = pattern.indexOf(uniqKindsFromSorted[i]);
    if (uniqKindsFromSorted[i + 1] === pattern[nextChatIndex + 1]) {
      charsInSeq++;
    } else {
      charsInSeq = 0;
    }
  }

  // recalculate the sequence for trailing position of A's
  // an A card can be in the end or beginning of a sequence
  // example AH 2H 3H or QH KH AH
  if (uniqKindsFromSorted[0] === 'A') {
    let newSortedString = [];
    uniqKindsFromSorted.shift();
    newSortedString = uniqKindsFromSorted;
    newSortedString.push('A');
    let newSeq = 1;
    for (let i = 0; i < newSortedString.length - 1; i++) {
      const nextChatIndex = pattern.indexOf(newSortedString[i]);
      if (newSortedString[i + 1] === pattern[nextChatIndex + 1]) {
        newSeq++;
      } else {
        newSeq = 0;
      }
    }
    if (newSeq > charsInSeq) {
      return newSeq;
    }
  }

  return charsInSeq;
}