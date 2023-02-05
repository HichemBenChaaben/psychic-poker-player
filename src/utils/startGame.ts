import { getLines } from "./getLines";
import { getBestScoreByLine } from './getBestScoreByLine';
import SCORE from "./config";
import getInitialHand from "./getInitialHand";

const getFormattedMessage = (line: string, bestScore: number, cardsToDiscard: string[], winningHand: string[]) => {
  const { initialHand, restOfTheDeck } = getInitialHand(line);
  return ({
    message: `HAND: ${initialHand} Deck: ${restOfTheDeck} ${SCORE[bestScore]}`,
    cardsToDiscard,
    winningHand,
  })
}

export default function startGame(str: string): any[] {
  const inputLines = getLines(str);
  return inputLines.map((line) => {
    const { bestScore, cardsToDiscard, winningHand } = getBestScoreByLine(line);
    return getFormattedMessage(line, bestScore, cardsToDiscard, winningHand);
  });
}