class Group < ApplicationRecord
    has_many :group_items, :dependent => :destroy
    belongs_to :user

    def self.senator_groups
        Group.where(group_type: "senator")
    end

    def self.rep_groups
        Group.where(group_type: "rep")
    end

    def pack_group_show
    	@group_items = group_items.map {|item| item.pack_group_show }
    	{
    		id: id,
    		name: name,
    		group_type: group_type,
    		group_items: @group_items
    	}
    end
end
