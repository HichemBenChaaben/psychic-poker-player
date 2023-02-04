import React from 'react';
import './App.css';
import CardHelper from './components/CardHelper';
import ResultLine from './components/ResultLine';
import { GameResult } from './types';
import startGame from './utils/startGame';

const gameInput = `
TH JH QC QD QS QH KH AH 2S 6S
2H 2S 3H 3S 3C 2D 3D 6C 9C TH
2H 2S 3H 3S 3C 2D 9C 3D 6C TH
2H AD 5H AC 7H AH 6H 9H 4H 3C
AC 2D 9C 3S KD 5S 4D KS AS 4C
KS AH 2H 3C 4H KC 2C TC 2D AS
AH 2C 9S AD 3C QH KS JS JD KD
6C 9C 8C 2D 7C 2H TC 4C 9S AH
3D 5S 2H QD TD 6S KH 9H AD QH`;

function App() {
  const [result, setResult] = React.useState<GameResult[] | any[]>([]);

  const playGame = () => {
    const gameResult = startGame(gameInput);
    setResult(gameResult);
  }
  const resetGame = () => {
    setResult([])
  }
  return (
    <div className="App">
      <h1>The Psychic A♥ A♦ A♣ A♠</h1>
      <div>
        <div className="form">
          <div className="form-elements">
            <textarea id="game-input" readOnly value={gameInput} cols={28} rows={9} />
            <br />
            <div>
              <button onClick={() => playGame()}>Start game</button>
              <button onClick={() => resetGame()}>Reset</button>
            </div>
          </div>
        </div>
      </div>
      {result.length > 0 && <h2>Game results</h2>}
      {result.map((result, index) => {
        return (
          <ResultLine key={`game-result-${index}`}>
            <div>{result.message}</div>
            {result.cardsToDiscard.length > 0 && (
              <>
                <div>Card(s) to discard from hand: {result.cardsToDiscard.map((card: string, index: number) => <CardHelper key={`helper-${index}`} name={card} />)}</div>
                <div>Winning hand {result.winningHand.map((card: string, index: number) => <CardHelper key={`winning-helper-${index}`} name={card} />)}</div>
              </>
            )}
          </ResultLine>
        )
      })}
    </div >
  );
}

export default App;
