class UserContainer extends React.Component {
    constructor(props) {
        super();
        this.state = {
        	action: "guest",
        	isGuest: true,
        	userId: null,
        	username: "Guest",
        }
        this.prepareForSegue = this.prepareForSegue.bind(this)
    };
    render() {
    	const userProps = this.packUserProps();
        return(            
            <User {...userProps} />
        )
    }
    prepareForSegue(segue, params=null) {
      if (segue == this.state.action) { return false }
      var response = actions[segue](this, params)
      this.setState({
        action: segue
      })
       this.props.requestSegue(segue);
    }
    packUserProps() {
    	return {
    		requestSegue: this.prepareForSegue,
    		username: this.state.username
    	}
    }
}

const userActions = {
  signUp: function(that) {

	that.setState({action: "signUp"}) 
  },
  logIn: function(that) {
    that.setState({action: "logIn"}) 
  },
  logOut: function(that) {
    that.setState({action: "logOut"}) 
    $.ajax({
      url: "/session/logout",
      type: 'DELETE',
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data)
        that.setState({bodyContent: null,
          action: "guest", username: "Guest"
        });
      }.bind(that),
      error: function(xhr, status, err) {
        console.error(that.props.url, status, err.toString());
      }.bind(that)
    });        
  },
  userNew: function(that, params) {
  	console.log("sign---------------")
    const data = {user: params};
    console.log(data)
    $.ajax({
      url: "/users",
      type: 'POST',
      data: data,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data)
        that.setState({
          action: "registered", username: data.username, userId: data.userId
        });
      }.bind(that),
      error: function(xhr, status, err) {
        console.error(that.props.url, status, err.toString());
      }.bind(that)
    });        
  },
  sessionNew: function(that, params) {
    const data = {session: params};
    console.log(data)
    $.ajax({
      url: "/session",
      type: 'POST',
      data: data,
      dataType: 'json',
      cache: false,
      success: function(data) {
        that.setState({bodyContent: null,
          action: "dashboard", username: data.username
        });
      }.bind(that),
      error: function(xhr, status, err) {
        console.error(that.props.url, status, err.toString());
      }.bind(that)
    });        
  }
}