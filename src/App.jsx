import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App text-center">
      <div className="container w-[360px] h-[380px] bg-[#0b2434] flex items-center">
        <div className="game-container py-10 px-5 bg-[#f5f5f5] m-5 rounded-md ">
          <h1 className="text-[24px] font-medium">Tenzies</h1>
          <p className="game-description text-sm">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
          <div className="grid grid-cols-5 m-5 gap-y-3 gap-x-3">
            <div className="p-2 rounded-md bg-[#FFFFFF] drop-shadow-md hover:bg-[#59E391] font-medium text-xl">
              1
            </div>
            <div className="p-2 rounded-md bg-[#FFFFFF] drop-shadow-md hover:bg-[#59E391] font-medium text-xl">
              2
            </div>
            <div className="p-2 rounded-md bg-[#FFFFFF] drop-shadow-md hover:bg-[#59E391] font-medium text-xl">
              3
            </div>
            <div className="p-2 rounded-md bg-[#FFFFFF] drop-shadow-md hover:bg-[#59E391] font-medium text-xl">
              4
            </div>
            <div className="p-2 rounded-md bg-[#FFFFFF] drop-shadow-md hover:bg-[#59E391] font-medium text-xl">
              5
            </div>
            <div className="p-2 rounded-md bg-[#FFFFFF] drop-shadow-md hover:bg-[#59E391] font-medium text-xl">
              6
            </div>
            <div className="p-2 rounded-md bg-[#FFFFFF] drop-shadow-md hover:bg-[#59E391] font-medium text-xl">
              7
            </div>
            <div className="p-2 rounded-md bg-[#FFFFFF] drop-shadow-md hover:bg-[#59E391] font-medium text-xl">
              8
            </div>
            <div className="p-2 rounded-md bg-[#FFFFFF] drop-shadow-md hover:bg-[#59E391] font-medium text-xl">
              9
            </div>
            <div className="p-2 rounded-md bg-[#FFFFFF] drop-shadow-md hover:bg-[#59E391] font-medium text-xl">
              0
            </div>
          </div>
          <button className="bg-[#5035FF] text-white rounded-md font-semibold w-[92px] h-[35px]">
            Roll
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
