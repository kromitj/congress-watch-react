
class Legislators extends React.Component {
  constructor(props) {
    super();
    this.state = {
      legislators: props.legislators
    };
  }

  sort_by(sort_by) {
    console.log(sort_by)
  }

  render() {
    const legislatorList = this.state.legislators.map((legislator) =>
      <tr key={legislator.id}>
        <Legislator legislator={ legislator } />
      </tr>
    )
    return (
      <div className="legislators">
        <h2>Legislators</h2>
        <table className="table table-bordered">
        <thead>
          <tr>
            <th><a href="/legislators" onClick={ () => this.sort_by( "first_name")}  >First</a></th>
            <th><a href="/legislators" onClick={ () => this.sort_by( "last_name")}  >Last</a></th>
            <th><a href="/legislators" onClick={ () => this.sort_by( "state")}  >State</a></th>
            <th><a href="/legislators" onClick={ () => this.sort_by( "party")}  >Party</a></th>
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

