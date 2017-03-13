class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.onLogoClick = this.onLogoClick.bind(this)
    };
    render() {
        return (
            <div>
                <a className="navbar-brand" href="#" onClick={this.onLogoClick}>Congress Observer <i>Beta</i></a>
            </ div>
            )
    }
     onLogoClick(ev) {
        ev.preventDefault();   
        this.props.subcribeToDispatcher("dashboard");
    }
}