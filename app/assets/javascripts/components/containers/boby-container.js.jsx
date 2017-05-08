const actionDefaults = {
    dashboard: {
        header: "DashBoard",
        subHeader: "Ignorance is Bliss?"        
    },
    groupNew: {
        header: "Create Group",
        subHeader: "Easly Track Only What You Want To"        
    },
    groupShow: {
        header: "Group Show",
        subHeader: "Here Ya Go"        
    },
    logIn: {
        header: "Log In",
        subHeader: "Enter Info"        
    },
    repIndex: {
        header: "Legislator",
        subHeader: "Representative"        
    },
    roleShow: {
        header: "Legislator",
        subHeader: "Show Details..."        
    },
    senatorIndex: {
        header: "Legislator",
        subHeader: "Senator"        
    },
    signUp: {
        header: "Sign Up",
        subHeader: "Enter Info"        
    }
}

class BodyContainer extends React.Component {
    constructor(props) {
        super();
        this.state = {
        }
    };

    render() {
        console.log("render: " + this.props.dataType)
        content = this.dispatchData(this.props.dataType, this.props.data)
        props = this.packBody(this.props.dataType, content)
        return(
            <Body {...props} />
        )
    }

    dispatchData(dataType, data) {
        switch(dataType) {
            case "dashboard":
                return this.dispatchDashboard(data)
                break;
            case "senatorIndex":
                return this.dispatchSenatorList(data)
                break;
            case "repIndex":
                return this.dispatchSenatorList(data)
                break;
            case "billShow":
                props = data
                return < BillShow {...props}/>
                break;
            case "billIndex":
                return this.dispatchBillList(data)
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
    dispatchDashboard(data) {
        return <ArticleTable {...{data}}  />
    }
    dispatchSenatorList(data) {
        props = this.packList(data, this.props.sortData)
        return <RoleList {...props} />
    }
    dispatchBillList(data) {
        props = this.packList(data, this.props.sortData)
        return <BillList {...props} />
    }
    dispatchBillShow(data) {
        props = this.packList(data, this.props.sortData)
        return <BillList {...props} />
    }
    dispatchUserNew() {
        return <UserNew  {...{subscribeToDispatcher: this.props.prepareForSegue, error: this.props.error}}/>
    }
    dispatchSessionNew() {
        return <SessionNew  {...{subscribeToDispatcher: this.props.prepareForSegue, error: this.props.error}}/>
    }
    dispatchGroupNew() {
        return <GroupNew  {...{subscribeToDispatcher: this.props.prepareForSegue}}/>
    }
    dispatchGroupShow(data) {
        props = this.packList(data.group_items, this.props.sortData)
        return <GroupShow  {...{subscribeToDispatcher: this.props.prepareForSegue, groupItemProps: props}}/>
    }
    dispatchBillShow() {

    }

    dispatchRoleShow() {
        return <RoleShow {...{role: this.props.data, subscribeToDispatcher: this.props.prepareForSegue, groups: this.props.groups, user: this.props.user}} />
    }
    packBody(dataType, content) {
        const props = {}
        props.breadCrumbs = this.props.breadCrumbs
        props.user = this.props.user
        if ((dataType != "signUp") || (dataType != "logIn") || (dataType != "userNew")) { props.content = content }
        props.prepareForSegue = this.props.prepareForSegue        
        return props
    }

    packList(items, sortData) {
        return {items: items, sortBy: sortData, subscribeToDispatcher: this.props.prepareForSegue, sortOrderAndBy: this.props.sortOrderAndBy}
    }
} 