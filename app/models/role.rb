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

    def pack_role_show
        @state = description.split(" ")[-1]
        { 
            id: id,
            name: name("fullname"),
            desc: description,
            assumed_office: startdate,
            address: address,
            party: party,
            role: role_type_label,
            state: @state,
            website: website,
            birthday: person.birthday,
            wiki_intro: person.wiki_intro,
            img: person.img_sm
        }

    end
end
