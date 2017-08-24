import _ from 'lodash'
import Row from './Row'
import Cell from './Cell'
import Footer from './Footer'

class Game extends React.Component {
	constructor(props) {
		super(props)
		/*In the previous version let used and in this version its removed
		for matrix because we moved matrix from render to constructor.
		If we want to access variable from constructor to render then we
		use 'this.<<variable name>> or this.state.<<variable name>>. 
		Since matrix value not changing we used this.<<variable name>>'
		 */
		this.matrix = []
		for(let r = 0; r < this.props.rows; r++) {
			let row = []
			for(let c = 0;c < this.props.columns;c++) {
				row.push(`${r}${c}`)
			}
			this.matrix.push(row)
			//console.log("matrix is",matrix)
		}
		/*please note in flatMatrix "this" not used because
		its not required in render */

		let flatMatrix = _.flatten(this.matrix)
		//console.log("flatMatrix is:",flatMatrix)
		this.activeCells = _.sampleSize(flatMatrix,this.props.activeCellsCount)
		this.state = { gameState: "ready"}
	}
	componentDidMount() {
		setTimeout(() => this.setState({ gameState: 'memorize'}),2000)
		setTimeout(() => this.setState({ gameState: 'recall'}),4000)
	}
	render() {
		return (
			<div className="grid">
		{/*ri means row index, that is automatically comes as second arg */}
			{this.matrix.map((row, ri) => (
				<Row key={ri}>
				{/*cellID is having $r$c contents. Here we are embedding 
				cell component within row component*/}
				{row.map(cellId => <Cell key={cellId} id={cellId} 
					activeCells={this.activeCells}{...this.state}/>)}
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