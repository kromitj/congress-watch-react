class LogOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.onSignOut = this.onSignOut.bind(this);
    };

    render() {
        return (
	            <li><a href="#" onClick={this.onSignOut}><i className="fa fa-fw fa-user"></i>Log-Out</a></li>
        )
    }
    onSignOut(ev) {
        ev.preventDefault(); 
        this.props.requestSegue("logOut");
    }
}