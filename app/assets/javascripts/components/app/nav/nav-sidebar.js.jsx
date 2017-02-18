class NavSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render() {
        return (
            <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav side-nav">
                    
                    <li className="active">
                        <a href="index.html"><i className="fa fa-fw fa-dashboard"></i> Dashboard</a>
                    </li>

                    <li>
                        <a href="javascript:;" data-toggle="collapse" data-target="#legislator-drop"><i className="fa fa-fw fa-arrows-v"></i> Legislators<i className="fa fa-fw fa-caret-down"></i></a>
                        <ul id="legislator-drop" className="collapse">
                            <li>
                                <a href="#">Sentors</a>
                            </li>
                            <li>
                                <a href="#">Representatives</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="tables.html"><i className="fa fa-fw fa-table"></i> Bills</a>
                    </li>

                    <li>
                        <a href="forms.html"><i className="fa fa-fw fa-edit"></i> Committees</a>
                    </li>

                    <li>
                        <a href="javascript:;" data-toggle="collapse" data-target="#demo"><i className="fa fa-fw fa-arrows-v"></i> Groups<i className="fa fa-fw fa-caret-down"></i></a>
                        <ul id="demo" className="collapse">
                            <li>
                                <a href="#">Dropdown Item</a>
                            </li>
                            <li>
                                <a href="#">Dropdown Item</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}