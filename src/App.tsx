import { useState } from "react";
import "./App.css";

function App() {
  const [row1, setRow1] = useState([" ", " ", " "]);
  const [row2, setRow2] = useState([" ", " ", " "]);
  const [row3, setRow3] = useState([" ", " ", " "]);
  const [turn, setTurn] = useState(1);

  const handleCellClick = (rowIndex: number, cellIndex: number) => {
    const newValue = turn % 2 == 0 ? "O" : "X";
    if (rowIndex === 1) {
      setRow1((prev) =>
        prev.map((cell, index) => (index === cellIndex ? newValue : cell))
      );
    } else if (rowIndex === 2) {
      setRow2((prev) =>
        prev.map((cell, index) => (index === cellIndex ? newValue : cell))
      );
    } else if (rowIndex === 3) {
      setRow3((prev) =>
        prev.map((cell, index) => (index === cellIndex ? newValue : cell))
      );
    }
    setTurn(turn + 1);
  };

  const clearBoard = () => {
    setRow1([" ", " ", " "]);
    setRow2([" ", " ", " "]);
    setRow3([" ", " ", " "]);
    setTurn(1);
  };

  return (
    <div className="bg-gradient-to-b from-[#114B5F] to-[#456990]   text-black text-center h-screen flex items-center justify-center flex-col">
      <button
        className="bg-gradient-to-b from-[#6B2737] to-[#F45B69] text-[#E4FDE1] border-0 rounded-md text-4xl p-2 m-2 cursor-pointer"
        onClick={() => clearBoard()}
      >
        Limpar
      </button>
      <div className="flex justify-center flex-wrap text-[#F45B69] select-none">
        {row1.map((cell, index) => (
          <div
            key={index}
            className="border w-20 h-20 text-6xl m-3 p-2 cursor-pointer"
            onClick={() => handleCellClick(1, index)}
          >
            {cell}
          </div>
        ))}
      </div>
      <div className="flex justify-center text-[#F45B69] select-none">
        {row2.map((cell, index) => (
          <div
            key={index}
            className="border w-20 h-20 text-6xl m-3 p-2 cursor-pointer"
            onClick={() => handleCellClick(2, index)}
          >
            {cell}
          </div>
        ))}
      </div>
      <div className="flex justify-center text-[#F45B69] select-none">
        {row3.map((cell, index) => (
          <div
            key={index}
            className="border w-20 h-20 text-6xl m-3 p-2 cursor-pointer"
            onClick={() => handleCellClick(3, index)}
          >
            {cell}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
