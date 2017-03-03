class Person < ApplicationRecord
	has_many :roles
	has_many :committee_legislators
	has_many :articles

	def pack_role_show
		{
			birthday: birthday,
			wiki_intro: wiki_intro
		}
	end

end
