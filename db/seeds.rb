
require_relative './seed_helper_methods.rb'
require_relative './SeedHelper.rb'
require_relative './SeedCollection.rb'
#gems
require 'httparty' 


current_legislator_ids = HTTParty.get('https://www.govtrack.us/api/v2/role?current=true&limit=1000')["objects"].map { |legislator| legislator["person"]["id"]}

person_json_fields = ["bioguideid", "birthday", "cspanid", "firstname", "gender", "gender_label", "id", "lastname", "link", "middlename", "name", "namemod", "nickname", "osid", "pvsid", "sortname", "twitterid", "youtubeid"]
role_json_fields = ["caucus", "congress_numbers", "current", "description", "district", "enddate", "address", "contact_form", "fax", "office", "rss_url", "how", "role_id", "leadership_title", "party", "person", "phone", "role_type", "role_type_label", "senator_class", "senator_rank", "startdate", "state", "title", "title_long", "website"]
committee_member_json_fields = ["committee", "person", "role", "role_label"]

belongs_toos = [{"class" => Person, "field_id" => "person_id", "record_field" =>  "person"}]
change_headers = [{"from" => "committee", "to" => "committee_id"}]
remove_headers = ["committee"]

people = SeedCollection.new(Person, "people", true, person_json_fields)
roles = SeedCollection.new(Role, "roles", false, role_json_fields, belongs_toos)
committee_legislators = SeedCollection.new(CommitteeLegislator, "committeeassignments", false, committee_member_json_fields, belongs_toos, change_headers, remove_headers)


seeds = SeedHelper.new("https://www.govtrack.us/api/v2/")
seeds.create_group("by_person", "person/", [people, roles, committee_legislators], current_legislator_ids)
seeds.enum_groups

   







#files

# get IDs for all current Legislators
# current_legislator_ids = HTTParty.get('https://www.govtrack.us/api/v2/role?current=true&limit=1000')["objects"].map { |legislator| legislator["person"]["id"]}
  
# seed People && Role && CommitteeLegislator

# leg_seed_count = current_legislator_ids.count # used for progressbar
# current_leg_seed_count = 1.0 # used for progress bar
# progress_bar_param_keys = ["current_leg_seed_count", "leg_seed_count", "refresh_rate"]
# current_legislator_ids.each do |legislator_id|

  # get JSON data for current legislator using id as parameter
  # api_call_uri = "https://www.govtrack.us/api/v2/person/#{legislator_id}"
  # legislator_response = HTTParty.get(api_call_uri)

  # Parse person data from JSON response
  # person = isolate_person(legislator_response)
  # Person.create(person)

  # Parse role data from JSON(api_call)
#   roles = isolate_roles(legislator_response)
#   seed_collection("role", roles)

#   committees = isolate_committees(legislator_response)
#   seed_collection("committee", committees)
#   handle_progress_bar(progress_bar_param_keys,[current_leg_seed_count, leg_seed_count, 5])  
#   current_leg_seed_count+=1
# end

# seed Committee


