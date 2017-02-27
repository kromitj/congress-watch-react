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
                    { this.props.userComponents}
                    <li className="divider"></li>
                    <li>
                        <a href="#"><i className="fa fa-fw fa-power-off"></i> ...</a>
                    </li>
                </ul>
            </li>
        )
    }

    packUserComponents() {
        let comps = []
        if (this.props.username == "Guest") {
            comps.push(<LogIn {...this.props} />)
            comps.push(<SignUp {...this.props} />)
        } else {
            comps.push(<LogOut {...this.props} />)
        }
        return comps
    }
}