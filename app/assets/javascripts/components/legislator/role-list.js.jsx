class RoleList extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
        this.sortList = this.sortList.bind(this)
    };
    render() {
        var roles = this.props.roleItems.map(function(role) {
            return <Role role={role} />;
        });

        return(
            <div className="roles">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th><button type="button" onClick={ () => this.sortList("firstname")}  >First</button></th>
                            <th><button type="button" onClick={ () => this.sortList("lastname")}  >Last</button></th>
                            <th><button type="button" onClick={ () => this.sortList("state")}  >State</button></th>
                            <th><button type="button" onClick={ () => this.sortList("party")}  >Party</button></th>
                            <th><button type="button" onClick={ () => this.sortList("role_type")}  >Branch</button></th>
                        </tr>
                     </thead>
                    <tbody>
                        { roles }
                    </tbody>
                </table>
            </div>
        )
    }

    sortList(value) {  
        console.log("sortBy: " + value)
        this.props.sortBy(value);
    }
}