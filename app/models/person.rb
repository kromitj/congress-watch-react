class Person < ApplicationRecord
	has_many :roles, :committee_legislators
	has_many committees, through: :committee_legislator
end
