
class Legislators extends React.Component {
  constructor(props) {
    super();
    this.state = {
      legislators: props.legislators
    };
  }

  sort_by(sort_by) {
    console.log(sort_by)
    this.state.legislators = this.state.legislators.sort(function(a, b) {
      console.log(sort_by)
      a_val = a[sort_by]
      b_val = b[sort_by]
      console.log(a[sort_by])
      if (a_val < b_val) {
        return -1;
      }
      if (a_val > b_val) {
        return 1;
      }
      return 0;
    });
    alert('sorted...')
    console.log(this.state.legislators[0].first_name)
    this.forceUpdate();    
  }







  render() {
    const legislatorList = this.state.legislators.map((legislator) =>
        <Legislator legislator={ legislator } />
    )
    return (
      <div className="legislators">
        <h2>Legislators</h2>
        <table className="table table-bordered">
        <thead>
          <tr>
            <th><button type="button" onClick={ () => this.sort_by("first_name")}  >First</button></th>
            <th><button type="button" onClick={ () => this.sort_by("last_name")}  >Last</button></th>
            <th><button type="button" onClick={ () => this.sort_by("state")}  >State</button></th>
            <th><button type="button" onClick={ () => this.sort_by("party")}  >Party</button></th>
          </tr>
        </thead>
          <tbody>
            { legislatorList }
          </tbody>
        </table>
      </div>
    );
  }
}

