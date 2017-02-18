class SearchBar extends React.Component {
    constructor(props) {
        super();
        this.state = {
            input: ''
        };
        this.updateInput = this.updateInput.bind(this);
        this.submit = this.submit.bind(this)
    };

    render() {
        return(
            <form className="row" onSubmit={this.submit}>
                <div class="input-group">
                  <input value={this.state.input} onChange={this.updateInput} type="text" className="form-control" aria-describedby="basic-addon1"></input>
                </div>              
            </form>
        )
    };

    submit(ev) {
        ev.preventDefault();
     
        this.props.onSend(this.state.input);
     
        this.setState({
          input: ''
        });
      };

  updateInput(ev) {
    this.setState({input: ev.target.value });
  }
}


