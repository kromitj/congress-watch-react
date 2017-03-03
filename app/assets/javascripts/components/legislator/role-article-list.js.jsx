class RoleArticleList extends React.Component {
  constructor(props) {
    super();
    this.state = {

    }
  }

  render() {
    const articleList = this.props.articles.map(function(article) {
            return <RoleArticle article={article}/>;
        });

    return (
        <div className="container ">
          <div className="row">
            <ul className="thumbnails">
              <div className="col-sm-10">
                { articleList }                
              </div>
            </ul>
          </div>
        </div>
    )
  }
  
}