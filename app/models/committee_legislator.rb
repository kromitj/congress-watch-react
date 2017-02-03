class CommitteeLegislator < ApplicationRecord
	belongs_to :person, :committee
end
