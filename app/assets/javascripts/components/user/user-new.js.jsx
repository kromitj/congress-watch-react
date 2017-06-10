class UserNew extends React.Component {
    constructor(props) {
        super(props);
        this.errorClasses = {true: "has-success", false: "has-error"}
        this.state = {
        	formData: {
        		f_name: '',
        		l_name: '',
        		email: '',
        		username: '',
        		password: '',
                rePassword: '',
                survey_participant: false
        	}
        }
        this.updateInput = this.updateInput.bind(this);
        this.submit = this.submit.bind(this)
        this.onChange = this.onChange.bind(this)
    };

    render() {
        const surveyTitle = { "false": "No", "true": "Yes"}
        const surveySelection = surveyTitle[this.state.formData.survey_participant]
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

                        <UsernameField {...{value: this.state.formData.username, onChange: this.onChange, errorClasses: this.errorClasses}}/>
			            
                        <PasswordField {...{value: this.state.formData.password, onChange: this.onChange, errorClasses: this.errorClasses}}/>
                        <PasswordCopyField {...{value: this.state.formData.rePassword, passwordValue: this.state.formData.password, onChange: this.onChange, errorClasses: this.errorClasses}}/>

                        <label for="survey">Do you want to participate in a User-Experience Survey</label>
                        <div className="checkbox">
                            <label>
                              <input title={surveySelection} onChange={this.updateInput} type="checkbox" id="survey_participant"></input>
                                <span>{surveySelection}</span>
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
        const fieldIsValid = this.fieldIsValid(name, value)
    	newFormData[name] = value
    	this.setState({ formData: newFormData } );
    }

    onChange(field, value) {
        let newFormData = Object.assign({}, this.state.formData);

        newFormData[field] = value
        this.setState({ formData: newFormData } );
    }

    submit(ev) {
    	ev.preventDefault(); 
        const formData = Object.assign({}, this.state.formData)
        console.log(formData)
        this.props.subscribeToDispatcher("userNew", formData);
    }

    fieldIsValid(fieldName, fieldValue) {
        switch(fieldName) {
            case "password":
                return this.passwordIsValid(fieldValue)
                break;
             case "username":
                return this.usernameIsValid(fieldValue)
                break;   
            default:
                return false
        }
    }

    usernameIsValid(fieldValue) {
        const cantContain = /[&=+<>,]/
        const errorClasses = {true: "has-success", false: "has-error"}
        const doesntContainSpecialChar = cantContain.test(fieldValue)
        alert(errorClasses[doesntContainSpecialChar])
        return this.errorClasses[doesntContainSpecialChar]

    }

    passwordIsValid(fieldValue) {
       const isValid = fieldValue.length >= 8 
       return this.errorClasses[isValid]
    }
    
}