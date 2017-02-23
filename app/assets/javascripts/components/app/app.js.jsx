// constants at bottom...

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            action: "dashboard",
            bodyContent: null,
            groups: [],
            contentSortedBy: "lastname"
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

    prepareForSegue(segue) {
      if (segue == this.state.action) { return false }
      var response = actions[segue](this)
      this.setState({
        action: segue
      })
    };  

    packNavProps() {
      return {
        prepareForSegue: this.prepareForSegue, 
        groups: this.state.groups
      }
    }

    packBodyProps() {
      return {
        dataType: this.state.action,
        data: this.state.bodyContent,
        sortData: this.sortData
      }
    }

    sortData(sortBy) {
      if (sortBy == this.state.contentSortedBy) { 
        console.log("already sorted by that....")
        return false 
      }
      var contentCopy = Array.from(this.state.bodyContent)
      console.log(contentCopy[0].firstname)
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