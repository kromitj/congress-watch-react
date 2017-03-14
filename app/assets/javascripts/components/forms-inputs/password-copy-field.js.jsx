class PasswordCopyField extends React.Component {
    constructor(props) {
        super();
        this.state = {
            errorMessages: [
                {
                    throwError: true,
                    errorMessage: "The passwords you entered don't match"
                }
            ]
        };

        this.updateInput = this.updateInput.bind(this);
    };

    render() {
        const errorClass = this.errorClass()
        const errorString = this.ValidationErrorsToString()
        return(
            <div className={`form-group ${this.props.errorClasses[errorClass]}`}>
                <label for="password">Password</label>
                <input value={this.props.value} onChange={this.updateInput} type="password" className="form-control" id="password" placeholder="********"></input>
                <small className="form-text text-muted has-error">{errorString}</small>
            </div>
        )
    };

    updateInput(ev) {
        const newValue = ev.target.value
        this.fieldIsValid(newValue)    
    }

    errorClass() {
        const isValid = this.state.errorMessages
            .filter((validation) => validation.throwError == true)

        return isValid.length == 0
    }

    fieldIsValid(newValue) {
        this.props.onChange("rePassword", newValue);
        const matchesOther = this.bothMatch(newValue) 
        let newState = Object.assign([], this.state.errorMessages)
        newState[0].throwError = matchesOther

        this.setState({ errorMessages: newState})
    }

    bothMatch(fieldValue) {
        return fieldValue != this.props.passwordValue
    }

    
    ValidationErrorsToString() {
        const errorString = this.state.errorMessages
            .filter((validation) => validation.throwError === true)
            .map((validation) => validation.errorMessage)
            .join(", ")
        return errorString
    }
}



