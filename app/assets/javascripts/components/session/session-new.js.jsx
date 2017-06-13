class SessionNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {                
                username: 'kromitj',
                password: 'Password1'
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
        this.props.subscribeToDispatcher("sessionNew", formData);
    }
    
}