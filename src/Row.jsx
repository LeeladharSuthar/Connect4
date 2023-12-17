import Circle from './Circle'
export default function Row({update, states, row}) {
    return <div>
        <Circle update={update} states={states} row={row} col={0}/>
        <Circle update={update} states={states} row={row} col={1}/>
        <Circle update={update} states={states} row={row} col={2}/>
        <Circle update={update} states={states} row={row} col={3}/>
        <Circle update={update} states={states} row={row} col={4}/>
        <Circle update={update} states={states} row={row} col={5}/>
        <Circle update={update} states={states} row={row} col={6}/>
    </div>
} 