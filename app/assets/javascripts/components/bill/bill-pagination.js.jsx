class BillPagination extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    };
    render() {
        const currentPage = this.props.page
        const pagesTotal = this.props.pages
        const pages = []
        for (let i=1; i<=pagesTotal; i++) {
            console.log(i)
            pages.push(<BillPaginationPage key={i} {...{page: i, currentPage: currentPage, subscribeToDispatcher: this.props.subscribeToDispatcher}} />)
        }
        return(
            <nav aria-label="Page navigation">
              <ul className="pagination">
                { pages }                
              </ul>
            </nav>
        )
    }
}