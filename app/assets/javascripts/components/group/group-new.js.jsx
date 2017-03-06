class GroupNew extends React.Component {
    constructor(props) {
        super();
        this.state = {
            formData: {
                name: ""
            }
        }
        this.updateInput = this.updateInput.bind(this);
        this.submit = this.submit.bind(this)
    };
    render() {
        
        return(
             <div className="form-group col-sm-12 col-md-offset-2 col-md-8">
              <form onSubmit={this.submit}>
                <label for="firstName">Group Name</label>
                <input value={this.state.formData.name} onChange={this.updateInput} type="text" className="form-control" id="name" placeholder="Demirats"></input>
             
                <input type="submit" value="Register" className="btn btn-info btn-block"></input>
              </form>
            </div>
        )
    }

    updateInput(ev) {
        const field = $(ev.target).attr('id')
        let newFormData = Object.assign({}, this.state.formData);
        newFormData[field] = ev.target.value
        this.setState({ formData: newFormData } );
    }

    submit(ev) {
        const formData = Object.assign({}, this.state.formData)
        console.log(formData)
        ev.preventDefault(); 
        this.props.subscribeToDispatcher("groupCreate", formData);
    }

    
}