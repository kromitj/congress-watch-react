class Role < ApplicationRecord
	belongs_to :person, foreign_key: :person_id

    def RoleList(params)
        @roles = Role.find(parmas[:field] => params[:value], :select => "state, person.firstname, personname", :limit => 1)
    end
end
