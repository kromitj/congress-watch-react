class DashboardSideBar extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
        this.onClick = this.onClick.bind(this)
    };
    render() {
        return(
            <li className="active">
                <a href="#" onClick={this.onClick} ><i className="fa fa-fw fa-dashboard"></i>Dashboard</a>
            </li>
        )
    }

    onClick(ev) {
        ev.preventDefault();   
        this.props.requestSegue("dashboard");
    }
}