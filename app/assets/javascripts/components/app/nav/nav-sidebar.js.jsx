class NavSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render() {
        return (
            <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav side-nav">                    
                    <DashboardSideBar requestSegue={this.props.requestSegue} />
                    <RoleSideBar requestSegue={this.props.requestSegue} />
                    <BillSideBar requestSegue={this.props.requestSegue} />
                    <CommitteeSideBar requestSegue={this.props.requestSegue} />
                    <GroupSideBar requestSegue={this.props.requestSegue} />                    
                </ul>
            </div>
        )
    }
}