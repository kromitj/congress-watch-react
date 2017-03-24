class RoleArticle extends React.Component {
  constructor(props) {
    super();
    this.state = {

    }
  }

  render() {

    return (
              <div className="thumbnail">
                      <div className="article-thumbnail">
                        <a href="http://www.cnn.com/2012/11/07/politics/wisconsin-tammy-baldwin-senate/" target="_blank"> 
                        <img className="center-block" alt="300x200" width="300" src="http://i2.cdn.cnn.com/cnnnext/dam/assets/121103050436-stock-tammy-baldwin-story-top.jpg"></img>
                        </a>
                      </div>
                      <div className="caption">
                        <h4>Wisconsin&#39;s Tammy Baldwin is first openly gay person elected to ...</h4>
                        <p>Nov 7, 2012 ... Tammy Baldwin made history Tuesday night -- twice. ... the first openly gay \npolitician, and first Wisconsin woman, elected to the U.S. Senate.</p>
                        <p></p>
                      </div>
                    </div>
    )
  }
  
}