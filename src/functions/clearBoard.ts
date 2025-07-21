import type { Board } from "../interfaces/Boad";

type props = {
    setBoard: React.Dispatch<React.SetStateAction<Board>>;
    setTurn: React.Dispatch<React.SetStateAction<number>>;
};

export function clearBoard({ setBoard, setTurn }: props) {
    setBoard([
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
    ]);
    setTurn(1);
}
