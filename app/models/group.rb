class Group < ApplicationRecord
    has_many :group_items

    def self.senator_groups
        Group.where(group_type: "senator")
    end

    def self.rep_groups
        Group.where(group_type: "rep")
    end
end
