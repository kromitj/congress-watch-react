class LegislatorField extends React.Component {
  constructor(props) {
    super();
    this.state = {
      value: props.value
    };
  }

  render() {
    return (      
    		<div>{ this.props.value }</div>
    );
  }
}