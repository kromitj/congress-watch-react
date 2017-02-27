class UserContainer extends React.Component {
    constructor(props) {
        super();
        this.state = {
        	
        }
    };
    render() {
    	const userProps = this.packUserProps();
        return(            
            <User {...userProps} />
        )
    }

    packUserComponents() {
      let comps = []
        if (this.props.username == "Guest") {
            comps.push(<LogIn {...this.props} />)
            comps.push(<SignUp {...this.props} />)
        } else {
            comps.push(<LogOut {...this.props} />)
        }
        console.log(comps)
        return comps
    }
    
    packUserProps() {
      const userComponents = this.packUserComponents()
      return {
        userComponents: userComponents,
        username: this.props.username
      }
    }   
}
