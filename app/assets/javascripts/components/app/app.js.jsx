class App extends React.Component {
    constructor(props) {
        super();
        this.appName = "Congress Watch"
        this.state = {
            action: "LegislatorList",
            height: props.height,
            width: props.width,
            isMobile: this.isMobile(),
            searchValue: "",
            listItems: props.listItems
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.onSend = this.onSend.bind(this)
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
      headerProps = this.packHeaderProps();
      bodyProps = this.packBodyProps();
        return(
            <div>
                <Header {...headerProps }/>
                <SideBar isMobile={this.state.isMobile }/>
                <Body {...bodyProps }/> 
                <Footer />
            </div>
        )
    }
    
    onSend(newMessage) {
      this.setState({
        searchValue: newMessage
      });
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
        return true;
      }  else {
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
        isMobile: this.state.isMobile,
        onSend: this.onSend,
        contentType: this.state.action,
        listItems: this.props.listItems
      }
    }  
}