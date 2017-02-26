class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render() {
        const navSidebarProps = this.packNavSideBarProps()
        const navUpperRIghtProps = this.packUpperRight();
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <NavbarHeader />
                <TopNavRight {...navUpperRIghtProps}/>

                <NavSidebar {...navSidebarProps}/>
            </nav>
        )
    }
    packNavSideBarProps() {
        return {
            requestSegue: this.props.prepareForSegue,
            groups: this.props.groups
        }
    }

    packUpperRight() {
        return {
            requestSegue: this.props.prepareForSegue,
            username: this.props.username
        }
    }
}