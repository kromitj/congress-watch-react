class BillPaginationPage extends React.Component {
    constructor(props) {
        super();
        this.classStates = {
            true: "active",
            false: ""
        }
        this.state = {

        }
        this.requestPage = this.requestPage.bind(this)
    };
    render() {
        const isCurrentPage = (this.props.currentPage == this.props.page)
        return(
            <li className={this.classStates[isCurrentPage]}><a href="#" onClick={this.requestPage}>{this.props.page}</a></li>
        )
    }

    requestPage(ev) {
        const page_requested = this.props.page
        ev.preventDefault();   
        this.props.subscribeToDispatcher("billIndex", this.props.page);
    }
}