class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <NavbarHeader />
                <TopNavRight />

                <NavSidebar requestSegue={this.props.requestSegue}/>
            </nav>
        )
    }
}