class ErrorAlert extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    };
    render() {
        if (this.props.error != null) {
            return(
                <div className="row" id="error-alert">
                     <div className="col-lg-12">
                        <div className="alert alert-danger">
                            <span className="glyphicon glyphicon-exclamation-sign"></span> {this.props.error}
                        </div>
                    </div>
                </div>
            )            
        } else { return (<div id="error-alert"></div>)}
    }
    
}