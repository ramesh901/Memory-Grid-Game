import Row from './Row'
import Cell from './Cell'
import Footer from './Footer'

class Game extends React.Component {
	constructor(props) {
		super(props)
		this.state = { gameState: 'ready'}
	}
	componentDidMount() {
		setTimeout(() => this.setState({ gameState: 'memorize'}),2000)
		setTimeout(() => this.setState({ gameState: 'recall'}),4000)
	}
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
		console.log("Hi")

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
		{/*The three-dots spread operator will take this.state 
		and spread all of its keys as props for the Footer component.*/}
			<Footer {...this.state} />
			</div>
			
		)
}
}
export default Game