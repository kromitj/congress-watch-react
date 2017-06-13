class GroupListItem extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
        this.onGroupClick = this.onGroupClick.bind(this)
        this.onGroupDestroyClick = this.onGroupDestroyClick.bind(this)
    };
    render() {
        
        return(
             <li>
                <a className="actionable" href="#" onClick={this.onGroupClick}>
                    {this.props.name}
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <a className="" href="#" onClick={this.onGroupDestroyClick}><i className="glyphicon glyphicon-trash"></i></a>
                </a>

             </li>
        )
    }

    onGroupClick(ev) {
        ev.preventDefault();   
        this.props.subscribeToDispatcher("groupShow", this.props.keyProp);
    }

    onGroupDestroyClick(ev) {
        ev.preventDefault();
        this.props.subscribeToDispatcher("groupDestroy", this.props.keyProp)
        ev.stopPropagation();
    }

    
}