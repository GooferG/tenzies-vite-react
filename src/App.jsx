import { useEffect, useState } from 'react';
import './App.css';
import Die from './components/Die';

function App() {
  const [dice, setDice] = useState(allNewDice());

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  function handleClick(e) {
    e.preventDefault();
    setDice(allNewDice());
  }

  console.log(dice);

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
            {dice.map((die) => (
              <Die value={die} />
            ))}
          </div>
          <button
            onClick={handleClick}
            className="bg-[#5035FF] text-white rounded-md font-semibold w-[92px] h-[35px]"
          >
            Roll
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
