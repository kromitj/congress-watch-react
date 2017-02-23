class GroupList extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    };
    render() {
        console.log("group list: " + this.props.groups)
        const groupList = this.props.groups.map(function(group) {
            return <li><a href="#">{group.name}</a></li>;
        });
        
        return(
            <ul id="demo" className="collapse">
                <GroupAddBtn requestSegue={this.props.requestSegue}/ >
                { groupList}
            </ul>
        )
    }
}