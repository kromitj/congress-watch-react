class UserSurveyResponse < ApplicationRecord
	belongs_to :user 
	belongs_to :survey_question

	validates :response, presence: true
	validates :user_id, uniqueness: true

	def is_new_to_user?(user_id)
		find_by(user_id: user_id)
	end
end
