import { useState } from "react";
import "./App.css";
import type { Board } from "./interfaces/Boad";
import { checkWinner } from "./functions/checkWinner";
import { clearBoard } from "./functions/clearBoard";
import { Cell } from "./components/Cell";
import { isDraw } from "./functions/isDraw";

function App() {
    const [board, setBoard] = useState<Board>([
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
    ]);
    const [turn, setTurn] = useState(1);

    const winner = checkWinner(board);
    const draw = isDraw(board, winner);
    if (winner || draw) {
        setTimeout(() => {
            clearBoard({ setBoard, setTurn });
        }, 850);
    }

    return (
        <div className="bg-gradient-to-b from-[#114B5F] to-[#456990]   text-black text-center h-screen flex items-center justify-center flex-col">
            <button
                className="bg-gradient-to-b from-[#6B2737] to-[#F45B69] text-[#E4FDE1] border-0 rounded-md text-4xl p-2 m-2 cursor-pointer"
                onClick={() => clearBoard({ setBoard, setTurn })}
            >
                Limpar
            </button>
            {winner && (
                <div className="text-4xl text-[#6fdb9f]">
                    Jogador {winner} venceu!
                </div>
            )}
            {draw && <div className="text-4xl text-[#6fdb9f]">Empate!</div>}

            {board.map((_, index) => (
                <div className="flex justify-center flex-wrap text-[#F45B69] select-none">
                    {board[index].map((cell, cellIndex) => (
                        <Cell
                            board={board}
                            cell={cell}
                            cellIndex={cellIndex}
                            rowIndex={index}
                            setBoard={setBoard}
                            setTurn={setTurn}
                            turn={turn}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default App;
