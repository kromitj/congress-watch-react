class ToolBar extends React.Component {
  render() {
    return (
      <div>
      <form action='/legislators' method='post' acceptCharset='UTF-8'>
        <input type='hidden' name='_method' value='patch' />
        <input type='hidden' name='utf8' value='✓' />
        <select name="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        <input type="submit"></input>
      </form>
      </div>
    );
  }
}