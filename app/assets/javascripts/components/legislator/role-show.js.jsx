class RoleShow extends React.Component {
  constructor(props) {
    super();
    this.state = {

    }
    this.onAddToGroup = this.onAddToGroup.bind(this)
    this.groupList = this.groupList.bind(this)
  }

  render() {
    const partyLong = { "D": "Democrate", "R": "Republican", "I": "Independent"}
    const website = this
    const party = "info-block-" + partyLong[this.props.role.party] + " block-info clearfix"
    const groupList = this.groupList(this)
    let groupBtn = "btn btn-default"
    let groupBtnDropDown = "btn btn-default dropdown-toggle"
    if (this.props.user == null) {
      groupBtn = groupBtn + " disabled"
      groupBtnDropDown = groupBtnDropDown + " disabled"
    } 
    return (
    <div className="row">
        <div className="col-md-12 col-lg-4">
            <div className={party}><img title="profile image" className="img-circle img-responsive center-block" src={this.props.role.img}></img></div>
            <h1 className="text-center">{this.props.role.name}</h1>
            <h3 className="text-center">{this.props.role.desc}</h3>
           <div className="row"><div className="col-xs-offset-3 col-xs-9">
               <button className={groupBtn} type="button">+ Group</button>
                <button data-toggle="dropdown" className={groupBtnDropDown} type="button"><span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                  { groupList }
                </ul>
                          <button type="button" className="btn btn-info">Follow</button>
            </div></div>            
            <br></br>
            <br></br>

            < RoleSocialMediaList {...{website: this.props.role.website, twitter: this.props.role.twitterid, address: this.props.role.address}} />
        </div>
        
        <div className="col-md-12 col-lg-8">            
            <div className="panel panel-default">
                <div className="panel-heading">{this.props.role.name}&#39;s Latest Tweet</div>
                <div className="panel-body"><RoleTweet tweet={this.props.role.last_tweet} /></div>
            </div> 
            
            <div className="panel panel-default target">
              <div className="panel-heading" >Recent News</div>
              <div className="panel-body">
                <div className="row">
                  < RoleArticleCarousel />                 
                </div>
              </div>
            </div>

            <div className="panel panel-default">
                <div className="panel-heading">{this.props.role.name}&#39;s Bio</div>
                <div className="panel-body">{this.props.role.wiki_intro}</div>
            </div>
              < RoleBillsList {...{bills: this.props.role.bills}}/>    
              <ArticleTable {...{data: this.props.role.articles}} />
        </div>
    </div>
 
    )
  }

  onAddToGroup(ev) {
    ev.preventDefault();
    const groupId = ev.target.attributes.getNamedItem("data").value
    this.props.subscribeToDispatcher("groupableNew", {groupId: groupId, groupableId: this.props.role.id});
  }

  groupList(that) {
    return roles = this.props.groups.map(function(group) {            
            return <li key={group.id} keyProp={group.id}><a href="#" onClick={that.onAddToGroup} data={group.id}>{group.name}</a></li>;
        });
  }
  
}