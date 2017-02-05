class CommitteeLegislator < ApplicationRecord
	belongs_to :person
	belongs_to :committee # add once committee data is seeded
end
