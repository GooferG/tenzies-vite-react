import { useEffect, useState } from 'react';
import './App.css';
import Die from './components/Die';
import { nanoid } from 'nanoid';

import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

/**
 * 1) Track number of rolls
 * 2) How long did it take to win?
 * 3) Save the best time in local storage
 */

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log('You won!');
    }
  }, [dice]);

  function generateNewDie() {
    return { value: Math.ceil(Math.random() * 6), isHeld: false, id: nanoid() };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function rollDice() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      setTenzies(false);
      setDice(allNewDice());
    }
  }

  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <main className="App text-center flex justify-center items-center ">
      {tenzies && <Confetti width={width} height={height} />}
      <div className="container w-[360px] bg-[#0b2434] ">
        <div className="game-container py-10 px-5 bg-[#f5f5f5] m-5 rounded-md ">
          <h1 className="text-[24px] font-medium">Tenzies</h1>
          <p className="game-description text-sm">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
          <div className="dice-container grid grid-cols-5 m-5 gap-y-5 gap-x-3 pointer">
            {diceElements}
          </div>
          <button
            onClick={rollDice}
            className="bg-[#5035FF] text-white rounded-md font-semibold w-[100px] h-[50px] border-none hover:shadow-inner shadow-lg"
          >
            {tenzies ? 'New Game' : 'Roll'}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
