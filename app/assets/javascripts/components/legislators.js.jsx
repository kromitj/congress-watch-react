
class Legislators extends React.Component {
  constructor() {
    super();
    this.state = {
      legislators: []
    };
  }

  render() {
    var legislatorList = this.props.legislators.map(function(legislator) {
              return React.createElement(Legislator, { legislator: legislator})
            });
    return (
      <div className="legislators">
        <h2>Legislators</h2>
        <table className="table table-bordered">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>State</th>
            <th>Party</th>
          </tr>
        </thead>
          <tbody>
            { legislatorList}
          </tbody>
        </table>
      </div>
    );
  }
}