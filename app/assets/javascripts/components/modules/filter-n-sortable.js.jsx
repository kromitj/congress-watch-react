// ---props--
//   filterQuery: bound function()
//   sortByFields: [{name: "Popularity", sortListArg: "view_count"}...]
//   sortList: bound function()
//   sortOrderAndBy: {by: "lastName", order: "acdending"}

class FilterNSortable extends React.Component {
  constructor(props) {
    super();
    this.state = {

    }
    this.updateParentOnFilter = this.updateParentOnFilter.bind(this)
  }

  render() {
    const sortList = this.props.sortList
    const activeField = this.props.sortOrderAndBy.by
    const sortOrder = this.props.sortOrderAndBy.order
    const sortByFields = this.props.sortByFields.map(function(field) {
        const fieldProps = {fieldName: field.name, sortListArg: field.sortListArg, sortList: sortList}
        if (field.sortListArg == activeField) {
          fieldProps.isActive = sortOrder
        }
        return <SortByField key={field.name}  {...fieldProps}/>;
    });

    return (
      <div className="col-sm-12 col-md-offset-2 col-md-8">                  
         <input type="search" className="form-control" id="legislator-search" onKeyUp={this.updateParentOnFilter} placeholder="Filter Legislators... Democrat MN" ></input>
         <div className="row sort-by">
              { sortByFields }
          </div>
      </div>
    );
  }

  updateParentOnFilter(ev) {
    const newFormData = ev.target.value
    this.props.filterQuery(newFormData)
  }
}