import getCombinations from "../lib/getCombinations";
import { GameResult } from "../types";
import getHandRanking from "./getHandRanking";
import getInitialHand from "./getInitialHand";

export function getBestScoreByLine(line: string): GameResult {
  const { initialHand, restOfTheDeck } = getInitialHand(line);
  const allCombos = [[], ...getCombinations(initialHand, 0)];
  let bestScore = 1;
  let cardsToDiscard = [] as string[];
  let winningHand = [];

  for (let i = 0; i < allCombos.length; i++) {
    const cardsToDitch = allCombos[i];
    const pulledCards = restOfTheDeck.slice(0, 5 - cardsToDitch.length);
    const merged = [...cardsToDitch, ...pulledCards];
    const newScore = getHandRanking(merged.join(' '));
    if (newScore > bestScore) {
      bestScore = newScore;
      cardsToDiscard = initialHand.filter((x: string) => !allCombos[i].includes(x));
      winningHand = merged;
    }
  }
  return { bestScore, cardsToDiscard, winningHand };
}
