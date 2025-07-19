import { useState } from "react";
import "./App.css";

function App() {
    const [board, setBoard] = useState([
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
    ]);
    const [turn, setTurn] = useState(1);

    const handleCellClick = (rowIndex: number, cellIndex: number) => {
        const newValue = turn % 2 == 0 ? "O" : "X";

        if (rowIndex === 1) {
            if (board[0][cellIndex] !== " ") return;
            setBoard((prev) => {
                const newRow = [...prev[0]];
                newRow[cellIndex] = newValue;
                return [newRow, prev[1], prev[2]];
            });
        } else if (rowIndex === 2) {
            if (board[1][cellIndex] !== " ") return;
            setBoard((prev) => {
                const newRow = [...prev[1]];
                newRow[cellIndex] = newValue;
                return [prev[0], newRow, prev[2]];
            });
        } else if (rowIndex === 3) {
            if (board[2][cellIndex] !== " ") return;
            setBoard((prev) => {
                const newRow = [...prev[2]];
                newRow[cellIndex] = newValue;
                return [prev[0], prev[1], newRow];
            });
        }

        setTurn(turn + 1);
    };

    const clearBoard = () => {
        setBoard([
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "],
        ]);
        setTurn(1);
    };

    const checkWinner = () => {
        for (let i = 0; i < 3; i++) {
            if (
                board[i][0] !== " " &&
                board[i][0] === board[i][1] &&
                board[i][1] === board[i][2]
            ) {
                return board[i][0];
            }
            if (
                board[0][i] !== " " &&
                board[0][i] === board[1][i] &&
                board[1][i] === board[2][i]
            ) {
                return board[0][i];
            }
        }
        if (
            board[0][0] !== " " &&
            board[0][0] === board[1][1] &&
            board[1][1] === board[2][2]
        ) {
            return board[0][0];
        }
        if (
            board[0][2] !== " " &&
            board[0][2] === board[1][1] &&
            board[1][1] === board[2][0]
        ) {
            return board[0][2];
        }
        return null;
    };
    const winner = checkWinner();
    const draw = board.flat().every((cell) => cell !== " ") && !winner;
    if (winner || draw) {
        setTimeout(() => {
            clearBoard();
        }, 850);
    }

    return (
        <div className="bg-gradient-to-b from-[#114B5F] to-[#456990]   text-black text-center h-screen flex items-center justify-center flex-col">
            <button
                className="bg-gradient-to-b from-[#6B2737] to-[#F45B69] text-[#E4FDE1] border-0 rounded-md text-4xl p-2 m-2 cursor-pointer"
                onClick={() => clearBoard()}
            >
                Limpar
            </button>
            {winner && (
                <div className="text-4xl text-[#6fdb9f]">
                    Jogador {winner} venceu!
                </div>
            )}
            {draw && <div className="text-4xl text-[#6fdb9f]">Empate!</div>}
            <div className="flex justify-center flex-wrap text-[#F45B69] select-none">
                {board[0].map((cell, index) => (
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
                {board[1].map((cell, index) => (
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
                {board[2].map((cell, index) => (
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
