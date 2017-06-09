class GroupListItem extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
        this.onGroupClick = this.onGroupClick.bind(this)
    };
    render() {
        
        return(
             <li><a className="actionable" href="#" onClick={this.onGroupClick}>{this.props.name}</a></li>
        )
    }

    onGroupClick(ev) {
        ev.preventDefault();   
        this.props.subscribeToDispatcher("groupShow", this.props.keyProp);
    }

    
}