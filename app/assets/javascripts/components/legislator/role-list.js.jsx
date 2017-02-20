class RoleList extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
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
                            <th><button type="button" onClick={ () => this.sort_by("first_name")}  >First</button></th>
                            <th><button type="button" onClick={ () => this.sort_by("last_name")}  >Last</button></th>
                            <th><button type="button" onClick={ () => this.sort_by("state")}  >State</button></th>
                            <th><button type="button" onClick={ () => this.sort_by("party")}  >Party</button></th>
                        </tr>
                     </thead>
                    <tbody>
                        { roles }
                    </tbody>
                </table>
            </div>
        )
    }
}