class UserNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	formData: {
        		f_name: 'Jane',
        		l_name: 'Doe',
        		email: 'janeDoe111@gmail.com',
        		username: 'janeDoe111',
        		password: 'password'
        	}
        }
        this.updateInput = this.updateInput.bind(this);
        this.submit = this.submit.bind(this)
    };

    render() {
        
        return (
            <div className="form-group">
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
					    <input type="submit" value="Register" className="btn btn-info btn-block"></input>
			          </form>
			</div>
        )
    }

    updateInput(ev) {
    	const field = $(ev.target).attr('id')
    	console.log(field)
    	let newFormData = Object.assign({}, this.state.formData);
    	newFormData[field] = ev.target.value
    	console.log(newFormData)
    	this.setState({ formData: newFormData } );
    }

    submit(ev) {
    	const formData = Object.assign({}, this.state.formData)
    	console.log(formData)
    	ev.preventDefault(); 
        this.props.requestSegue("userNew", formData);
    }
    
}