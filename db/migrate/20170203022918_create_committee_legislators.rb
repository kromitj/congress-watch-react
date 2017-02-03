class CreateCommitteeLegislators < ActiveRecord::Migration[5.0]
  def change
    create_table :committee_legislators do |t|
		t.integer :committee_id
		t.integer :person_id
		t.string :role
		t.string :role_label

        t.timestamps
    end
  end
end
