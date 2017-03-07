class Survey < ApplicationRecord
	has_many :survey_questions

	def pack_survey
		{
			id: id,
			action: action,
			questions: survey_questions.map { |question| question.pack_survey_question}
		}
	end
end
