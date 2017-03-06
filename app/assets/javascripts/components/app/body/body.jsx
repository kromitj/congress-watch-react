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
                                {this.props.header} <small>- {this.props.subHeader}</small>
                            </h1>
                            <ol className="breadcrumb">
                                <li className="active">
                                    <i className="fa fa-dashboard"></i> {this.props.cookieCrumb}
                                </li>
                            </ol>
                        </div>
                    </div>

                   <SignUpAlert {...{user:this.props.user, subscribeToDispatcher: this.props.prepareForSegue}} />

                    <div className="row">
                        <div className="col-lg-12">
                            { this.props.content }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}