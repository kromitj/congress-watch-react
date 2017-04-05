class BillListItem extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    };
    render() {
        return(
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.title}</td>
            </tr>
        )
    }
}