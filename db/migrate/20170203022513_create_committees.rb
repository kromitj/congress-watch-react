class CreateCommittees < ActiveRecord::Migration[5.0]
  def change
    create_table :committees do |t|
    	
		t.string :abbrev
		t.string :code
		t.string :committee
		t.string :committee_type
		t.string :committee_type_label
		t.integer :id
		t.string :jurisdiction
		t.string :jurisdiction_link
		t.string :name
		t.bollean :obsolete
		t.string :url

        t.timestamps
    end
  end
end
