class SideBarHamburger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };
    render() {
        return (
            <div className ="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="index.html">Congress Observer</a>
            </div>
            )
    };
};