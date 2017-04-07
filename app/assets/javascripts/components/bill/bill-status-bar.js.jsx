class BillStatusBar extends React.Component {
  constructor(props) {
    super();
    this.states = {
      1: {
        percentage: "25%",
        text: "Introduced",
        color: "progress-bar-danger"
      },
      2: {
        percentage: "50%",
        text: "Passed House",
        color: "progress-bar-warning"
      },
      3: {
        percentage: "75%",
        text: "Passed Senate",
        color: ""
      },
      4: {
        percentage: "100%",
        text: "Became Law",
        color: "progress-bar-success"
      }
    }
    this.state = {

    }
  }

  render() {
    const status = this.states[this.props.status]
    const className = `progress-bar ${status.color}`
    return (
      <div className="progress">
        <div className={className} role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: status.percentage}}>
          {status.text}
          <span className="sr-only">{status.percentage} Complete</span>
        </div>
      </div>
    );
  }
}