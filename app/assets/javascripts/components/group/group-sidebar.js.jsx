class GroupSideBar extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    };
    render() {
        groupCount = this.groupCount();
        return(
            <li>
                <a href="javascript:;" data-toggle="collapse" data-target="#demo"><i className="fa fa-fw fa-arrows-v"></i> Groups {groupCount}<i className="fa fa-fw fa-caret-down"></i></a>
                <GroupList {...this.props} />
            </li>
        )
    }

    groupCount() {
        const count = this.props.groups.length
        if (count > 0){
            return count
        } else {
            return null
        }
    }
}