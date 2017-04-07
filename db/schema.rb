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

ActiveRecord::Schema.define(version: 20170402215236) do

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

  create_table "bills", force: :cascade do |t|
    t.integer  "congress"
    t.string   "bill"
    t.string   "bill_id"
    t.string   "bill_type"
    t.string   "number"
    t.string   "bill_uri"
    t.string   "title"
    t.string   "sponsor"
    t.integer  "status"
    t.integer  "role_id"
    t.string   "sponsor_uri"
    t.string   "sponsor_party"
    t.string   "sponsor_state"
    t.string   "gpo_pdf_uri"
    t.string   "congressdotgov_url"
    t.string   "govtrack_url"
    t.date     "introduced_date"
    t.boolean  "active"
    t.string   "house_passage"
    t.string   "senate_passage"
    t.string   "enacted"
    t.string   "vetoed"
    t.integer  "cosponsors"
    t.integer  "withdrawn_cosponsors"
    t.string   "primary_subject"
    t.string   "committees"
    t.date     "latest_major_action_date"
    t.string   "latest_major_action"
    t.string   "last_vote_date"
    t.string   "house_passage_vote"
    t.string   "senate_passage_vote"
    t.string   "summary"
    t.string   "summary_short"
    t.string   "subjects"
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
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
    t.string   "member_id"
    t.string   "date_of_birth"
    t.integer  "cspan_id"
    t.string   "first_name"
    t.string   "gender"
    t.string   "last_name"
    t.string   "link"
    t.string   "middle_name"
    t.string   "name"
    t.boolean  "in_office"
    t.integer  "pvsid"
    t.string   "twitter_account"
    t.string   "youtube_account"
    t.string   "img_sm"
    t.string   "img_lg"
    t.string   "wiki_intro"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "roles", primary_key: "role_id", force: :cascade do |t|
    t.string   "congress_number"
    t.string   "description"
    t.string   "desc_short"
    t.integer  "district"
    t.date     "end_date"
    t.string   "office"
    t.string   "leadership_role"
    t.string   "party"
    t.integer  "person_id"
    t.string   "phone"
    t.string   "role_type"
    t.string   "name"
    t.string   "seniority"
    t.date     "start_date"
    t.string   "state"
    t.string   "title"
    t.string   "url"
    t.boolean  "in_office"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "survey_questions", force: :cascade do |t|
    t.integer  "survey_id"
    t.string   "question"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "surveys", force: :cascade do |t|
    t.string   "action"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_survey_responses", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "survey_question_id"
    t.string   "response"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "f_name"
    t.string   "l_name"
    t.string   "username"
    t.string   "email"
    t.string   "password_digest"
    t.string   "profile_picture"
    t.boolean  "survey_participant"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

end
