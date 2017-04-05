class CreatePeople < ActiveRecord::Migration[5.0]
  def change
    create_table :people, :id => false do |t|
		 t.primary_key :person_id
    	 t.string :member_id
		 t.string :date_of_birth
		 t.integer :cspan_id
		 t.string :first_name
		 t.string :gender
		 # t.string :gender_label
		 t.string :last_name
		 t.string :link
		 t.string :middle_name
		 t.string :name
		 t.boolean :in_office
		 # t.string :namemod
		 # t.string :nickname
		 # t.string :osid
		 t.integer :pvsid
		 # t.string :sortname
		 t.string :twitter_account
		 t.string :youtube_account
		 t.string :img_sm
		 t.string :img_lg
		 t.string :wiki_intro

     	 t.timestamps
    end
  end
end

 