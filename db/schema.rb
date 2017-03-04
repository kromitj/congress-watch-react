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

ActiveRecord::Schema.define(version: 20170303034140) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "articles", force: :cascade do |t|
    t.string   "title"
    t.string   "link"
    t.string   "snippet"
    t.string   "thumbnail"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "committee_legislators", id: false, force: :cascade do |t|
    t.integer  "committee_id"
    t.integer  "person_id"
    t.string   "role"
    t.string   "role_label"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "committees", id: false, force: :cascade do |t|
    t.string   "abbrev"
    t.string   "code"
    t.string   "committee"
    t.string   "committee_type"
    t.string   "committee_type_label"
    t.integer  "id"
    t.string   "jurisdiction"
    t.string   "jurisdiction_link"
    t.string   "name"
    t.boolean  "obsolete"
    t.string   "url"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
  end

  create_table "group_items", force: :cascade do |t|
    t.integer  "group_id"
    t.string   "groupable_type"
    t.integer  "groupable_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["groupable_type", "groupable_id"], name: "index_group_items_on_groupable_type_and_groupable_id", using: :btree
  end

  create_table "groups", force: :cascade do |t|
    t.string   "name"
    t.integer  "user_id"
    t.string   "group_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "legislators", force: :cascade do |t|
    t.integer  "thomas_id"
    t.string   "api_uri"
    t.string   "first_name"
    t.string   "middle_name"
    t.string   "last_name"
    t.string   "party"
    t.string   "twitter_account"
    t.string   "facebook_account"
    t.bigint   "facebook_id"
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
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
  end

  create_table "people", primary_key: "person_id", force: :cascade do |t|
    t.string   "bioguideid"
    t.string   "birthday"
    t.integer  "cspanid"
    t.string   "firstname"
    t.string   "gender"
    t.string   "gender_label"
    t.string   "lastname"
    t.string   "link"
    t.string   "middlename"
    t.string   "name"
    t.string   "namemod"
    t.string   "nickname"
    t.string   "osid"
    t.integer  "pvsid"
    t.string   "sortname"
    t.string   "twitterid"
    t.string   "youtubeid"
    t.string   "img_sm"
    t.string   "img_lg"
    t.string   "wiki_intro"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "roles", primary_key: "role_id", force: :cascade do |t|
    t.string   "caucus"
    t.string   "congress_numbers"
    t.boolean  "current"
    t.string   "description"
    t.integer  "district"
    t.date     "enddate"
    t.string   "address"
    t.string   "contact_form"
    t.string   "fax"
    t.string   "office"
    t.string   "rss_url"
    t.string   "how"
    t.string   "leadership_title"
    t.string   "party"
    t.integer  "person_id"
    t.string   "phone"
    t.string   "role_type"
    t.string   "role_type_label"
    t.string   "senator_class"
    t.string   "senator_rank"
    t.date     "startdate"
    t.string   "state"
    t.string   "title"
    t.string   "title_long"
    t.string   "website"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "f_name"
    t.string   "l_name"
    t.string   "username"
    t.string   "email"
    t.string   "password_digest"
    t.string   "profile_picture"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
