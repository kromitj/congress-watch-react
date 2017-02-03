class CommitteeLegislator < ApplicationRecord
	belongs_to :person
	belongs_to :committee
end
