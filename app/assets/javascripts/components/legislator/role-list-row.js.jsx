class RoleListRow extends React.Component {
  constructor(props) {
    super();
    this.state = {

    }
    this.onRoleShow = this.onRoleShow.bind(this)
  }

  render() {
    const party = "info-block-" + this.props.role.party + " block-info clearfix" 
    const fullname = this.props.role.firstname + " " + this.props.role.lastname
    return (
      <div className="role-item items col-xs-12 col-md-8 col-md-offset-2 clearfix">
        <div className={party} >
          <div className="square-box pull-left">
              <a href="#" onClick={this.onRoleShow}><img width="100" className="media-object img-responsive img-circle"src={this.props.role.img}></img></a>
          </div>
          <p className="role-item-fullname">{ fullname }</p>
          <p className="role-item-desc">{ this.props.role.desc}</p>
          <p>{this.props.role.party}</p>
          <span></span>
        </div>
      </div>
    );
  }
  onRoleShow(ev) {
    ev.preventDefault();   
    this.props.subscribeToDispatcher("roleShow", this.props.role.id);
  }
}