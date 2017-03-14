class PasswordField extends React.Component {
  constructor(props) {
    super();
    this.state = {
      errorMessages: [
        {
          throwError: true,
        	error: "passwordHasMinLength",
          errorMessage: "Must be at least 8 characters"
        },
        {
          throwError: true,
        	error: "passwordHasLC",
          errorMessage: "Must have one or more lower-case letter"
        },
        {
          throwError: true,
        	error: "passwordHasUC",
          errorMessage: "Must have one or more upper-case letter"
        },
        {
          throwError: true,
        	error: "passwordHasLtr",
          errorMessage: "Must have one or more number"
        }
      ]
	  }
    this.updateInput = this.updateInput.bind(this);
  }

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
  }


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
    this.props.onChange("password", newValue)

    const hasMinLength = this.isMinLength(newValue) 
    const hasOneLowerCase = this.hasOneLowerCase(newValue)
    const hasOneUpperCase = this.hasOneUpperCase(newValue)
    const hasOneNumber = this.hasOneNumber(newValue)

    let newState = Object.assign([], this.state.errorMessages)
    
    newState[0].throwError = hasMinLength
    newState[1].throwError = hasOneLowerCase
    newState[2].throwError = hasOneUpperCase
    newState[3].throwError = hasOneNumber

    this.setState({ errorMessages: newState})
  }

  isMinLength(fieldValue) {
    const minLength = 8
    return fieldValue.length < minLength 
  }

  hasOneLowerCase(fieldValue) {
    const lowerCases = /[a-z]/
    const hasLowerCase = lowerCases.test(fieldValue)
    return !hasLowerCase
  }
  hasOneUpperCase(fieldValue) {
    const upperCases = /[A-Z]/
    const hasUpperCase = upperCases.test(fieldValue)
    return !hasUpperCase
  }
  hasOneNumber(fieldValue) {
    const numbers = /\d/
    const hasNumber = numbers.test(fieldValue)
    return !hasNumber
  }
  ValidationErrorsToString() {
    const errorString = this.state.errorMessages
      .filter((validation) => validation.throwError === true)
      .map((validation) => validation.errorMessage)
      .join(", ")
    return errorString
  }
}



