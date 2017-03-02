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
        var roles = this.props.roleItems.map(function(role) {
            const roleProps = {role: role, subscribeToDispatcher: subscribeToDispatcher}
            return <RoleListRow key={role.id}  {...roleProps}/>;
        });

        return(
            <div className="role-list">
                 <div className="col-sm-12 col-md-offset-2 col-md-8">                  
                   <input type="search" className="form-control" id="legislator-search" onKeyUp={this.filterQuery} placeholder="Filter Legislators... Democrat MN" ></input>
                   <div className="row sort-by">
                        <div className="col-xs-3 sort-by-btn">
                            <button className="btn-block" type="button" onClick={ () => this.sortList("firstname")}  >First</button>                            
                        </div>
                        <div className="col-xs-3 sort-by-btn">
                            <button className="btn-block" type="button" onClick={ () => this.sortList("lastname")}  >Last</button>                            
                        </div>
                        <div className="col-xs-3 sort-by-btn">
                            <button className="btn-block" type="button" onClick={ () => this.sortList("state")}  >State</button>                            
                        </div>
                        <div className="col-xs-3 sort-by-btn fluid">
                            <button className="btn-block" type="button" onClick={ () => this.sortList("party")}  >Party</button>                            
                        </div>
                    </div>
                </div>
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
    filterQuery(ev) {
        let newFormData = Object.assign({}, this.state.searchQuery);
        newFormData = ev.target.value
        console.log(newFormData)
        this.setState({ searchQuery: newFormData } );
        this.props.subscribeToDispatcher("filterRoles", this.state.searchQuery);
    }
}