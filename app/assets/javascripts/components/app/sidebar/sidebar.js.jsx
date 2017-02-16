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
                    <h2>SideBar-Mobile</h2>
                    <User />
                    <Groups />
                </div> 
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