export type Hand = [string, string, string, string, string];

export interface InitialHand {
  initialHand: string[];
  restOfTheDeck: string[]
}

export interface UniqHandAndColor {
  kind: string[];
  colour: string[];
  uniqKind: string[];
  uniqColour: string[];
}

export interface GameResult {
  bestScore: number;
  cardsToDiscard: string[];
  winningHand: string[];
}