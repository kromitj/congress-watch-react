class SignUpAlert extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
        this.onAlertClick = this.onAlertClick.bind(this)
    };
    render() {
        if (this.props.user == null) {
            return(
                <div className="row">
                     <div className="col-lg-12">
                        <div className="alert alert-info alert-dismissable">
                                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                                <i className="fa fa-info-circle"></i>  <strong>Like Congress Observer?</strong> <a href="#" className="alert-link" onClick={this.onAlertClick}>Sign-up</a> now and gain the ability to create groups and recieve updates on bills, committees and legislators
                            </div>
                    </div>
                </div>
            )            
        } else { return (<div></div>)}
    }

    onAlertClick(ev) {
        ev.preventDefault();   
        this.props.subscribeToDispatcher("signUp");
    }
    
}