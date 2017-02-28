class RoleAvatar extends React.Component {
  constructor(props) {
    super();
    this.state = {

    }
  }

  render() {
     
    return (
      <span><img class="media-object" src="{this.props.url}" alt="..."></img></span>
    );
  }
}