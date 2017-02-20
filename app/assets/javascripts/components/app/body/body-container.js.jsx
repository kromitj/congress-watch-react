class BodyContainer extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    };

    render() {
        content = this.dispatchData(this.props.dataType, this.props.data)
        console.log("content: " + content)
        return(
            <Body content={content} />
        )
    }

    dispatchData(dataType, data) {
        switch(dataType) {
            case "senatorShow":
                console.log("inside senatorSHow")
                return this.dispatchSenatorList(data)
                break;
            case "repShow":
                console.log("inside repSHow")
                return this.dispatchSenatorList(data)
                break;            
            default:
                console.log("case: default")
                return null

        }
    }

    dispatchSenatorList(data) {
        return <RoleList roleItems={this.props.data} />
    }
}