const actionDefaults = {
    dashboard: {
        header: "DashBoard",
        subHeader: "HomeBase",
        cookieCrumb: "DashBoard"
    },
    senatorShow: {
        header: "Legislator",
        subHeader: "Senator",
        cookieCrumb: "Senator"
    },
    repShow: {
        header: "Legislator",
        subHeader: "Representative",
        cookieCrumb: "Representative"
    }
}

class BodyContainer extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    };

    render() {
        content = this.dispatchData(this.props.dataType, this.props.data)
        console.log("content: " + content)
        props = this.packBody(this.props.dataType, content)
        return(
            <Body {...props} />
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

    packBody(dataType, content) {
        props = actionDefaults[dataType]
        props.content = content
        return props
    }
}