// constants at bottom...

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            action: "dashboard",
            bodyContent: null,
            groups: [],
            contentSortedBy: "lastname",
            username: 'Guest',
            userId: null,
            history: []
        };
        this.prepareForSegue = this.prepareForSegue.bind(this)
        this.sortData = this.sortData.bind(this)
    };

    render() {
      navProps = this.packNavProps()
      bodyProps = this.packBodyProps()
        return(
             <div id="wrapper">
                <Nav {...navProps} />
                <BodyContainer {...bodyProps}/>
            </div>
        )
    }

    prepareForSegue(segue, params=null) {
      if (segue == this.state.action) { return false }
      this.historyNew();
      var response = actions[segue](this, params)
      this.setState({
        action: segue
      })
    }

    historyNew() {
      let newHistory = Object.assign([], this.state.history)      
      newHistory.push(this.state)
      delete newHistory[newHistory.length-1].history
      delete newHistory[newHistory.length-1].bodyContent
      console.log("new History")
      console.log(newHistory)
      this.setState({history: newHistory})
    }


    packNavProps() {
      return {
        prepareForSegue: this.prepareForSegue, 
        groups: this.state.groups,
        username: this.state.username
      }
    }

    packBodyProps() {
      return {
        dataType: this.state.action,
        data: this.state.bodyContent,
        sortData: this.sortData,
        prepareForSegue: this.prepareForSegue
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
  
  dashboard: function(that) {
    that.setState({action: "dashboard"})
  },
  signUp: function(that) {
    that.setState({action: "signUp"}) 
  },
  logIn: function(that) {
    console.log("inside login")
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
        console.log(data)
        that.setState({bodyContent: null,
          action: "dashboard", username: "Guest", userId: null, history: [], groups: []
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
        console.log(data)
        that.setState({bodyContent: null,
          action: "dashboard", username: data.username, userId: data.userId
        });
      }.bind(that),
      error: function(xhr, status, err) {
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
        that.setState({bodyContent: null,
          action: "dashboard", username: data.username, userId: data.userId, groups: data.groups
        });
      }.bind(that),
      error: function(xhr, status, err) {
        console.error(that.props.url, status, err.toString());
      }.bind(that)
    });        
  },
  roleShow(that, roleId) {
    $.ajax({
      url: "/legislators/" + roleId,
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data)
        that.setState(
          {
            // action: "dashboard"
          }
        );
      }.bind(that),
      error: function(xhr, status, err) {
        console.error(that.props.url, status, err.toString());
      }.bind(that)
    });     
  },
  senatorShow: function(that) {
     $.ajax({
      url: "/legislators",
      data: {branch: "senator"},
      dataType: 'json',
      cache: false,
      success: function(data) {
        that.setState(
          {
            bodyContent: data.legislators
          }
        );
      }.bind(that),
      error: function(xhr, status, err) {
        console.error(that.props.url, status, err.toString());
      }.bind(that)
    });           
  },
  repShow: function(that) {
    $.ajax({
      url: "/legislators",
      data: {branch: "rep"},
      dataType: 'json',
      cache: false,
      success: function(data) {
        that.setState({bodyContent: data.legislators
        });
        console.log(data)
      }.bind(that),
      error: function(xhr, status, err) {
        console.error(that.props.url, status, err.toString());
      }.bind(that)
    });           
  },
  groupNew: function(that, params) {
    that.setState({action: "groupNew"})
  },
  groupCreate: function(that, params) {
    const url = "users/" + that.state.userId + "/groups"
    const data = {name: params.name, group_type: params.groupType, user_id: that.state.userId}
    $.ajax({
      url: url,
      data: {group: data},
      type: 'POST',
      dataType: 'json',
      cache: false,
      success: function(data) {
        that.setState({groups: data.groups, action: "dashboard"});
      }.bind(that),
      error: function(xhr, status, err) {
        console.error(that.props.url, status, err.toString());
      }.bind(that)
    });
  }
}