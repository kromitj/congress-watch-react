class GroupShow extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    };
    render() {
        
        return(
            <RoleList {...this.props.groupItemProps} />
        )
    }
}