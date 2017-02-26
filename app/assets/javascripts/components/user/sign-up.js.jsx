class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.onSignUp = this.onSignUp.bind(this);
    };

    render() {
        return (
            <li>
                <a href="#" onClick={this.onSignUp}><i className="fa fa-fw fa-gear" ></i> Sign-Up</a>
            </li>
        )
    }

    onSignUp(ev) {
        ev.preventDefault(); 
        this.props.requestSegue("signUp");
    }
    
}