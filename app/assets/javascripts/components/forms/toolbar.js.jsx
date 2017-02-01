class ToolBar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      search_by: "void"
    }
    this.handleChange = this.handleChange.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
  }
  handleChange( event ) {
    this.setState( { search_by: event.target.value} );
  }

  handleSubmit( event ) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <form action='/legislators' method='get' acceptCharset='UTF-8'>
        <input type='hidden' name='utf8' value='✓' />
        <select name="search_by" value={this.state.search_by} onChange={this.handleChange}>
          <option value="void" disabled>Search By</option>
          <option value="state">State</option>
          <option value="party">Party</option>
          <option value="last_name">Last Name</option>
        </select>
        <input type="text" name="search_value"></input>
        <input type="submit" onClick={ () => this.handleSubmit() }></input>
      </form>
      </div>
    );
  }
}