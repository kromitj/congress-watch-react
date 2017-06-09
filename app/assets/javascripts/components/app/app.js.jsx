// constants at bottom...

class App extends React.Component {

  constructor(props) {
    super();
    console.log(props)
    this.state = {
      action: props.action,
      billShow: null,
      billShowId: null,
      bodyContent: props.bodyContent,
      breadCrumbs: props.breadCrumbs,
      dashboard: props.bodyContent,
      senatorStore: {
        contentSortedBy: "lastname",
        contentOrder: "ascending",  
      },
      contentSortedBy: "lastname",
      contentOrder: "ascending",
      error: null,
      groups: [],
      repIndex: null,
      roleShowId: null,
      senatorIndex: null,
      survey: null,
      username: 'Guest',
      userId: null
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

  // the delegator that handles all action requests; seque is the action type and params is any addictional data needed for the actuon to be called
  prepareForSegue(segue, params=null) {
    this.setState({error: null})

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
    console.log("packing body" + this.state.breadCrumbs)
    return {
      breadCrumbs: this.state.breadCrumbs,
      data: this.state.bodyContent,
      dataType: this.state.action,
      error: this.state.error,
      groups: this.state.groups,
      prepareForSegue: this.prepareForSegue,
      sortData: this.sortData,
      user: this.state.userId,
      sortOrderAndBy: {by: this.state.contentSortedBy, order: this.state.contentOrder}
    }
  }

  sortData(sortBy) {
    console.log(sortBy)
    let contentCopy = Array.from(this.state.bodyContent)
    let sortByOrder = null
    if (sortBy == this.state.contentSortedBy) { 
      contentCopy.reverse();
      sortByOrder = this.flipOrder()
    } else if (sortBy == "view_count") {
      sortByOrder = "ascending"
      contentCopy.sort(function(a, b) {
      if (a[sortBy] < b[sortBy]) {
        return 1;
      }
      if (a[sortBy] > b[sortBy]) {
        return -1;
      }
      if (a["lastname"] < b["lastname"]) {
        return -1;
      }
      if (a["lastname"] > b["lastname"]) {
        return 1;
      }
      return 0
    });
    } else {
      sortByOrder = "ascending"
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
    }
    this.setState({
      bodyContent: contentCopy,
      contentSortedBy: sortBy,
      contentOrder: sortByOrder
    })
  }

  flipOrder() {
    if (this.state.contentOrder == "ascending")  {
      return "descending"
    } else {
      return "ascending"
    }
  }

}

// object that handles all callable actions. Deals with state change and communitating with the server 
const actions = {
  groupableNew: function(that, groupParams) {
    const data = {userId: that.state.userId, groupId: groupParams.groupId, groupableId: groupParams.groupableId}
    const url = `/users/${that.state.userId}/groups/${groupParams.groupId}/group_items` 
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
    const dashboardBody = Object.assign([], that.state.dashboard)
    let newBreadCrumbs = Object.assign([])
    newBreadCrumbs.unshift("Dashboard")
    that.setState({action: "dashboard", breadCrumbs: newBreadCrumbs, bodyContent: dashboardBody})
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
        const dashboardContent = that.state.dashboard
        that.setState({bodyContent: dashboardContent,
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
    $.ajax({
      url: "/users",
      type: 'POST',
      data: data,
      dataType: 'json',
      cache: false,
      success: function(data) {
        window.scrollTo(0,0)
        const dashboardContent = that.state.dashboard
        that.setState({bodyContent: dashboardContent,
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
        const dashboardContent = that.state.dashboard
        that.setState({bodyContent: dashboardContent,
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
    if (roleId == null) {
      roleId = that.state.roleShowId
    }
    let newBreadCrumbs = Object.assign([], that.state.breadCrumbs)

    $.ajax({
      url: "/legislators/" + roleId,
      dataType: 'json',
      cache: false,
      success: function(data) {
        newBreadCrumbs[2] = data.role.name
        window.scrollTo(0,0)
        that.setState(
          {
            action: "roleShow", bodyContent: data.role, breadCrumbs: newBreadCrumbs, roleShowId: roleId
          }
        );
      }.bind(that),
      error: function(xhr, status, err) {
        console.error(that.props.url, status, err.toString());
      }.bind(that)
    });     
  },
  billShow: function(that, billId) {
    if (billId == null ) {
      billId = that.state.billShowId
    }

    let newBreadCrumbs = Object.assign([], that.state.breadCrumbs)

     $.ajax({
      url: "/bills/" + billId,
      data: null,
      dataType: 'json',
      cache: false,
      success: function(data) {
        window.scrollTo(0,0)
        const bill = data.bill
        newBreadCrumbs[2] = bill.bill;
        that.setState(
          {
            billShow: bill, bodyContent: bill, action: "billShow", breadCrumbs: newBreadCrumbs
          }
        );
      }.bind(that),
      error: function(xhr, status, err) {
        console.error(that.props.url, status, err.toString());
      }.bind(that)
    });   
  },
  billIndex: function(that, page) {
    // send sortby and sortOrder and filterQuery so all content is ordered and filtered, send an ajax request every n amount of chars(3)
    let newBreadCrumbs = Object.assign([], ["Dashboard", "Bills"])
    newBreadCrumbs[1] = "Bills"
    if (page == null) {
      const bills = that.state.billIndex
      that.setState({
        action: "billIndex", bodyContent: bills
      })
    } else {
       $.ajax({
        url: "/bills",
        data: {page: page},
        dataType: 'json',
        cache: false,
        success: function(data) {
          const bills = data.bills
          that.setState(
            {
              billIndex: bills, bodyContent: bills, action: "billIndex", breadCrumbs: newBreadCrumbs
            }
          );
        }.bind(that),
        error: function(xhr, status, err) {
          console.error(that.props.url, status, err.toString());
        }.bind(that)
      });       
    }
  },
  senatorIndex: function(that) {
    let newBreadCrumbs = Object.assign([], ["Dashboard", "Senators"])
    // newBreadCrumbs[1] = "Senators"
     if (that.state.senatorIndex !=  null) {        
       that.setState({
        action: "senatorIndex", bodyContent: that.state.senatorIndex, breadCrumbs: newBreadCrumbs
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
              senatorIndex: senatators, bodyContent: senatators, action: "senatorIndex", breadCrumbs: newBreadCrumbs
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
    let newBreadCrumbs = Object.assign([], ["Dashboard", "Representatives"])
    if (that.state.repIndex !=  null) {
      that.setState({
        action: "repIndex", bodyContent: that.state.repIndex, breadCrumbs: newBreadCrumbs
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
            repIndex: reps, bodyContent: reps, action: "repIndex", breadCrumbs: newBreadCrumbs
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