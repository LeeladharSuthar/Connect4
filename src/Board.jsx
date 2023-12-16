import Row from "./Row"
import { useState } from 'react';
export default function Board() {
    const [states, setStates] = useState(Array(7).fill(null).map(()=>Array(7).fill(null)));
    function update(row, col){
        let clonedMatrix = cloneMatrix(states);
        clonedMatrix[row][col] = "X";
        setStates(clonedMatrix);
    }
    function cloneMatrix(matrix) {
        return matrix.map(function(row) {
            return row.slice();
        });
    }
return <>
        <Row update={update} states={states} row={0}/>
        <Row update={update} states={states} row={1}/>
        <Row update={update} states={states} row={2}/>
        <Row update={update} states={states} row={3}/>
        <Row update={update} states={states} row={4}/>
        <Row update={update} states={states} row={5}/>
        <Row update={update} states={states} row={6}/>
    </>
}