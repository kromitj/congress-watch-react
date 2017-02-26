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
    },
    signUp: {
        header: "Sign Up",
        subHeader: "Enter Info",
        cookieCrumb: "Sign Up"
    },
    logIn: {
        header: "Log In",
        subHeader: "Enter Info",
        cookieCrumb: "Log In"
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
        props = this.packBody(this.props.dataType, content)
        return(
            <Body {...props} />
        )
    }

    dispatchData(dataType, data) {
        switch(dataType) {
            case "senatorShow":
                return this.dispatchSenatorList(data)
                break;
            case "repShow":
                return this.dispatchSenatorList(data)
                break;
            case "signUp":
                return this.dispatchUserNew()
                break;
            case "logIn":
                return this.dispatchSessionNew()
                break;
             case "userNew":
                return this.dispatchSessionNew()
                break;
            default:
                return null

        }
    }

    dispatchSenatorList(data) {
        props = this.packList(data, this.props.sortData)
        return <RoleList {...props} />
    }
    dispatchUserNew() {
        return <UserNew requestSegue={this.props.prepareForSegue} />
    }
    dispatchSessionNew() {
        return <SessionNew requestSegue={this.props.prepareForSegue} />
    }

    packBody(dataType, content) {
        props = actionDefaults[dataType]
        if ((dataType != "signUp") || (dataType != "logIn") | (dataType != "userNew")) { props.content = content }        
        return props
    }

    packList(items, sortData) {
        return {roleItems: items, sortBy: sortData}
    }
}