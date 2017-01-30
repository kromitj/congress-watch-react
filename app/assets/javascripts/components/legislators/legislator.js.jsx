class Legislator extends React.Component {
  constructor(props) {
    super();
    this.state = {
      legislator: props.legislator,
      fields: ["first_name", "last_name", "state", "party"]
    };
  }

  render() {
    const legislatorRow = this.state.fields.map((field) =>
        <LegislatorField value={ this.state.legislator[field] } />
    )
    console.log(legislatorRow)
    return (
      <tr key={this.state.legislator.id}>
        { legislatorRow }      
      </tr>
    );
  }
}