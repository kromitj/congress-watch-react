packBodyProps() {
      return {
        dataType: this.state.action,
        data: this.state.bodyContentFilter,
        sortData: this.sortData,
        prepareForSegue: this.prepareForSegue
      }
    }
 	packList() {
        return {roleItems: this.props.data, sortBy: this.props.subscribeToSortData, subscribeToDispatcher: this.props.prepareForSegue}
    }


const bodyActions = {
	dashboard: {
		headerData: {
			header: "DashBoard",
        	subHeader: "HomeBase",
        	cookieCrumb: "DashBoard"
		},
		action: function() {
			return false
		}
	},
	groupNew: {
		headerData: {
			header: "Create Group",
       		subHeader: "Easly Track Only What You Want To",
        	cookieCrumb: "Create Group"
		},
		action: function() {
			return <GroupNew requestSegue={this.props.prepareForSegue} />
		}
	},
	logIn: {
		headerData: {
			header: "Log In",
	        subHeader: "Enter Info",
	        cookieCrumb: "Log In"
		},
		action: function() {
			return <SessionNew requestSegue={this.props.prepareForSegue} />
		}
	},
	repIndex: {
		headerData: {
			header: "Legislator",
        	subHeader: "Representative",
        	cookieCrumb: "Representative"
		},
		action: function() {
			props = this.packList()
        	return <RoleList {...props} />
		}
	},
	roleShow: {
		headerData: {
			header: "Legislator",
        	subHeader: "Show Details...",
        	cookieCrumb: "RoleType RoleInstance"
		},
		action: function() {
			props = this.packList()
        	return <RoleShow {...props} />
		}
	},
	senatorIndex: {
		headerData: {
			header: "Legislator",
        	subHeader: "Senator",
        	cookieCrumb: "Senator"
		},
		action: function() {
			props = this.packList()
        	return <RoleList {...props} />
		}
	},
	signUp: {
		headerData: {
			header: "Sign Up",
        	subHeader: "Enter Info",
        	cookieCrumb: "Sign Up"
		},
		action: function() {
			return <UserNew requestSegue={this.props.prepareForSegue} />
		}
	}
}