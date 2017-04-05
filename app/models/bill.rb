class Bill < ApplicationRecord
	belongs_to :role,
	 foreign_key: :role_id
	
end
