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
            <form onSubmit={this.submit}>
                 <input value={this.state.input} onChange={this.updateInput} type="text" />
                <input type="submit" value="Send" />
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


