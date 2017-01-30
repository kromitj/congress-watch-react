class Legislator extends React.Component {
  constructor(props) {
    super();
    this.state = {
      legislator: props.legislator
    };
  }

  render() {
    return (
      <div>
    		<td>{this.state.legislator.first_name}</td>
    		<td>{this.state.legislator.last_name}</td>
    		<td>{this.state.legislator.state}</td>
    		<td>{this.state.legislator.party}</td>
      </div>
    );
  }
}