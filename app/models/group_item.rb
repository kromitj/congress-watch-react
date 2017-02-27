class GroupItem < ApplicationRecord
    belongs_to :groupable, polymorphic: true
    belongs_to :group

    def item_type
    	groupable.class.name 
    end   

    def item_name
    	groupable.name
    end
end
