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
        props = this.packBody(this.props.dataType, content, this.props.sortData)
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
        props = this.packList(data, this.props.sortData)
        return <RoleList {...props} />
    }

    packBody(dataType, content, sortData) {
        props = actionDefaults[dataType]
        props.content = content
        return props
    }

    packList(items, sortData) {
        return {roleItems: items, sortBy: sortData}
    }
}