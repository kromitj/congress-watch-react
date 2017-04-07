class CreateBills < ActiveRecord::Migration[5.0]
  def change
    create_table :bills do |t|
    	t.integer :congress
    	t.string :bill
    	t.string :bill_id
    	t.string :bill_type
    	t.string :number
    	t.string :bill_uri
    	t.string :title		

		t.string :sponsor
		t.integer :status
    	t.integer :role_id
    	t.string :sponsor_uri
    	t.string :sponsor_party
    	t.string :sponsor_state
	    t.string :gpo_pdf_uri
		t.string :congressdotgov_url
		t.string :govtrack_url
		t.date :introduced_date
		t.boolean :active
		t.string :house_passage
		t.string :senate_passage
		t.string :enacted
		t.string :vetoed
		t.integer :cosponsors
		t.integer :withdrawn_cosponsors
		t.string :primary_subject
		t.string :committees
		t.date :latest_major_action_date
		t.string :latest_major_action
		t.string :last_vote_date
		t.string :house_passage_vote
		t.string :senate_passage_vote
		t.string :summary
		t.string :summary_short
		t.string :subjects

      t.timestamps
    end
  end
end
