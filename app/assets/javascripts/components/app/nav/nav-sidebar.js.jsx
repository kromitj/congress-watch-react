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
                    <DashboardSideBar />
                    <RoleSideBar />
                    <BillSideBar />
                    <CommitteeSideBar />
                    <GroupSideBar />                    
                </ul>
            </div>
        )
    }
}