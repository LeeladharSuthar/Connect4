export default function Circle({update, states, col, row}) {
    function handleClick(){
        update(col);
    }
    return <>
        <button onClick={handleClick} className={states[row][col]==null?"white":states[row][col]=="X"?"red":"blue"}></button>
    </>
}  