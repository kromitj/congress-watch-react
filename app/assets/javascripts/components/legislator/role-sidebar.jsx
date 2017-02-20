class RoleSideBar extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
        this.onSenatorClick = this.onSenatorClick.bind(this);
        this.onRepClick = this.onRepClick.bind(this);
    };
    render() {
        return(
            <li>
                <a href="javascript:;" data-toggle="collapse" data-target="#legislator-drop"><i className="fa fa-fw fa-arrows-v"></i> Legislators<i className="fa fa-fw fa-caret-down"></i></a>
                <ul id="legislator-drop" className="collapse">
                    <li>
                        <a href="#" className="senatorShow"  onClick={this.onSenatorClick}>Sentors</a>
                    </li>
                    <li>
                        <a href="#" className="repShow"  onClick={this.onRepClick}>Representatives</a>
                    </li>
                </ul>
            </li>
        )
    }

    onSenatorClick(ev) {
        ev.preventDefault();   
        this.props.requestSegue("senatorShow");
    }
    onRepClick(ev) {
        ev.preventDefault();    
        this.props.requestSegue("repShow");
    }
}


