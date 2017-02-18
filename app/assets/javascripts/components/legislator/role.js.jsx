class Role extends React.Component {
  constructor(props) {
    super();
    this.fields = ["firstname", "lastname", "state", "party"];
    this.state = {

    }
  }

  render() {
     const roleRow = this.fields.map((field) =>
        <ItemField value={ this.props.role[field] } />
    )
    return (
      <tr key={this.props.role.id}>
        {roleRow }     
      </tr>
    );
  }
}