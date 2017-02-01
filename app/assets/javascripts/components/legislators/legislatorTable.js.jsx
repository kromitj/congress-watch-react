class LegislatorTable extends React.Component {
	constructor(props)  {
		super()
		this.state = {
			legislators: this.props.legislatorList
		}
	}

	render() {
		return (
		<table>
		<thead>
          <tr>
            <th><button type="button" onClick={ () => this.handleChange("first_name")}  >First</button></th>
            <th><button type="button" onClick={ () => this.handleChange("last_name")}  >Last</button></th>
            <th><button type="button" onClick={ () => this.handleChange("state")}  >State</button></th>
            <th><button type="button" onClick={ () => this.handleChange("party")}  >Party</button></th>
          </tr>
        </thead>
          <tbody>
            { this.props.legislatorList }
          </tbody>
        </table>
		)
	}
}