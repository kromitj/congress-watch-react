class SideBar extends React.Component {
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
    }

    generateRender() {
        if (this.props.isMobile) {
            return (
               <div>
                   <div className="navmenu navmenu-default navmenu-fixed-left offcanvas">
                    < Groups />
                    <h1>Heres Groups</h1>            
                  </div>              
              </ div>
            )
        } else {
            return (
                <div>
                    <h2>SideBar-Non Mobile</h2>
                    <Groups />
                </div> 
            )
        }
    }
}