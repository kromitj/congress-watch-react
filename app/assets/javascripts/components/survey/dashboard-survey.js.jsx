class SurveyDashboard extends React.Component {
    constructor(props) {
        super();
        this.state = {
            userResponse: ""
        }
        this.updateResponse = this.updateResponse.bind(this);
        this.submit = this.submit.bind(this)
    };
    render() {
        const id = "question-" + this.props.question.id
        if (true) {
            return(
                <div className="row">
                     <div className="col-lg-12">
                        <div className="alert alert-info alert-dismissable" id={id}>
                            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                            <form onSubmit={this.submit}>
                                <label for="firstName"><i className="fa fa-info-circle"></i> Question 1 of 1</label>
                                <p>{this.props.question.question}</p>
                                <textarea value={this.state.userResponse}  onChange={this.updateResponse} className="form-control" id="exampleTextarea" rows="3"></textarea>
                             
                                <input type="submit" value="Register" className="btn btn-info btn-block"></input>
                              </form>
                        </div>
                    </div>
                </div>
            )            
        } else { return (<div></div>)}
    }

    updateResponse(ev) {
        const updatedResponse = String(ev.target.value)
        this.setState({userResponse: updatedResponse} )
    }
    submit(ev) {
        ev.preventDefault(); 
        const userResponse = String(this.state.userResponse)
        this.props.subcribeToSubmit(this.props.question.id, userResponse);
    }
    
}