class GroupItem < ApplicationRecord
    belongs_to :groupable, polymorphic: true
    belongs_to :group
end
