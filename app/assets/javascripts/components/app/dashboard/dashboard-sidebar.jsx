class DashboardSideBar extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    };
    render() {
        return(
            <li className="active">
                <a className="actionable" href="index.html"><i className="fa fa-fw fa-dashboard"></i> Dashboard</a>
            </li>
        )
    }
}