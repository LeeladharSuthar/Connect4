export default function Circle({update, states, row, col}) {
    function handleClick(){
        update(row, col);
    }
    return <>
        <button onClick={handleClick}></button>
    </>
}