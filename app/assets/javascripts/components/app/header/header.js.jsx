class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: props.isMobile
        };
    };
    render() {
        toBeRendered = this.generateRender();
        return (
            toBeRendered 
        )
    };
    generateRender() {
        if (this.props.isMobile) {
            return (
               <div className="row">
                   <div className="col-xs-4 col-md-4 col-sm-offset-3 col-md-offset-4">
                        <h1>{ this.props.appName }</h1>
                    </div>
                    <div className="col-xs-1 col-md-1 col-sm-offset-2 col-md-offset-2">
                        <Alert />
                    </div>
                </div> 
            )
        } else {
            return (
                <div className="row">
                   <div className="col-md-4 col-md-offset-4">
                        <h1>{ this.props.appName }</h1>
                    </div>
                    <div className="col-md-2">
                        <Alert />
                    </div>
                    <div className="col-md-2">
                        <User />
                    </div>
                </div> 
            )
        }
    }
};