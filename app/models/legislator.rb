class Legislator < ApplicationRecord
	def packRoleRow
		party = {"D" => "Democrate", "R" => "Republican", "I" => "Independent"}
		{id: id, firstname: person.first_name, lastname: person.last_name, state: state, party: party[party], desc: description, img: person.img_sm}
	end


end