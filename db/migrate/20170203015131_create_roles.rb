class CreateRoles < ActiveRecord::Migration[5.0]
  def change
    create_table :roles, :id => false do |t|
         t.primary_key :role_id
         # t.string :caucus
         t.string :congress_number
         t.string :description
         t.string :desc_short
         t.integer :district
         t.date :end_date
         # t.string :address
         # t.string :contact_form
         # t.string :fax
         t.string :office
         # t.string :rss_url
         # t.string :how
         t.string :leadership_role
         t.string :party
         t.integer :person_id
         t.string :phone
         t.string :role_type
         t.string :name
         # t.string :role_type_label
         t.string :seniority
         # t.string :senator_rank
         t.date  :start_date
         t.string :state
         t.string :title
         # t.string :title_long
         t.string :url
         t.boolean :in_office
         
         t.timestamps

    end
  end
end
