class GroupSideBar extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    };
    render() {
        return(
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
        )
    }
}