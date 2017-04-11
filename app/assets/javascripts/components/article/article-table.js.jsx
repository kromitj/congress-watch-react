class ArticleTable extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    };
    render() {
        const articles = this.props.data.map(function(article) {
            return <ArticleRow {...{article}} />
        })
        return(
            <div className="row">
                <div className="col-md-12 col-lg-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">Latest News</div>
                        <div className="panel-body">
                            { articles }
                        </div>
                    </div> 
                </div>
            </div>
    )
    }
}