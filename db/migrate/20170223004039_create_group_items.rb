class CreateGroupItems < ActiveRecord::Migration[5.0]
  def change
    create_table :group_items do |t|
    	
      t.integer :group_id
      t.references :groupable, polymorphic: true, index: true

      t.timestamps
    end
  end
end
