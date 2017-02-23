class GroupAddBtn extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
        this.onNewGroupClick = this.onNewGroupClick.bind(this)
    };
    render() {
        
        return(
             <li><a href="#" onClick={this.onNewGroupClick}><i className="glyphicon glyphicon-plus"></i>   Create Group</a></li>
        )
    }

    onNewGroupClick(ev) {
        ev.preventDefault();   
        this.props.requestSegue("addGroup");
    }

    
}