import { InitialHand } from "../types";

export default function getInitialHand(line: string): InitialHand {
  return ({
    initialHand: line.split(' ').slice(0, 5),
    restOfTheDeck: line.split(' ').slice(-5)
  })
}