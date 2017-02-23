class Role < ApplicationRecord
	belongs_to :person, foreign_key: :person_id
    has_many :group_items, as: :groupable
    def RoleList(params)
        @roles = Role.find(params[:field] => params[:value], :select => "state, person.firstname, personname", :limit => 1)
    end

    def name(type="fullname")
        case type
        when "first"
            "#{person.firstname}"
        when "last"
            "#{person.lastname}"
        else
            "#{person.firstname} #{person.lastname}"
        end
    end
end
