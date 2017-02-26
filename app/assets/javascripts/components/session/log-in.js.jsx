class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.onSignIn = this.onSignIn.bind(this);
    };

    render() {
        return (
             <li>
	            <a href="#" onClick={this.onSignIn}><i className="fa fa-fw fa-user"></i> Sign-In</a>
	        </li>
        )
    }
    onSignIn(ev) {
        ev.preventDefault(); 
        this.props.requestSegue("logIn");
    }
}