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
                prev.map((cell, index) =>
                    index === cellIndex ? newValue : cell
                )
            );
        } else if (rowIndex === 2) {
            setRow2((prev) =>
                prev.map((cell, index) =>
                    index === cellIndex ? newValue : cell
                )
            );
        } else if (rowIndex === 3) {
            setRow3((prev) =>
                prev.map((cell, index) =>
                    index === cellIndex ? newValue : cell
                )
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
        <>
            <button onClick={() => clearBoard()}>Limpar</button>
            <div>
                {row1.map((cell, index) => (
                    <div
                        key={index}
                        className="cell"
                        onClick={() => handleCellClick(1, index)}
                    >
                        {cell}
                    </div>
                ))}
            </div>
            <div>
                {row2.map((cell, index) => (
                    <div
                        key={index}
                        className="cell"
                        onClick={() => handleCellClick(2, index)}
                    >
                        {cell}
                    </div>
                ))}
            </div>
            <div>
                {row3.map((cell, index) => (
                    <div
                        key={index}
                        className="cell"
                        onClick={() => handleCellClick(3, index)}
                    >
                        {cell}
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
