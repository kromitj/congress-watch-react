
class Legislators extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      legislators: props.legislators
    }
    this.hangleChange = this.handleChange.bind( this )
  }

  handleChange( value ) {
    console.log("inside handleCHange")
    this.setState( { legislators: this.sort_by( value) })
  }


  render() {
    console.log("inside render")
    var  legislatorList = this.populateList()
    return (
      <div className="legislators">
        <h2>Legislators</h2>
        <table className="table table-bordered">
        <thead>
          <tr>
            <th><button type="button" onClick={ () => this.handleChange("first_name")}  >First</button></th>
            <th><button type="button" onClick={ () => this.handleChange("last_name")}  >Last</button></th>
            <th><button type="button" onClick={ () => this.handleChange("state")}  >State</button></th>
            <th><button type="button" onClick={ () => this.handleChange("party")}  >Party</button></th>
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
    const sorted = this.state.legislators.sort(function(a, b) {
      a_val = a[sort_by]
      b_val = b[sort_by]
      if (a_val < b_val) {
        return -1;
      }
      if (a_val > b_val) {
        return 1;
      }
      return 0;
    });
    return sorted
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

