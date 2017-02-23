class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render() {
        const navSidebarProps = this.packNavSideBarProps()
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <NavbarHeader />
                <TopNavRight />

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
}