class UsernameField extends React.Component {
    constructor(props) {
        super();        
        this.state = {
	        errorMessages: [
	        	{
	        		throwError: false,
	        		errorMessage: "can't contain (&), (<), (>), (+), (=), (,)"
	        	},
	        	{
	        		throwError: true,
	        		errorMessage: "must be greater than 6 chars"
	        	},
	        	{
	        		throwError: false,
	        		errorMessage: "no more then one period in a row"
	        	},
	        	{
	        		throwError: false,
	        		errorMessage: "Can't start or end with a period"
	        	}
        	]
        };

        this.updateInput = this.updateInput.bind(this);
    };

    render() {
        const errorClass = this.errorClass();
        const errorString = this.ValidationErrorsToString()
        return(
            <div className={`form-group ${this.props.errorClasses[errorClass]}`}>
                <label for="userName">Username </label>                
				<input value={this.props.value} onChange={this.updateInput} type="text" className="form-control" id="username" placeholder="janeJoe123"></input>
				<small className="form-text text-muted has-error">{errorString}</small>
            </div>
        )
    };

  updateInput(ev) {
  	const newValue = ev.target.value
  	this.fieldIsValid(newValue)
    
  }

    fieldIsValid(newValue) {  
      	this.props.onChange("username", newValue);
    	const specChars = this.devoidOfSpecialChars(newValue)
		const minLength = this.isMinLength(newValue)
		const periodsInRow = this.multiplePeriods(newValue)
		const startOrEndPeriod = this.startOrEndWithPeriod(newValue)

		let newState = Object.assign([], this.state.errorMessages)
    	newState[0].throwError = specChars
    	newState[1].throwError = minLength
    	newState[2].throwError = periodsInRow
    	newState[3].throwError = startOrEndPeriod

    	this.setState({ errorMessages: newState})

    	
    }

    devoidOfSpecialChars(fieldValue) {
    	const cantContain = /[&=+<>,]/
    	const containsSpecChar = cantContain.test(fieldValue)
    	return containsSpecChar
    }

    errorClass() {
    	const isValid = this.state.errorMessages
    		.filter((validation) => validation.throwError == true)

    	return isValid.length == 0
    }

    isMinLength(fieldValue) {
    	const minLength = 6
    	return  fieldValue.length < minLength
    }
    multiplePeriods(fieldValue) {
    	const twoOrMorePeriods = /\.{2,}/
    	const containsTwoOrMore = twoOrMorePeriods.test(fieldValue)
    	return containsTwoOrMore
    }
    startOrEndWithPeriod(fieldValue) {
    	const startOrEndWithPeriod = /[\A\.\Z\.]/
    	const startsOrEnds = startOrEndWithPeriod.test(fieldValue)
    	return startsOrEnds
    }

    ValidationErrorsToString() {
    	const errorString = this.state.errorMessages
    		.filter((validation) => validation.throwError === true)
	    	.map((validation) => validation.errorMessage)
	    	.join(", ")
	    return errorString
    }
}

