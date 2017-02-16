class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            height: props.height,
            width: props.width,
            isMobile: this.isMobile()
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
        return(
            <div>
                <h1>App</h1>
                <Header isMobile={this.state.isMobile }/>
                <SideBar isMobile={this.state.isMobile }/>
                <Body /> 
                <Footer />
            </div>
        )
    }



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
}