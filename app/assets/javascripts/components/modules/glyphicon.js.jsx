class Glyphicon extends React.Component {
  constructor(props) {
    super();
    this.state = {

    }
  }

  render() {
    const sortBy = this.props.sortBy
    const order = this.props.order
    var className = ""

    if (order != null) { 
      className = icons[sortBy][order]
    }

    
    return (
      <span className={className} aria-hidden="true"></span>
    );
  }
}

const icons = {
  "lastname": {
    "ascending": "glyphicon glyphicon-menu-up",
    "descending": "glyphicon glyphicon-menu-down"
  },
  "state": {
    "ascending": "glyphicon glyphicon-menu-up",
    "descending": "glyphicon glyphicon-menu-down"
  },
  "party": {
    "ascending": "glyphicon glyphicon-menu-up",
    "descending": "glyphicon glyphicon-menu-down"
  },
  "view_count": {
    "ascending": "glyphicon glyphicon-menu-up",
    "descending": "glyphicon glyphicon-menu-down"
  }
}