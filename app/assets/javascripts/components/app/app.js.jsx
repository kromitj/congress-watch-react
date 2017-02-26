// constants at bottom...

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            action: "dashboard",
            bodyContent: null,
            groups: [],
            contentSortedBy: "lastname",
            username: 'Sign-In'
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
      var response = actions[segue](this, params)
      this.setState({
        action: segue
      })
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
  signUp: function(that) {
    that.setState({action: "signUp"}) 
  }
  ,
  logIn: function(that) {
    that.setState({action: "logIn"}) 
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
        that.setState({bodyContent: null,
          action: "dashboard", username: data.username
        });
      }.bind(that),
      error: function(xhr, status, err) {
        console.error(that.props.url, status, err.toString());
      }.bind(that)
    });        
  }
  ,
  SessionNew: function(that) {
    that.setState({action: "logIn"}) 
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
            bodyContent: data.legislators,
            groups: data.groups
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
        that.setState({bodyContent: data.legislators,
          groups: data.groups
        });
        console.log(data)
      }.bind(that),
      error: function(xhr, status, err) {
        console.error(that.props.url, status, err.toString());
      }.bind(that)
    });           
  },
  addGroup: function(that) {
    // $.ajax({
    //   url: "/groups/new",
    //   data: {branch: "default", group_type: "senator"},
    //   dataType: 'json',
    //   cache: false,
    //   success: function(data) {
    //     that.setState({groups: data.groups});
    //   }.bind(that),
    //   error: function(xhr, status, err) {
    //     console.error(that.props.url, status, err.toString());
    //   }.bind(that)
    // });
    // that.setState({groups: "yo"});
  }
}