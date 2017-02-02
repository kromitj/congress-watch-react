class Legislator extends React.Component {
  constructor(props) {
    super();
    this.state = {
      legislator: props.legislator,
      fields: ["first_name", "last_name", "state", "party", "id"]
    }
  }

  render() {
     const legislatorRow = this.state.fields.map((field) =>
        <LegislatorField value={ this.props.legislator[field] } />
    )
    return (
       <div className="card">
        <div className="card-header" role="tab" id="headingOne">
          <h5 className="mb-0">
            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Collapsible Group Item #1
            </a>
          </h5>
        </div>

        <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne">
          <div className="card-block">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
    );
  }
}