require_relative './seed_helper_methods.rb'
require_relative './SeedCollection.rb'
require "#{Rails.root}/lib/assets/article-parser/wiki-parser.rb"
require 'httparty' 

current_legislator_ids = [
"A000360", "B000575", "B000944", "B001135", "B001230", "B001236", "B001261", "B001267", "B001277", "B001288", "C000127", "C000141", "C000174", "C000567", "C000880", "C001035", "C001047", "C001056", "C001070", "C001071", "C001075", "C001088", "C001095", "C001098", "C001113", "D000563", "D000607", "D000618", "D000622", "E000285", "E000295", "F000062", "F000444", "F000457", "F000463", "G000359", "G000386", "G000555", "G000562", "H000338", "H001041", "H001042", "H001046", "H001061", "H001069", "H001075", "H001076", "I000024", "I000055", "J000293", "K000367", "K000383", "K000384", "K000393", "L000174", "L000575", "L000577", "M000133", "M000303", "M000355", "M000639", "M000934", "M001111", "M001153", "M001169", "M001170", "M001176", "M001183", "N000032", "P000449", "P000595", "P000603", "P000612", "R000122", "R000307", "R000584", "R000595", "R000605", "S000033", "S000148", "S000320", "S000770", "S001141", "S001181", "S001184", "S001194", "S001197", "S001198", "S001202", "T000250", "T000461", "T000464", "T000476", "U000039", "V000128", "W000437", "W000779", "W000802", "W000805", "W000817", "Y000064"
]

wiki_custom = {
  "Robert Sasse" => "Ben_Sasse",
  "Christopher Coons" => "Chris_Coons",
  "Catherine Cortez Masto" => "Catherine_Cortez_Masto",
  "Joe Manchin III" => "Joe_Manchin",
  "Chris Van Hollen" => "Chris_Van_Hollen"
}

# User.create(f_name: "Mitch", l_name: "Kroska", username: "kromitj", email: "kromitj@gmail.com", password: "password", profile_picture: "http://lorempixel.com/200/200/people/", survey_participant: true)

# survey = Survey.create(action: "dashboard")
# survey.survey_questions.create(question: "What is your initial impression of the website")
# survey.survey_questions.create(question: "How would you describe this website in one or more words?")

propublica_api = ENV["PROPUBLICA_API_KEY"]
# # get IDs for all current Legislators
# current_legislator_ids = HTTParty.get("https://api.propublica.org/congress/v1/115/senate/members.json",
#   :headers => { "X-API-Key" => "p9dg2psUQw5YiXHvEmOL41oF4axEzvWT47ldiWMn"})
# current_legislator_ids = current_legislator_ids["results"][0]["members"].map { |legislator| legislator["id"]}
# puts current_legislator_ids


# seed People && Role && CommitteeLegislator
count = 0
current_legislator_ids.each do |legislator_id|

# get JSON data for current legislator using id as parameter
  api_call_uri = "https://www.govtrack.us/api/v2/person/#{legislator_id}"

  legislator_response = HTTParty.get("https://api.propublica.org/congress/v1/members/#{legislator_id}.json",
    :headers => { "X-API-Key" => propublica_api})["results"][0]
  
  if wiki_custom.include?("#{legislator_response["first_name"]} #{legislator_response["last_name"]}")
      url = wiki_custom["#{legislator_response["first_name"]} #{legislator_response["last_name"]}"]
      wiki_url = "https://en.wikipedia.org/wiki/#{url}" 
  else
      puts "#{legislator_response["first_name"]} #{legislator_response["last_name"]}"
      wiki_url = "https://en.wikipedia.org/wiki/#{legislator_response["first_name"]}_#{legislator_response["last_name"]}" 
      wiki_intro = WikiParser.new(wiki_url).intro
  end
  
  

  # Parse person data from JSON response
  person = isolate_person(legislator_response)
  person[:wiki_intro] = wiki_intro
  person = Person.create(person)

  # Parse role data from JSON(api_call)
  role = legislator_response["roles"][0]
  roleObj = isolate_role(role)
  roleObj[:url] = legislator_response["url"]
  roleObj[:person] = person
  roleObj[:role_id] = person[:person_id]
  roleObj[:in_office] = person[:in_office]
  roleObj = Role.create(roleObj)
  puts roleObj.role_id

  # parse bills of role
  member_bills_url = "https://api.propublica.org/congress/v1/members/#{legislator_id}/bills/introduced.json"
  bills = HTTParty.get(member_bills_url, 
    :headers => { "X-API-Key" => propublica_api}
  )["results"].first["bills"].map { |bill| bill["bill_uri"]}
  
  bills.each do |bill_uri|
    bill_response = HTTParty.get(bill_uri, 
      :headers => { "X-API-Key" => propublica_api}
    )["results"][0]
    billObj = isolate_bill(bill_response)
    billObj[:role] = roleObj
    puts "Yooooooo"
    puts roleObj
     bill = roleObj.bills.create(billObj)   
    puts bill.errors.full_messages
  end



  # seed_collection("role", roleObj)

#   committees = isolate_committees(legislator_response)
#   seed_collection("committee", committees) 
#   print "person seeded: #{count}"
#   count+=1
end





# user = User.create(f_name: "Mitch", l_name: "Kroska", username: "kromitj", email: "kromitj@gmail.com", password: "password", profile_picture: "http://lorempixel.com/200/200/people/")


# Group(name: Dems, user_id: user.id, group_type: "Senator")

