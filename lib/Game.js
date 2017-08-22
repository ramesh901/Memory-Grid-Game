import Row from './Row'
import Cell from './Cell'

class Game extends React.Component {
	render() {
		let matrix = [], row
		for(let r = 0; r < this.props.rows; r++) {
			row = []
			for(let c = 0;c < this.props.columns;c++) {
				row.push(`${r}${c}`)
			}
			matrix.push(row)
			//console.log("matrix is",matrix)
		}
		return (
			<div className="grid">
		{/*ri means row index, that is automatically comes as second arg */}
			{matrix.map((row, ri) => (
				<Row key={ri}>
				
				{/*cellID is having $r$c contents. Here we are embedding cell 
				component within row component*/}
				{row.map(cellId => <Cell key={cellId} id={cellId} />)}
				</Row>
				))}
			</div>
		)
}
}
export default Game