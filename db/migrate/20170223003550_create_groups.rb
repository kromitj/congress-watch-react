class CreateGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :groups do |t|
      t.string :name
      t.integer :user_id
      t.string :group_type

      t.timestamps
    end
  end
end
