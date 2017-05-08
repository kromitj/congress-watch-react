class SortByField extends React.Component {
  constructor(props) {
    super();
    this.state = {

    }
    this.sendSortByRequest = this.sendSortByRequest.bind(this)
  }

  render() {
    const isActive = this.props.isActive
    const sortBy = this.props.sortListArg

    let btnClass = "btn-block"
    if (isActive) { btnClass = btnClass +  " btn-primary"}
    return (
      <div className="col-xs-3 sort-by-btn">
          <button className={btnClass} type="button" onClick={ () => this.sendSortByRequest(this.props.sortListArg)}  >
            {this.props.fieldName} 
               <Glyphicon {...{order: isActive, sortBy: sortBy}} />
          </button>                            
      </div>
    );
  }

  sendSortByRequest(sortByArg) {
    this.props.sortList(sortByArg)
  }
}