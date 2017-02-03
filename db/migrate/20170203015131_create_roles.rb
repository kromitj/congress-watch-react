class CreateRoles < ActiveRecord::Migration[5.0]
  def change
    create_table :roles, :id => false do |t|
         t.primary_key :role_id
         t.string :caucus
         t.string :congress_numbers
         t.boolean :current
         t.string :description
         t.integer :district
         t.date :enddate
         t.string :address
         t.string :contact_form
         t.string :fax
         t.string :office
         t.string :rss_url
         t.string :how
         t.string :leadership_title
         t.string :party
         t.integer :person_id
         t.string :phone
         t.string :role_type
         t.string :role_type_label
         t.string :senator_class
         t.string :senator_rank
         t.date  :startdate
         t.string :state
         t.string :title
         t.string :title_long
         t.string :website
   
         t.timestamps

    end
  end
end
