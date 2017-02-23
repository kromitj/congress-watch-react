class NavSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render() {
        const groupSideBarProps = this.packGroupSideBarProps()
        return (
            <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav side-nav">                    
                    <DashboardSideBar requestSegue={this.props.requestSegue} />
                    <RoleSideBar requestSegue={this.props.requestSegue} />
                    <BillSideBar requestSegue={this.props.requestSegue} />
                    <CommitteeSideBar requestSegue={this.props.requestSegue} />
                    <GroupSideBar {...groupSideBarProps} />                    
                </ul>
            </div>
        )
    }

    packGroupSideBarProps() {
        return {
            requestSegue: this.props.requestSegue,
            groups: this.props.groups
        }
    }
}