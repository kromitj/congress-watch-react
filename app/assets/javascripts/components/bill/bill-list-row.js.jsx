class BillListRow extends React.Component {
  constructor(props) {
    super();
    this.state = {

    }
    this.showBill = this.showBill.bind(this)
  }

  render() {
    const bill = this.props.bill
    return (
      <div className="role-item items col-xs-12 col-md-8 col-md-offset-2 clearfix">
           <a href="#" onClick={this.showBill}><h1 className="list-header">{ bill.bill } { this.props.bill.title}</h1></a>
          <h2 className="list-sub-header"><span className="bold">Sponsor</span>: { bill.sponsor}</h2>
          <h2 className="list-sub-header"><span className="bold">Latest Action: </span> { bill.action_date} { bill.action}</h2>
          < BillStatusBar {...{status: bill.status}} />
          <span></span>
      </div>
    );
  }
  showBill(ev) {
    ev.preventDefault();   
    this.props.subscribeToDispatcher("billShow", this.props.bill.id);
  }
}