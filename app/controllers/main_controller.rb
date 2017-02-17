class MainController < ApplicationController
    def index
        @roles = Role.where({current: true}).first(10)
        @rolesListItems = @roles.map do |role|
            item_hash = {}
            item_hash[:person_id] = role.person.id
            item_hash[:firstname] = role.person.firstname
            item_hash[:lastname] = role.person.lastname
            item_hash[:state] = role.state
            item_hash[:party] = role.party
            item_hash
        end
    end
end
