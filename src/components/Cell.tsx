import { handleCellClick } from "../functions/handleClick";
import type { Board } from "../interfaces/Boad";

type CellProps = {
    board: Board;
    setBoard: React.Dispatch<React.SetStateAction<Board>>;
    turn: number;
    setTurn: React.Dispatch<React.SetStateAction<number>>;
    cellIndex: number;
    rowIndex: number;
    cell: string;
};

export function Cell({
    board,
    cellIndex,
    rowIndex,
    setBoard,
    setTurn,
    turn,
    cell,
}: CellProps) {
    return (
        <div
            key={cellIndex}
            className="border w-20 h-20 text-6xl m-3 p-2 cursor-pointer"
            onClick={() =>
                handleCellClick({
                    board,
                    setBoard,
                    setTurn,
                    turn,
                    cellIndex: cellIndex,
                    rowIndex: rowIndex,
                })
            }
        >
            {cell}
        </div>
    );
}
