import type { Board } from "../interfaces/Boad";

type props = {
    board: Board;
    setBoard: React.Dispatch<React.SetStateAction<Board>>;
    turn: number;
    setTurn: React.Dispatch<React.SetStateAction<number>>;
    cellIndex: number;
    rowIndex: number;
};

export function handleCellClick({
    board,
    setBoard,
    setTurn,
    turn,
    cellIndex,
    rowIndex,
}: props) {
    const newValue = turn % 2 == 0 ? "O" : "X";

    switch (rowIndex) {
        case 0:
            if (board[0][cellIndex] !== " ") {
                return;
            }
            setBoard((prev) => {
                const newRow = [...prev[0]];
                newRow[cellIndex] = newValue;
                return [newRow, prev[1], prev[2]];
            });
            break;
        case 1:
            if (board[1][cellIndex] !== " ") {
                return;
            }
            setBoard((prev) => {
                const newRow = [...prev[1]];
                newRow[cellIndex] = newValue;
                return [prev[0], newRow, prev[2]];
            });
            break;

        default:
            if (board[2][cellIndex] !== " ") {
                return;
            }
            setBoard((prev) => {
                const newRow = [...prev[2]];
                newRow[cellIndex] = newValue;
                return [prev[0], prev[1], newRow];
            });
            break;
    }

    setTurn(turn + 1);
}
