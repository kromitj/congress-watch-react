class Body extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    };
    render() {
        return(
            <div id="page-wrapper">

                <div className="container-fluid">

                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">
                                Dashboard <small>- Homebase</small>
                            </h1>
                            <ol className="breadcrumb">
                                <li className="active">
                                    <i className="fa fa-dashboard"></i> Dashboard
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="alert alert-info alert-dismissable">
                                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                                <i className="fa fa-info-circle"></i>  <strong>Like Congress Observer?</strong> <a href="http://startbootstrap.com/template-overviews/sb-admin-2" className="alert-link">Sign-up</a> now and gain the ability to create groups and recieve updates on bills, committees and legislators
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}