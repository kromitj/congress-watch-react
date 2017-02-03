
class Legislators extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      legislators: Immutable.List(props.legislators)
    }
    this.hangleChange = this.handleChange.bind( this )
  }

  handleChange( value ) {
    console.log("inside handleCHange")
    this.setState( { legislators: this.sort_by( value) })
  }

  render() {
    var  legislatorList = this.populateList()
    return (
      <div className="legislators">
        < SearchByBar />
        <h2>Legislators</h2>
        
        <table className="table table-bordered">
        <thead>
          <tr>
            <th><button type="button" className="btn" onClick={ () => this.handleChange("first_name")}  >First</button></th>
            <th><button type="button" className="btn" onClick={ () => this.handleChange("last_name")}  >Last</button></th>
            <th><button type="button" className="btn" onClick={ () => this.handleChange("state")}  >State</button></th>
            <th><button type="button" className="btn" onClick={ () => this.handleChange("party")}  >Party</button></th>
          </tr>
        </thead>
          <tbody>
            { legislatorList }
          </tbody>
        </table>
      </div>
    );
  }

  sort_by(sort_by) {
    const sorted = this.state.legislators.sortBy(legislator => legislator[sort_by])
    return Immutable.List(sorted)
  }

  renderLegislator(legislator) {
    return <Legislator legislator={ legislator}/>
  }

  populateList() {
    return this.state.legislators.map((legislator) =>
        this.renderLegislator(legislator)
    )
  }
}
