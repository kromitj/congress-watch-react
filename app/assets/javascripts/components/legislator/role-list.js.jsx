class RoleList extends React.Component {
    constructor(props) {
        super();
        this.state = {
            searchQuery: ""
        }
        this.sortList = this.sortList.bind(this)
        this.filterQuery = this.filterQuery.bind(this)
    };
    render() {
        const subscribeToDispatcher = this.props.subscribeToDispatcher
        const searchWords = this.state.searchQuery.split(" ")
        const filteredRoles = this.props.items.filter(function(role) {
            if (searchWords.length == 0) { return role }
            const personString = role.desc + role.firstname + role.lastname + role.id + role.party + role.state
            let searchMatch = true
            searchWords.forEach(function(word) {
                if (personString.includes(word) == false) { searchMatch = false}
            })
            return searchMatch
        })
        const roles = filteredRoles.map(function(role) {
            const roleProps = {role: role, subscribeToDispatcher: subscribeToDispatcher}
            return <RoleListRow key={role.id}  {...roleProps}/>;
        });
        const sortOrderAndBy = this.props.sortOrderAndBy

        return(
            <div className="role-list">
                <FilterNSortable {...{sortList: this.sortList, sortOrderAndBy: sortOrderAndBy, filterQuery: this.filterQuery, sortByFields: [{name: "Popularity", sortListArg: "view_count"},{name: "Last", sortListArg: "lastname"},{name: "State", sortListArg: "state"},{name: "Party", sortListArg: "party"},]}} />                 
                { roles }
            </div>
                   
        )
    }

        
    packRoleProps(role) {
        return {
            role: role,
            subscribeToDispatcher: this.props.subscribeToDispatcher
        }
    }

    sortList(value) {  
        console.log("sortBy: " + value)
        this.props.sortBy(value);
    }
    filterQuery(filterContent) {
        let newFormData = Object.assign({}, this.state.searchQuery);
        newFormData = filterContent
        console.log(newFormData)
        this.setState({ searchQuery: newFormData } );
        // this.props.subscribeToDispatcher("filterRoles", this.state.searchQuery);
    }
}