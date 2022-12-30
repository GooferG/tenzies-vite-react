import { useState } from 'react';
import './App.css';
import Die from './components/Die';

function App() {
  const [count, setCount] = useState(0);

  const allNewDice = () => {
    const randomNumArr = [];
    for (let i = 0; i < 10; i++) {
      randomNumArr.push(Math.floor(Math.random() * 7));
    }
    console.log(randomNumArr);
  };

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
            <Die value="1" />
            <Die value="2" />
            <Die value="3" />
            <Die value="4" />
            <Die value="5" />
            <Die value="6" />
            <Die value="1" />
            <Die value="3" />
            <Die value="4" />
            <Die value="5" />
          </div>
          <button
            onClick={allNewDice}
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
