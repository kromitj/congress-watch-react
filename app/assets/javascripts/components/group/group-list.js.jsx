class GroupList extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    };
    render() {
        const subscribeToDispatcher = this.props.requestSegue
        const groupList = this.props.groups.map(function(group) {
            const listItemProps = {subscribeToDispatcher: subscribeToDispatcher, keyProp: group.id, name: group.name}
            return <GroupListItem key={group.id} {...listItemProps} />;
        });
        
        return(
            <ul id="demo" className="collapse">
                <GroupAddBtn requestSegue={this.props.requestSegue}/ >
                { groupList}
            </ul>
        )
    }
}