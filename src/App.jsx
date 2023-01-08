import { useEffect, useState } from 'react';
import './App.css';
import Die from './components/Die';
import { nanoid } from 'nanoid';

/**
 * Challenge: Check the dice array for these winning conditions:
 * 1. All dice are held, and
 * 2. all dice have the same value
 *
 * If both conditions are true, set `tenzies` to true and log
 * "You won!" to the console
 */

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allValuesEqual = dice.every((die) => die.value === firstValue);
    if (allHeld && allValuesEqual) {
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
    setDice((oldDice) => {
      console.log(oldDice);
      return oldDice.map((die) => {
        return die.isHeld ? { ...die } : generateNewDie();
      });
    });
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
    <div className="App text-center flex justify-center items-center ">
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
            Roll
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
