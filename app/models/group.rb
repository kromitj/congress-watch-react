class Group < ApplicationRecord
    has_many :group_items
    belongs_to :user

    def self.senator_groups
        Group.where(group_type: "senator")
    end

    def self.rep_groups
        Group.where(group_type: "rep")
    end
end
