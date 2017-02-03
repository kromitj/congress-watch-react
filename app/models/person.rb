class Person < ApplicationRecord
	has_many :roles
	has_many :committee_legislators
end
