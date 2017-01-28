# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170128212452) do

  create_table "legislators", id: false, force: :cascade do |t|
    t.string   "id"
    t.integer  "thomas_id"
    t.string   "api_uri"
    t.string   "first_name"
    t.string   "middle_name"
    t.string   "last_name"
    t.string   "party"
    t.string   "twitter_account"
    t.string   "facebook_account"
    t.integer  "facebook_id",          limit: 8
    t.string   "google_entity_id"
    t.string   "url"
    t.string   "rss_url"
    t.string   "domain"
    t.string   "dw_nominate"
    t.string   "ideal_point"
    t.integer  "seniority"
    t.integer  "next_election"
    t.integer  "total_votes"
    t.integer  "missed_votes"
    t.integer  "total_present"
    t.string   "state"
    t.string   "district"
    t.float    "missed_votes_pct"
    t.float    "votes_with_party_pct"
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
  end

end
