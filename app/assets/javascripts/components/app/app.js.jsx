// constants at bottom...

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            action: "dashboard",
            bodyContent: null,
            contentSortedBy: "lastname"
        };
        this.prepareForSegue = this.prepareForSegue.bind(this)
        this.sortData = this.sortData.bind(this)
    };

    render() {
      bodyProps = this.packBodyProps()
        return(
             <div id="wrapper">
                <Nav requestSegue={this.prepareForSegue} />
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

    packHeaderProps() {
      return {
        appName: this.appName, isMobile: this.state.isMobile
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
        that.setState({bodyContent: data.legislators});
        console.log(data)
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
        that.setState({bodyContent: data.legislators});
        console.log(data)
      }.bind(that),
      error: function(xhr, status, err) {
        console.error(that.props.url, status, err.toString());
      }.bind(that)
    });           
  }
}