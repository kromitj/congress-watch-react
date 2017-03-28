// constants at bottom...

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            action: "dashboard",
            bodyContent: null,
            senatorShow: null,
            repShow: null,
            contentSortedBy: "lastname",
            error: null,
            groups: [],
            survey: null,
            username: 'Guest',
            userId: null,
        };
        this.prepareForSegue = this.prepareForSegue.bind(this)
        this.sortData = this.sortData.bind(this)
    };

    render() {
      const navProps = this.packNavProps()
      const bodyProps = this.packBodyProps()
      const survey = this.state.survey

        return(
             <div id="wrapper">
                <Nav {...navProps} />
                <SurveyContainer {...{survey: survey, userId: this.state.userId}} />
                <BodyContainer {...bodyProps}/>
            </div>
        )
    }

    prepareForSegue(segue, params=null) {
      this.setState({error: null})
      if ((this.state.action != "groupShow") && (segue == this.state.action)) { return false }
      var response = actions[segue](this, params)
      console.log(response)      
    }


    packNavProps() {
      return {
        prepareForSegue: this.prepareForSegue, 
        groups: this.state.groups,
        username: this.state.username
      }
    }

    packBodyProps() {
      console.log("packing body" + this.state.bodyContent)
      return {
        user: this.state.userId,
        dataType: this.state.action,
        data: this.state.bodyContent,
        groups: this.state.groups,
        sortData: this.sortData,
        prepareForSegue: this.prepareForSegue,
        error: this.state.error,
      }
    }

    sortData(sortBy) {
      if (sortBy == this.state.contentSortedBy) { 
        return false 
      }
      let contentCopy = Array.from(this.state.bodyContent)
      contentCopy.sort(function(a, b) {
                if (a[sortBy] < b[sortBy]) {
                  return -1;
                }
                if (a[sortBy] > b[sortBy]) {
                  return 1;
                }
                if (a["lastname"] < b["lastname"]) {
                  return -1;
                }
                if (a["lastname"] > b["lastname"]) {
                  return 1;
                }
                return 0
              });

      this.setState({
        bodyContent: contentCopy,
        contentSortedBy: sortBy
      })
    }
}

const actions = {
  groupableNew: function(that, groupParams) {
    const data = {userId: that.state.userId, groupId: groupParams.groupId, groupableId: groupParams.groupableId}
    const url = `/user/${that.state.userId}/groups/${groupParams.groupId}/group_items` 
    // const url = "/users/" + that.state.userId + "/groups/" + groupParams.groupId + "/group_items"
    $.ajax({
      url: url,
      type: 'POST',
      dataType: 'json',
      data: data,
      cache: false,
      success: function(data) {
      }.bind(that),
      error: function(xhr, status, err) {
        console.error(that.props.url, status, err.toString());
      }.bind(that)
    });        
  },
  filterRoles: function(that, filterParams) {
  //   const params = filterParams.split(" ")  
  //   let filteredCopy = Object.assign([], that.state.bodyContent)
  //   console.log(filteredCopy)
  //   params.forEach(function(param, filteredCopy) {
  //     const regex = new RegExp(param)
  //     filteredCopy.filter(function (el) {
  //       console.log(regex.test(el.lastname))
  //       regex.test(el.lastname) == true
  //     });
  //   })
    // that.setState({bodyContent: filteredCopy})
  },
  dashboard: function(that) {
    window.scrollTo(0,0)
    that.setState({action: "dashboard"})
  },
  signUp: function(that) {
    window.scrollTo(0,0)
    that.setState({action: "signUp"}) 
  },
  logIn: function(that) {
    window.scrollTo(0,0)
    that.setState({action: "logIn"}) 
  },
  logOut: function(that) {
    const data = {userId: that.state.userId}
    that.setState({action: "logOut"}) 
    $.ajax({
      url: "/session/logout",
      type: 'DELETE',
      dataType: 'json',
      cache: false,
      success: function(data) {
        window.scrollTo(0,0)
        that.setState({bodyContent: null,
          action: "dashboard", username: "Guest", userId: null, groups: []
        });
      }.bind(that),
      error: function(xhr, status, err) {
        console.error(that.props.url, status, err.toString());
      }.bind(that)
    });        
  },
  userNew: function(that, params) {
    const data = {user: params};
    console.log(data)
    $.ajax({
      url: "/users",
      type: 'POST',
      data: data,
      dataType: 'json',
      cache: false,
      success: function(data) {
        window.scrollTo(0,0)
        that.setState({bodyContent: null,
          action: "dashboard", username: data.username, userId: data.userId, survey: data.survey, error: null
        });
      }.bind(that),
      error: function(data) {
        that.setState({error: data.responseJSON.error})
        console.error(that.props.url, status, err.toString());
      }.bind(that)
    });        
  },
  sessionNew: function(that, params) {
    const data = {session: params};
    console.log(data)
    $.ajax({
      url: "/session",
      type: 'POST',
      data: data,
      dataType: 'json',
      cache: false,
      success: function(data) {
        window.scrollTo(0,0)
        that.setState({bodyContent: null,
          action: "dashboard", username: data.username, userId: data.userId, groups: data.groups, error: null
        });
      }.bind(that),
      error: function(data) {
        that.setState({error: data.responseJSON.error})
        console.error(that.props.url, status, err.toString());
      }.bind(that)
    });        
  },
  roleShow: function(that, roleId) {    
    $.ajax({
      url: "/legislators/" + roleId,
      dataType: 'json',
      cache: false,
      success: function(data) {
        window.scrollTo(0,0)
        that.setState(
          {
            action: "roleShow", bodyContent: data.role
          }
        );
      }.bind(that),
      error: function(xhr, status, err) {
        console.error(that.props.url, status, err.toString());
      }.bind(that)
    });     
  },
  senatorIndex: function(that) {
       if (that.state.senatorIndex !=  null) {
         that.setState({
          action: "senatorIndex", bodyContent: that.state.senatorIndex
         })
       } else {
         $.ajax({
          url: "/legislators",
          data: {branch: "senator"},
          dataType: 'json',
          cache: false,
          success: function(data) {
            window.scrollTo(0,0)
            const senatators = data.legislators
            that.setState(
              {
                senatorIndex: senatators, bodyContent: senatators, action: "senatorIndex", 
              }
            );
          }.bind(that),
          error: function(xhr, status, err) {
            console.error(that.props.url, status, err.toString());
          }.bind(that)
        });           
       }
  },
  repIndex: function(that) {
        if (that.state.repIndex !=  null) {
         that.setState({
          action: "repIndex", bodyContent: that.state.repIndex
         })
       } else {
        $.ajax({
          url: "/legislators",
          data: {branch: "rep"},
          dataType: 'json',
          cache: false,
          success: function(data) {
            window.scrollTo(0,0)
            const reps = data.legislators
            that.setState({
                repIndex: reps, bodyContent: reps, action: "repIndex"
            });
            console.log(data)
          }.bind(that),
          error: function(xhr, status, err) {
            console.error(that.props.url, status, err.toString());
          }.bind(that)
        }); 
      }          
  },
  groupNew: function(that, params) {
    if (that.state.userId == null) {
      window.scrollTo(0,0)
      that.setState({action: "signUp", error: "Log-in or sign-Up to gain the ability to create groups"})
    } else { that.setState({action: "groupNew"}) }    
  },
  groupCreate: function(that, params) {
    const url = "users/" + that.state.userId + "/groups"
    const data = {name: params.name, user_id: that.state.userId}
    $.ajax({
      url: url,
      data: {group: data},
      type: 'POST',
      dataType: 'json',
      cache: false,
      success: function(data) {
        window.scrollTo(0,0)
        that.setState({groups: data.groups, action: "dashboard"});
      }.bind(that),
      error: function(xhr, status, err) {
        console.error(that.props.url, status, err.toString());
      }.bind(that)
    });
  },
  groupShow: function(that, groupId) {
    const url = "/users/"+ that.state.userId + "/groups/" + groupId
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json',
      cache: false,
      success: function(data) { 
      window.scrollTo(0,0)      
        that.setState({bodyContent: data.group, action: "groupShow"});
      }.bind(that),
      error: function(xhr, status, err) {
        console.error(that.props.url, status, err.toString());
      }.bind(that)
    });
  }
}