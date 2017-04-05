class BillList extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    };
    render() {
        console.log("bills")
        console.log(this.props.bills)
        let counter = 0
         const bills = this.props.bills.map(function(bill) {
            const billProps = {name: bill.bill, title: bill.title, update: bill.latest_major_action_date}
            counter++
            console.log(counter)
            console.log(billProps)
            return <BillListItem key={counter}  {...billProps}/>;
        });
        return(
            <div className="panel panel-default">
                <div className="panel-heading">Associated Bills</div>          
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Bill</th>
                        <th>Title</th>
                        <th>Latest Update</th>
                      </tr>
                    </thead>
                    <tbody>
                        { bills }
                    </tbody>
                  </table>
            </div>
        )
    }
}