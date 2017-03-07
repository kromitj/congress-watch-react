class SurveyQuestion < ApplicationRecord
	has_many :user_survey_responses

	def pack_survey_question
		{
			id: id,
			question: question
		}
	end
end
