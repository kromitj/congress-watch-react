class ToolBar extends React.Component {
  render() {
    return (
      <div>
      <form action='/legislators' method='get' acceptCharset='UTF-8'>
        <input type='hidden' name='utf8' value='✓' />
        <select name="search_by">
          <option selected disabled>Search By</option>
          <option value="state">State</option>
          <option value="party">Party</option>
          <option value="Last Name">Last Name</option>
        </select>
        <input type="text" name="search_value"></input>
        <input type="submit"></input>
      </form>
      </div>
    );
  }
}