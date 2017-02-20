class DashboardBreadCrumb extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    };
    render() {
        return(
            <ol className="breadcrumb">
                <li className="active">
                    <i className="fa fa-dashboard"></i>
                </li>
            </ol>
    )
    }
}