class Body extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
        this.onAlertClick = this.onAlertClick.bind(this)
    };
    render() {
        return(
            <div id="page-wrapper">

                <div className="container-fluid">

                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">
                                {this.props.header} <small>- {this.props.subHeader}</small>
                            </h1>
                            <ol className="breadcrumb">
                                <li className="active">
                                    <i className="fa fa-dashboard"></i> {this.props.cookieCrumb}
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="alert alert-info alert-dismissable">
                                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                                <i className="fa fa-info-circle"></i>  <strong>Like Congress Observer?</strong> <a href="#" className="alert-link" onClick={this.onAlertClick}>Sign-up</a> now and gain the ability to create groups and recieve updates on bills, committees and legislators
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            { this.props.content }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    onAlertClick(ev) {
        ev.preventDefault();   
        this.props.prepareForSegue("signUp");
    }
}