class BodyMain extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    };
    render() {
        bodyContent = this.bodyContent(this.props.contentType)
        return(
            <div>
                {bodyContent }               
            </div>
        )
    }

    bodyContent(contentType) {
        switch(contentType) {
            case "LegislatorList":
                return <RoleList listItems={this.props.listItems}/>
                break;
            case "BillList":
                return <BillList />
                break;
            case "CommitteeList":
                return <CommitteeList />
                break;
            default:
                return <LegislatorList />
        } 
    }
}