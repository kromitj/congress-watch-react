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
            height: props.height,
            width: props.width,
            isMobile: this.isMobile(),
            searchValue: "",
            listItems: props.listItems,
            bodyContent: null
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.onSend = this.onSend.bind(this)
        this.prepareForSegue = this.prepareForSegue.bind(this)
    };

    componentDidMount() {
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions.bind(this));
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
    }

    updateWindowDimensions() {
      this.setState({ width: window.innerWidth, height: window.innerHeight, isMobile: this.isMobile()});
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
    
    onSend(newMessage) {
      this.setState({
        searchValue: newMessage,
      });
    };

    prepareForSegue(segue) {
      var response = actions[segue](this)
      this.setState({
        action: segue
      })
    };

    isMobile() {
     if( navigator.userAgent.match(/Android/i)
     || navigator.userAgent.match(/webOS/i)
     || navigator.userAgent.match(/iPhone/i)
     || navigator.userAgent.match(/iPad/i)
     || navigator.userAgent.match(/iPod/i)
     || navigator.userAgent.match(/BlackBerry/i)
     || navigator.userAgent.match(/Windows Phone/i)
     ){
        console.log("is mobile");
        return true;
      }  else {
        console.log("isn't mobile");
        return false;
      } 
    }


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