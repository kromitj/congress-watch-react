class RoleProfile extends React.Component {
  constructor(props) {
    super();
    this.state = {

    }
  }

  render() {
    return (
    <div>
      <div className={party}>
        <img title="profile image" className="img-circle img-responsive center-block" src={this.props.role.img}></img>
      </div>
      <h1 className="text-center">{this.props.name}</h1>
      <h3 className="text-center">{this.props.desc}</h3>
      <div className="row">
        <div className="col-xs-offset-3 col-xs-9">
          <button className={this.props.groupBtn} type="button">+ Group</button>
          <button data-toggle="dropdown" className={groupBtnDropDown} type="button"><span className="caret"></span></button>
          <ul className="dropdown-menu">
            { this.props.groupList }
          </ul>
          <button type="button" className="btn btn-info">Follow</button>
        </div>
      </div>
    </div>
    )
  }  
}
