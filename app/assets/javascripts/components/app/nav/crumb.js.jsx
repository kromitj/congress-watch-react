class Crumb extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
        this.onCrumbClick = this.onCrumbClick.bind(this);
    };
    render() {
        if (this.props.currentPage) {
            return(            
                <li className="active">
                    {this.props.name}
                </li> 
            )
        } else {
            return(            
                <li className="">
                    <a href="#" className="crumb-link" onClick={this.onCrumbClick}>{this.props.name}</a>
                </li> 
            )
        }
    }
    onCrumbClick(ev) {
        ev.preventDefault();
        const action = this.props.name
        if (action == "Dashboard") {
            this.props.requestSegue("dashboard");
        } else if (action == "Senators") {
            this.props.requestSegue("senatorIndex");
        } else if (action == "Representatives") {
            this.props.requestSegue("repIndex");
        } else {
            this.props.requestSegue("roleShow", null);
        }
    }
}

