import getInitialHand from './getInitialHand';

describe('getInitialHand', () => {
  it('should return correct initial hand and rest of the deck', () => {
    const line = 'TH KD QS JC 9C TS KH KD QD JD 9S';
    const expectedResult = {
      initialHand: ['TH', 'KD', 'QS', 'JC', '9C'],
      restOfTheDeck: ['TS', 'KH', 'KD', 'QD', 'JD', '9S']
    };
    expect(getInitialHand(line)).toEqual(expectedResult);
  });
});



