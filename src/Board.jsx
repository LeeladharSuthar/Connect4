import Row from "./Row"
import { useState } from 'react';
export default function Board() {
    function win(matrix) {
        for (let i = 6; i >= 0; i--) { // Horizontal Match
            for (let j = 0; j <= 3; j++) {
                if (matrix[i][j] != null && matrix[i][j] == matrix[i][j + 1] && matrix[i][j + 1] == matrix[i][j + 2] && matrix[i][j + 2] == matrix[i][j + 3]) {
                    matrix[i][j] == "X" ? alert(`Red Won The Game`) : alert(`Blue Won The Game`);
                    return true;
                }
            }
            for (let j = 6; j >= 0; j--) { // Vertical Match
                if (i > 2 && matrix[i][j] != null && matrix[i][j] == matrix[i - 1][j] && matrix[i - 1][j] == matrix[i - 2][j] && matrix[i - 2][j] == matrix[i - 3][j]) {
                    matrix[i][j] == "X" ? alert(`Red Won The Game`) : alert(`Blue Won The Game`);
                    return true;
                }
            }
            for (let j = 0; j <= 3; j++) { //  from nx0 to 0xn
                if (i > 2 && matrix[i][j] != null && matrix[i][j] == matrix[i - 1][j + 1] && matrix[i - 1][j + 1] == matrix[i - 2][j + 2] && matrix[i - 2][j + 2] == matrix[i - 3][j + 3]) {
                    matrix[i][j] == "X" ? alert(`Red Won The Game`) : alert(`Blue Won The Game`);
                    return true;
                }
            }
            for (let j = 6; j >= 3; j--) { // from nxn to 0x0
                if (i > 2 && matrix[i][j] != null && matrix[i][j] == matrix[i - 1][j - 1] && matrix[i - 1][j - 1] == matrix[i - 2][j - 2] && matrix[i - 2][j - 2] == matrix[i - 3][j - 3]) {
                    matrix[i][j] == "X" ? alert(`Red Won The Game`) : alert(`Blue Won The Game`);
                    return true;
                }
            }
        }
        return false;
    }
    const [states, setStates] = useState(Array(7).fill(null).map(() => Array(7).fill(null)));
    const [turn, setTurn] = useState("X");
    const [msg, setMsg] = useState("Red Player Turn")
    const [won, setWon] = useState(false);
    function update(col) {
        if (!won) {
            let row = 6;
            for (row = 6; row >= 0; row--) {
                if (states[row][col] == null) {
                    break;
                }
            }
            let clonedMatrix = states.map((row) => row.slice())
            turn == "X" ? clonedMatrix[row][col] = "X" : clonedMatrix[row][col] = "Y";
            if (won == false && win(clonedMatrix)) {
                setWon(true);
            }
            setStates(clonedMatrix);
            turn == "X" ? setTurn("Y") : setTurn("X");
        }
    }
    function reset(){
        setStates(Array(7).fill(null).map(() => Array(7).fill(null)));
        setMsg("Red Player Turn");
        setTurn("X");
        setWon(false);
    }
    return <>
        <div className='board'>
            <Row update={update} states={states} row={0} />
            <Row update={update} states={states} row={1} />
            <Row update={update} states={states} row={2} />
            <Row update={update} states={states} row={3} />
            <Row update={update} states={states} row={4} />
            <Row update={update} states={states} row={5} />
            <Row update={update} states={states} row={6} />
        </div>
        <button onClick={reset}>Reset</button>
    </>
}