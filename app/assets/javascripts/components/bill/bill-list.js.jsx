class BillList extends React.Component {
    constructor(props) {
        super();
        this.state = {
            searchQuery: ""
        }
        this.sortList = this.sortList.bind(this)
        this.filterQuery = this.filterQuery.bind(this)
    };
    render() {
        console.log(this.props)
        const subscribeToDispatcher = this.props.subscribeToDispatcher
        const page = this.props.items.page
        const pages = this.props.items.pages
        const bills = this.props.items.items.map(function(bill) {
            const billProps = {bill: bill, subscribeToDispatcher: subscribeToDispatcher}
            return <BillListRow key={bill.id}  {...billProps}/>;
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
                    <div className="row">
                         <div className="col-sm-12 col-md-8"> 
                            <BillPagination  {...{page: page, pages: pages, subscribeToDispatcher: subscribeToDispatcher}}/>
                         </div>
                    </div>
                </div>
                { bills }
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