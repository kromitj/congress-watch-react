class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render() {
        return (
             <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i> Sign-In<b className="caret"></b></a>
                <ul className="dropdown-menu">
                    <li>
                        <a href="#"><i className="fa fa-fw fa-user"></i> Sign-In</a>
                    </li>
                    <li>
                        <a href="#"><i className="fa fa-fw fa-gear"></i> Sign-Up</a>
                    </li>
                    <li className="divider"></li>
                    <li>
                        <a href="#"><i className="fa fa-fw fa-power-off"></i> ...</a>
                    </li>
                </ul>
            </li>
        )
    }
}