import type { Board } from "../interfaces/Boad";

export function isDraw(board: Board, winner: string | null) {
    return board.flat().every((cell) => cell !== " ") && !winner;
}
