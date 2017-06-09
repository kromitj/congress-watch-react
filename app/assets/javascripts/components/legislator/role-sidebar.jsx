class RoleSideBar extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
        this.showSenatorIndex = this.showSenatorIndex.bind(this);
        this.showRepIndex = this.showRepIndex.bind(this);
    };
    render() {
        return(
            <li>
                <a href="javascript:;" data-toggle="collapse" data-target="#legislator-drop"><i className="fa fa-fw fa-arrows-v"></i> Legislators<i className="fa fa-fw fa-caret-down"></i></a>
                <ul id="legislator-drop" className="collapse">
                    <li>
                        <a href="#" className="senatorIndex actionable"  onClick={this.showSenatorIndex}>Sentors</a>
                    </li>
                    <li>
                        <a href="#" className="repIndex actionable"  onClick={this.showRepIndex}>Representatives</a>
                    </li>
                </ul>
            </li>
        )
    }

    showSenatorIndex(ev) {
        ev.preventDefault();   

        this.props.requestSegue("senatorIndex");
    }
    showRepIndex(ev) {
        ev.preventDefault();    
        this.props.requestSegue("repIndex");
    }
}


