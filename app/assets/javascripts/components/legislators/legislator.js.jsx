class Legislator extends React.Component {
  constructor(props) {
    super();
    this.state = {
      legislator: props.legislator,
      fields: ["first_name", "last_name", "state", "party"]
    }
  }

  handleChange( value ) {
    console.log("inside handleCHange")
    this.setState( { legislator: this.sort_by( value) })
  }

  render() {
     const legislatorRow = this.state.fields.map((field) =>
        <LegislatorField value={ this.props.legislator[field] } />
    )
    return (
      <tr key={this.state.legislator.id}>
        { legislatorRow }      
      </tr>
    );
  }
}