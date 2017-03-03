// props {role, subcribeToActionDispatcher}

class RoleShow extends React.Component {
  constructor(props) {
    super();
    this.state = {

    }
  }

  render() {
    return (
    <div className="row">
        <div className="col-md-12 col-lg-4">
            <img title="profile image" className="img-circle img-responsive center-block" src={this.props.role.img}></img>
            <h1 className="text-center">{this.props.role.name}</h1>
            <h3 className="text-center">{this.props.role.desc}</h3>
           <button type="button" className="btn btn-success">+ Group</button>  <button type="button" className="btn btn-info">Follow</button>
            <br></br>
            <ul className="list-group">
                <li className="list-group-item text-muted" >Profile</li>
                <li className="list-group-item text-right"><span className="pull-left"><strong className="">Role</strong></span>{this.props.role.role}</li>
                <li className="list-group-item text-right"><span className="pull-left"><strong className="">State</strong></span>{this.props.role.state}</li>
                <li className="list-group-item text-right"><span className="pull-left"><strong className="">Party</strong></span>{this.props.role.party}</li>
                <li className="list-group-item text-right"><span className="pull-left"><strong className="">Assumed Office</strong></span>{this.props.role.assumed_office}</li>
                <li className="list-group-item text-right"><span className="pull-left"><strong className="">Adress</strong></span>{this.props.role.address}</li>
            </ul>
            <div className="panel panel-default">
                <div className="panel-heading">Website <i className="fa fa-link fa-1x"></i></div>
                <div className="panel-body"><a href="http://bootply.com" className="">{this.props.role.website}</a></div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">Social Media</div>
                <div className="panel-body">  <i className="fa fa-facebook fa-2x"></i>  <i className="fa fa-github fa-2x"></i> 
                    <i className="fa fa-twitter fa-2x"></i> <i className="fa fa-pinterest fa-2x"></i>  <i className="fa fa-google-plus fa-2x"></i>

                </div>
            </div>
        </div>
        
        <div className="col-md-12 col-lg-8">
            <div className="panel panel-default">
                <div className="panel-heading">{this.props.role.name}'s Bio</div>
                <div className="panel-body">{this.props.role.wiki_intro}</div>
            </div>
            
            <div className="panel panel-default target">
                <div className="panel-heading" >Recent News</div>
                    <div className="panel-body">
                        <div className="row">
                    <div className="col-md-4">
                      <div className="thumbnail">
                        <div className="article-thumbnail"><img className="center-block" alt="300x200" width="300" src="http://i2.cdn.cnn.com/cnnnext/dam/assets/121103050436-stock-tammy-baldwin-story-top.jpg"></img></div>
                        <div className="caption">
                          <h3>Wisconsin's Tammy Baldwin is first openly gay person elected to ...</h3>
                          <p>Nov 7, 2012 ... Tammy Baldwin made history Tuesday night -- twice. ... the first openly gay \npolitician, and first Wisconsin woman, elected to the U.S. Senate.</p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="thumbnail">
                        <div className="article-thumbnail"><img className="center-block" alt="300x200" width="300" src="http://img.huffingtonpost.com/asset/2000_1000/5890eed01b0000250004d971.jpeg?cache=jg9bxlqcxn"></img></div>
                        <div className="caption">
                          <h3>Tammy Baldwin's Sexual Orientation Attacked By Group Trying To ...e</h3>
                          <p>Jan 31, 2017 ... A super PAC trying to draft Milwaukee County Sheriff David Clarke for a Senate \nbid is attacking the sexual orientation of Sen. Tammy Baldwin...</p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="thumbnail">
                        <div className="article-thumbnail"><img className="center-block" alt="300x200" width="300" src="http://i.huffpost.com/gen/836250/images/o-TAMMY-BALDWIN-ELECTION-RESULTS-facebook.jpg"></img></div>
                        <div className="caption">
                          <h3>Tammy Baldwin Election Results: Democrat Becomes First Openly ...e</h3>
                          <p>Nov 7, 2012 ... Tammy Baldwin (D-Wis.) beat Republican Tommy Thompson for Wisconsin's \nopen U.S. Senate seat on Tuesday, becoming the nation's first op.</p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
 
    )
  }
  
}