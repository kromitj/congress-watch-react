class SurveyQuestionsController < ApplicationController
	def create
		puts "========="
		puts params.keys
		# @user = User.find(params[:user_id])
		# @survey = Survey.find(params[:survey_id])
		# @question = @survey.survey_questions.find(params[:response][:survey_question_id])
		# @user_response = @question.user_survey_responses.new(response_params)
		@user_response = UserSurveyResponse.new(response_params)
		puts @user_response
		if @user_response.save		   	   	
      		if request.xhr?
        		render :json => {status: true}
      		else
        		# redirect_to "/users/#{@user.id}"
        		redirect_to "/"
      		end
	    else
	    	puts @user_response.errors.full_messages
	      if request.xhr?
	       render :json => {:error => "Response Can't be blank"}, :status => 422
	      else
	        @errors = @user.errors.full_messages
	        render 'new'
	      end
	    end
	end

	private

	def response_params
    	params.require(:response).permit(:response, :user_id, :survey_question_id)
  	end
end
