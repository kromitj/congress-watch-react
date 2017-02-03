class Role < ApplicationRecord
	belongs_to :person, foreign_key: :person_id
end
