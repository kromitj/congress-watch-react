class BillShow extends React.Component {
  constructor(props) {
    super();
    this.state = {

    }
  }

  render() {
    const party = "info-block-" + this.props.sponsor_party + " block-info clearfix"
    return (
    <div className="row">

      <div className="col-md-12 col-lg-8">           
        <div className="panel panel-default">
          <div className="panel-heading">Main Info</div>
          <div className="panel-body">
            <h1>{this.props.bill} {this.props.title}</h1>
            <BillStatusBar {...{status: this.props.status}} />
          </div>
        </div>
      </div>

        <div className="col-md-12 col-lg-4">
          <div className="panel panel-default">
            <div className="panel-heading">Sponsor Info</div>
            <div className="panel-body">
              <div className={party}><img title="profile image" className="img-circle img-responsive center-block" src={this.props.sponsor_img}></img></div>
              <h1 className="text-center">{this.props.sponsor}</h1>                    
              <br></br>
              <br></br>
            </div>
          </div>
        </div>


      </div> 
    );
  }
  
}