class GroupNew extends React.Component {
    constructor(props) {
        super();
        this.state = {
            formData: {
                name: "",
                groupType: ""
            }
        }
        this.updateInput = this.updateInput.bind(this);
        this.submit = this.submit.bind(this)
    };
    render() {
        
        return(
             <div className="form-group">
              <form onSubmit={this.submit}>
                <label for="firstName">Group Name</label>
                <input value={this.state.formData.name} onChange={this.updateInput} type="text" className="form-control" id="name" placeholder="Demirats"></input>
             
                <label for="lastName">Group Type</label>
                <input value={this.state.formData.groupType} onChange={this.updateInput} type="text" className="form-control" id="groupType" placeholder="Senators"></input>
                
                <input onClick={this.updateInput} className="btn btn-primary" id="groupType" type="button" value="Senators"></input>
                <input onClick={this.updateInput} className="btn btn-primary" id="groupType" type="button" value="Representative"></input>
                <input onClick={this.updateInput} className="btn btn-primary" id="groupType" type="button" value="Bills"></input>
                <input onClick={this.updateInput} className="btn btn-primary" id="groupType" type="button" value="Committees"></input>


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