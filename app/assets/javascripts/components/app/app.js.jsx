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


    packHeaderProps() {
      return {
        appName: this.appName, isMobile: this.state.isMobile
      }
    }
    packBodyProps() {
      return {
        dataType: this.state.action,
        data: this.state.bodyContent
      }
    }
}