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
                <div className="row">
                   <div className="row">
                        <SideBarHamburger />
                        <BodyTitle />                    
                    </div>
                    <div className="row">                    
                        <SearchBar onSend={this.props.onSend}/>
                    </div>  
                < /div>
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