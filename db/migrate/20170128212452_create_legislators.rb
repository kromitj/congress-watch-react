class CreateLegislators < ActiveRecord::Migration[5.0]
  def change
    create_table :legislators, id: false do |t|
      t.string :id
      t.integer :thomas_id
      t.string :api_uri
      t.string :first_name
      t.string :middle_name
      t.string :last_name
      t.string :party
      t.string :twitter_account
      t.string :facebook_account
      t.integer :facebook_id, :limit => 8
      t.string :google_entity_id
      t.string :url
      t.string :rss_url
      t.string :domain
      t.string :dw_nominate
      t.string :ideal_point
      t.integer :seniority
      t.integer :next_election
      t.integer :total_votes
      t.integer :missed_votes
      t.integer :total_present
      t.string :state
      t.string :district
      t.float :missed_votes_pct
      t.float :votes_with_party_pct

      t.timestamps
    end
  end
end
