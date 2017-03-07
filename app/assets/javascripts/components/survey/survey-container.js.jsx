class SurveyContainer extends React.Component {
    constructor(props) {
        super()
        this.surveys = {
            dashboard: function(that) {
                return <SurveyDashboard {...{question: "yo", subcribeToSubmit: that.submitQuestion}} />
            }
        }
        this.state = {
        }
        this.submitQuestion = this.submitQuestion.bind(this)
    }

    render() {
        const that = this
        if (this.props.survey != null) {
          const surveyQuestions = this.props.survey.questions.map(function(question) {
            return <SurveyDashboard {...{question: question, subcribeToSubmit: that.submitQuestion}} />
          })          
          return(
              <div>{surveyQuestions}</div>
          )
        } else { return (<div></div>)}
    }

    submitQuestion(questionId, userResponse) {
        let that = this
        const userId = this.props.userId
        const surveyId = this.props.survey.id
        const url = `users/${userId}/surveys/${surveyId}/survey_questions`
        $.ajax({
          url: url,
          type: 'POST',
          data: {response: {user_id: userId, response: userResponse, survey_question_id: questionId}},
          dataType: 'json',
          cache: false,
          success: function(data) {
            $("#question-" + questionId).hide();       
          }.bind(that),
          error: function(data) {
            // that.setState({error: data.responseJSON.error})
            // console.error(this.props.url, status, err.toString());
          }.bind(that)
        });   
    }

}


