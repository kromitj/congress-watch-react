class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render() {
        return (
             <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i> John Smith <b className="caret"></b></a>
                <ul className="dropdown-menu">
                    <li>
                        <a href="#"><i className="fa fa-fw fa-user"></i> Profile</a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-fw fa-gear"></i> Settings</a>
                    </li>
                    <li className="divider"></li>
                    <li>
                        <a href="#"><i className="fa fa-fw fa-power-off"></i> Log Out</a>
                    </li>
                </ul>
            </li>
        )
    }
}