
require_relative './seed_helper_methods.rb'
require_relative './SeedCollection.rb'
require "#{Rails.root}/lib/assets/article-parser/wiki-parser.rb"
require 'httparty' 

User.create(f_name: "Mitch", l_name: "Kroska", username: "kromitj", email: "kromitj@gmail.com", password: "password", profile_picture: "http://lorempixel.com/200/200/people/", survey_participant: true)

survey = Survey.create(action: "dashboard")
survey.survey_questions.create(question: "What is your initial impression of the website")
survey.survey_questions.create(question: "How would you describe this website in one or more words?")

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

