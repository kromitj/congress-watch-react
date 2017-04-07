class Bill < ApplicationRecord
	belongs_to :role,
	 foreign_key: :role_id
	def pack_bill_list_item
		return {
			id: id,
			bill: bill,
			title: title,
			sponsor: sponsor,
			action_date: latest_major_action_date,
			action: latest_major_action,
			status: status, 
		}
	end

	def pack_bill_show
		@img = role.person.img_lg
		{
			id: id,
			bill: bill,
			title: title,
			sponsor: sponsor,
			sponsor_img: @img,
			sponsor_party: sponsor_party,
			action_date: latest_major_action_date,
			action: latest_major_action,
			status: status,
			committees: committees,
			pdf: gpo_pdf_uri,
		}
	end
end
