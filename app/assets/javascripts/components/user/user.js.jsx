class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render() {
        return (
             <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i> {this.props.username}<b className="caret"></b></a>
                <ul className="dropdown-menu">
                    <LogIn {...this.props} />
                    <SignUp {...this.props} />
                    <LogOut {...this.props} />
                    <li className="divider"></li>
                    <li>
                        <a href="#"><i className="fa fa-fw fa-power-off"></i> ...</a>
                    </li>
                </ul>
            </li>
        )
    }
}