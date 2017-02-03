class CreatePeople < ActiveRecord::Migration[5.0]
  def change
    create_table :people do |t|
    	 t.string :bioguideid
		 t.string :birthday 
		 t.integer :cspanid
		 t.string :firstname
		 t.string :gender
		 t.string :gender_label
		 t.integer :id
		 t.string :lastname
		 t.string :link
		 t.string :middlename
		 t.string :name
		 t.string :namemod
		 t.string :nickname
		 t.string :osid
		 t.integer :pvsid
		 t.string :sortname
		 t.string :twitterid
		 t.string :youtubeid

     	 t.timestamps
    end
  end
end