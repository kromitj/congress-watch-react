class BodyHeader extends React.Component {
    constructor(props) {
        super();
        this.state = {

        };
    };
    render() {
        if (this.props.isMobile) {
            console.log(this.props)
            return (
               <div>
                    <h2>BodyHeader- Mobile</h2>
                    <SideBarHamburger />
                    <BodyTitle />
                    <SearchBar onSend={this.props.onSend}/>
                </div> 
            )
        } else {
            return (
                <div>
                    <h2>BodyHeader-non Mobile</h2>
                    <BodyTitle />
                    <SearchBar {...this.props}/>
                </div> 
            )
        }
    };
};