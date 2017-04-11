class ArticleRow extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
        this.showArticle = this.showArticle.bind(this)
    };
    render() {
        return(
            <div className="role-item items clearfix">
              <div className="square-box pull-left">
                  <a href={this.props.article.url} onClick={this.onRoleShow}><img width="100" className="media-object img-responsive img-circle"src={this.props.article.img}></img></a>
                  <br></br>
                  <br></br>
              </div>
              <p className="">{ this.props.article.snippet }</p>
              <p className="">{ this.props.article.source}</p>
              <p>{this.props.article.pub_date}</p>
              <span></span>
            </div>
        )
    }

    showArticle(ev) {
        ev.preventDefault();   
        this.props.subscribeToDispatcher("roleShow", this.props.role.id);
    }
}