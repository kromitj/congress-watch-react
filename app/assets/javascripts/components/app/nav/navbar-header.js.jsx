class NavbarHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render() {
        return (
            <div className="navbar-header">
                <SideBarHamburger />
                <Header subcribeToDispatcher={this.props.prepareForSegue}/>
            </div>
        )
    }
    
}