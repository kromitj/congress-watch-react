const actions = {
  senatorShow: function(that) {
     $.ajax({
      url: "/legislators",
      data: {branch: "senator"},
      dataType: 'json',
      cache: false,
      success: function(data) {
        that.setState({bodyContent: data});
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
        that.setState({bodyContent: data});
      }.bind(that),
      error: function(xhr, status, err) {
        console.error(that.props.url, status, err.toString());
      }.bind(that)
    });           
  }
}




class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            action: "dashboard",
            bodyContent: null
        };
        this.prepareForSegue = this.prepareForSegue.bind(this)
        this.sortData = this.sortData.bind(this)
    };

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    updateWindowDimensions() {
    }

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
      var response = actions[segue](this)
      this.setState({
        action: segue
      })
    };

    sortData(sortBy) {
      var contentCopy = Array.from(this.state.bodyContent)
      console.log(contentCopy[0].firstname)
      contentCopy.sort(function(a, b) {
                if (a[sortBy] < b[sortBy]) {
                  return -1;
                }
                if (a[sortBy] > b[sortBy]) {
                  return 1;
                }

                // names must be equal
                return 0;
              });

      this.setState({
        bodyContent: contentCopy
      })
    }

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
}