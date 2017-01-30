class LegislatorField extends React.Component {
  constructor(props) {
    super();
    this.state = {
      value: props.value
    };
  }

  render() {
    return (      
    		<td>{ this.state.value }</td>
    );
  }
}