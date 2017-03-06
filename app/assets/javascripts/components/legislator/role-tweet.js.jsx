class RoleTweet extends React.Component {
  constructor(props) {
    super();
    this.state = {
      
    }
  }

  render() {
  	return (
  		<div dangerouslySetInnerHTML={{__html: this.props.tweet}}></div>
  	)

  }

  
}