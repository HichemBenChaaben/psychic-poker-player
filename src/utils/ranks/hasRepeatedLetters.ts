export default function hasRepeatedLetters(hand: string[], n: number): boolean {
    const str = hand.sort().join('') || '';
    const repetitions = str.match(/(.)\1+/g);
    return repetitions && repetitions[0]?.length === n ? true : false;
}