const actionDefaults = {
    dashboard: {
        header: "DashBoard",
        subHeader: "Ignorance is Bliss?",
        cookieCrumb: "DashBoard"
    },
    groupNew: {
        header: "Create Group",
        subHeader: "Easly Track Only What You Want To",
        cookieCrumb: "Create Group"
    },
    groupShow: {
        header: "Group Show",
        subHeader: "Here Ya Go",
        cookieCrumb: "Group"
    },
    logIn: {
        header: "Log In",
        subHeader: "Enter Info",
        cookieCrumb: "Log In"
    },
    repIndex: {
        header: "Legislator",
        subHeader: "Representative",
        cookieCrumb: "Representative"
    },
    roleShow: {
        header: "Legislator",
        subHeader: "Show Details...",
        cookieCrumb: "Representative"
    },
    senatorIndex: {
        header: "Legislator",
        subHeader: "Senator",
        cookieCrumb: "Senator"
    },
    signUp: {
        header: "Sign Up",
        subHeader: "Enter Info",
        cookieCrumb: "Sign Up"
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
            case "senatorIndex":
                return this.dispatchSenatorList(data)
                break;
            case "repIndex":
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
            case "groupNew":
                return this.dispatchGroupNew()
                break;
            case "groupShow":
                return this.dispatchGroupShow(data)
                break;
            case "roleShow":
                return this.dispatchRoleShow()
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
        return <UserNew  {...{subscribeToDispatcher: this.props.prepareForSegue}}/>
    }
    dispatchSessionNew() {
        return <SessionNew  {...{subscribeToDispatcher: this.props.prepareForSegue}}/>
    }
    dispatchGroupNew() {
        return <GroupNew  {...{subscribeToDispatcher: this.props.prepareForSegue}}/>
    }
    dispatchGroupShow(data) {
        props = this.packList(data.group_items, this.props.sortData)
        return <GroupShow  {...{subscribeToDispatcher: this.props.prepareForSegue, groupItemProps: props}}/>
    }
    dispatchRoleShow() {
        return <RoleShow {...{role: this.props.data, subscribeToDispatcher: this.props.prepareForSegue, groups: this.props.groups}} />
    }
    packBody(dataType, content) {
        props = actionDefaults[dataType]
        if ((dataType != "signUp") || (dataType != "logIn") || (dataType != "userNew")) { props.content = content }
        props.prepareForSegue = this.props.prepareForSegue        
        return props
    }

    packList(items, sortData) {
        return {roleItems: items, sortBy: sortData, subscribeToDispatcher: this.props.prepareForSegue}
    }
} 