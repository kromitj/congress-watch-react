class BillSideBar extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
        this.showBillIndex = this.showBillIndex.bind(this)
    };
    render() {
        return(
            <li className="">
                <a className="actionable" href="#" onClick={this.showBillIndex}><i className="fa fa-fw fa-table"></i> Bills</a>
            </li>
        )
    }
    showBillIndex(ev) {
        ev.preventDefault();   
        this.props.requestSegue("billIndex", 1);
    }
}