class ItemField extends React.Component {
  constructor(props) {
    super();
    this.state = {
    };
  }

  render() {
    if (this.props.title == "party") {
      if (this.props.value == "Democrat") {
        return <td className="bg-primary" >{ this.props.value }</td>
      } else if (this.props.value == "Republican") {
        return <td className="bg-danger" >{ this.props.value }</td>
      } else {
        return <td>{ this.props.value }</td>
      }
    } else {
      return <td>{ this.props.value }</td>
    }
  }

  fieldIsParty() {
    if (this.props.field == "party") {
      return <td className="bg-primary" >{ this.props.value }</td>
    } else {
      return <td>{ this.props.value }</td>
    }
  }
}