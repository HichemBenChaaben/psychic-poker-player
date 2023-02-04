import { getLines } from "./getLines";
import { getBestScoreByLine } from './getBestScoreByLine';
import SCORE from "./config";
import getInitialHand from "./getInitialHand";

const getFormattedMessage = (line: string, bestScore: number, cardsToDiscard: string[], winningHand: string[]) => {
  const { initialHand, restOfTheDeck } = getInitialHand(line);
  return {
    // @ts-ignore
    message: `HAND: ${initialHand} Deck: ${restOfTheDeck} ${SCORE[bestScore] as any}`,
    cardsToDiscard,
    winningHand,
  }
}

export default function startGame(str: string): string[] {
  const inputLines = getLines(str);
  let message = [] as any[];
  inputLines.map((line, index) => {
    const { bestScore, cardsToDiscard, winningHand } = getBestScoreByLine(line);
    message[index] = getFormattedMessage(line, bestScore, cardsToDiscard, winningHand);
  })
  return message;
}