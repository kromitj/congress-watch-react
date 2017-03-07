
require_relative './seed_helper_methods.rb'
require_relative './SeedCollection.rb'
require "#{Rails.root}/lib/assets/article-parser/wiki-parser.rb"
#gems
require 'httparty' 

# legislator_all = 'https://www.govtrack.us/api/v2/role?current=true&limit=1000'
# legislator_ids = SeedBuddy.map_api_response(legislator_all, nil, ["objects"], ["person"], "id")
# seed = SeedBuddy.new('https://www.govtrack.us/api/v2/')
# seed.get_model("CommitteeLegislator").api_model.modify_schema_field({old_key: "committee_id", new_key: "committee"})
# seed.create_group({members: ["Person", "Role", "CommitteeLegislator"], api_path: "https://www.govtrack.us/api/v2/person", api_calls: legislator_ids})
# puts seed.groups


# raise a.inspect
# current_legislator_ids = HTTParty.get('https://www.govtrack.us/api/v2/role?current=true&limit=1000')["objects"].map { |legislator| legislator["person"]["id"]}

# person_json_fields = ["bioguideid", "birthday", "cspanid", "firstname", "gender", "gender_label", "id", "lastname", "link", "middlename", "name", "namemod", "nickname", "osid", "pvsid", "sortname", "twitterid", "youtubeid"]
# role_json_fields = ["caucus", "congress_numbers", "current", "description", "district", "enddate", "address", "contact_form", "fax", "office", "rss_url", "how", "role_id", "leadership_title", "party", "person", "phone", "role_type", "role_type_label", "senator_class", "senator_rank", "startdate", "state", "title", "title_long", "website"]
# committee_member_json_fields = ["committee", "person", "role", "role_label"]

# belongs_toos = [{"class" => Person, "field_id" => "person_id", "record_field" =>  "person"}]
# change_headers = [{"from" => "committee", "to" => "committee_id"}]
# remove_headers = ["committee"]

# people = SeedCollection.new(Person, "people", true, person_json_fields)
# roles = SeedCollection.new(Role, "roles", false, role_json_fields, belongs_toos)
# committee_legislators = SeedCollection.new(CommitteeLegislator, "committeeassignments", false, committee_member_json_fields, belongs_toos, change_headers, remove_headers)


# seeds = SeedHelper.new("https://www.govtrack.us/api/v2/")
# seeds.create_group("by_person", "person/", [people, roles, committee_legislators], current_legislator_ids)
# seeds.enum_groups

   
# seed = SeedBuddy.new("API",'https://www.govtrack.us/api/v2/')
# seed.create_group({members: ["Person", "Role", "CommitteeLegislator"], api_path: "https://www.govtrack.us/api/v2/person/"})
# seed.map_group_calls(0, 'https://www.govtrack.us/api/v2/role?current=true&limit=1000', nil, ["objects"], ["person"], "id")
# seed.get_model("CommitteeLegislator").api_model.modify_schema_field([{old_key: "committee_id", new_key: "committee"}])

# seed.generate_json
# seed.seed_data


User.create(f_name: "Mitch", l_name: "Kroska", username: "kromitj", email: "kromitj@gmail.com", password: "password", profile_picture: "http://lorempixel.com/200/200/people/", survey_participant: true)

survey = Survey.create(action: "dashboard")
survey.survey_questions.create(question: "What is your initial impression of the website")

# # get IDs for all current Legislators
current_legislator_ids = HTTParty.get('https://www.govtrack.us/api/v2/role?current=true&limit=1000')["objects"].map { |legislator| legislator["person"]["id"]}
print current_legislator_ids
# seed People && Role && CommitteeLegislator
count = 0
current_legislator_ids.each do |legislator_id|

  # get JSON data for current legislator using id as parameter
  api_call_uri = "https://www.govtrack.us/api/v2/person/#{legislator_id}"
  legislator_response = HTTParty.get(api_call_uri)
  if legislator_response["firstname"] != "Robert"
    if (legislator_response["lastname"] == "Sasse") 
      wiki_url = "https://en.wikipedia.org/wiki/Ben_Sasse" 
    else
      puts "#{legislator_response["firstname"]} #{legislator_response["lastname"]}"
      wiki_url = "https://en.wikipedia.org/wiki/#{legislator_response["firstname"]}_#{legislator_response["lastname"]}" 
      wiki_intro = WikiParser.new(wiki_url).intro
    end
  end
  
  # Parse person data from JSON response
  person = isolate_person(legislator_response)
  person[:wiki_intro] = wiki_intro
  Person.create(person)

  # Parse role data from JSON(api_call)
  roles = isolate_roles(legislator_response)
  seed_collection("role", roles)

  committees = isolate_committees(legislator_response)
  seed_collection("committee", committees) 
  print "person seeded: #{count}"
  count+=1
end




user = User.create(f_name: "Mitch", l_name: "Kroska", username: "kromitj", email: "kromitj@gmail.com", password: "password", profile_picture: "http://lorempixel.com/200/200/people/")


Group(name: Dems, user_id: user.id, group_type: "Senator")

