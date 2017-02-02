class Legislator extends React.Component {
  constructor(props) {
    super();
    this.state = {
      legislator: props.legislator,
      fields: ["first_name", "last_name", "state", "party", "id"],
      imageURI: ""
    }
    this.hangleChange = this.handleChange.bind( this )
  }

   handleChange( value ) {;
    console.log(value)
    this.setState( { imageURI: "https://theunitedstates.io/images/congress/225x275/" + this.state.legislator.id + ".jpg" , legislator: this.props.legislator} ) 
  }



  render() {
    console.log(this.state.imageURI)
     const legislatorRow = this.state.fields.map((field) =>
      <LegislatorField value={ this.props.legislator[field] } />
    )
    return (
       <div className="card">
        <div className="card-header" role="tab" id="headingOne">
          <h5 className="mb-0">
            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={ () => this.handleChange()}>
              { legislatorRow}
            </a>
          </h5>
        </div>
        <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne">
          <div className="card-block">
            <img src={this.state.imageURI} alt="..." className="img-thumbnail"></img>
          </div>
        </div>
      </div>
    );
  }
}