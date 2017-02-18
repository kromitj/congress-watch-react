class SideBarHamburger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };
    render() {
        return (
            <div className="navbar navbar-default col-sm-2 col-md-2">
                <button type="button" className="navbar-toggle" data-toggle="offcanvas" data-target=".navmenu" data-canvas="body">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div> 
            )
    };
};