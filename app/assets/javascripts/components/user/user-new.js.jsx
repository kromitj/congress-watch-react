class UserNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	formData: {
        		f_name: '',
        		l_name: '',
        		email: '',
        		username: '',
        		password: '',
                survey_participant: false
        	}
        }
        this.updateInput = this.updateInput.bind(this);
        this.submit = this.submit.bind(this)
    };

    render() {
        
        return (
            <div className="form-group col-sm-12 col-md-offset-2 col-md-8">
                        <ErrorAlert error={this.props.error} />
			          <form onSubmit={this.submit}>
			          	<label for="firstName">First Name</label>
					    <input value={this.state.formData.f_name} onChange={this.updateInput} type="text" className="form-control" id="f_name" placeholder="Jane"></input>
			         
			          	<label for="lastName">Last Name</label>
					    <input value={this.state.formData.l_name} onChange={this.updateInput} type="text" className="form-control" id="l_name" placeholder="Doe"></input>
			          
			            <label for="email">Email</label>
					    <input value={this.state.formData.email} onChange={this.updateInput} type="email" className="form-control" id="email" placeholder="janeDoe111@gmail.com"></input>

			          	<label for="userName">Username</label>
					    <input value={this.state.formData.username} onChange={this.updateInput} type="text" className="form-control" id="username" placeholder="janeDoe111"></input>
			          
			          	<label for="password">Password</label>
					    <input value={this.state.formData.password} onChange={this.updateInput} type="password" className="form-control" id="password" placeholder="********"></input>

                        <label for="password">Do you want to participate in a User-Experience Survey</label>
                        <div className="checkbox">
                            <label>
                              <input value={this.state.formData.password} onChange={this.updateInput} type="checkbox" id="survey_participant"></input>
                            </label>
                          </div>

					    <input type="submit" value="Register" className="btn btn-info btn-block"></input>
			          </form>
			</div>
        )
    }

    updateInput(ev) {
        const target = ev.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = $(ev.target).attr('id')
    	let newFormData = Object.assign({}, this.state.formData);
    	newFormData[name] = value
    	this.setState({ formData: newFormData } );
    }

    submit(ev) {
    	ev.preventDefault(); 
        const formData = Object.assign({}, this.state.formData)
        console.log(formData)
        this.props.subscribeToDispatcher("userNew", formData);
    }
    
}