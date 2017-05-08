class AddViewCountToRoles < ActiveRecord::Migration[5.0]
  def change
    add_column :roles, :view_count, :integer, default: 0
  end
end
