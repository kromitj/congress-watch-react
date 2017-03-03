class RoleArticle extends React.Component {
  constructor(props) {
    super();
    this.state = {

    }
  }

  render() {

    return (
              <div className="col-md-3">
                <div className="thumbnail">
                  <img src={this.props.article.thumbnail} alt="ALT NAME" className="img-responsive" ></img>
                  <div className="caption">
                       <h4>{this.props.article.title}</h4>
                      <p>{this.props.article.snippet}</p>
                      <p align="center"><a href={this.props.article.link} className="btn btn-primary btn-block">Open</a></p>
                  </div>
                </div>
              </div>
    )
  }
  
}