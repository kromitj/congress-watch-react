class RoleSocialMediaList extends React.Component {
  constructor(props) {
    super();
    this.state = {

    }
  }

  render() {
  	const twitterURL = `https://www.twitter.com/${this.props.twitter}`
    return (
      <div className="panel panel-default">
        <div className="panel-heading">Social Media</div>
        <div className="panel-body">
        <a href={this.props.website} target="_blank"> <i className="fa fa-tv fa-2x"></i></a>
          <a href={twitterURL} target="_blank"><i className="fa fa-twitter fa-2x"></i></a>
          <i className="fa fa-address-card fa-2x" data-toggle="tooltip" title={this.props.address} ></i>
        </div>
    	</div>   
    )
  }  
}
