class CreateUserSurveyResponses < ActiveRecord::Migration[5.0]
  def change
    create_table :user_survey_responses do |t|
    	t.integer :user_id
    	t.integer :survey_question_id
    	t.string :response
      t.timestamps
    end
  end
end
