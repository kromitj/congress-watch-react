require_relative './seed_helper_methods.rb'
require_relative './SeedCollection.rb'
require "#{Rails.root}/lib/assets/article-parser/wiki-parser.rb"
require 'httparty' 

# current_senator_ids = [
# "A000360", "B000575", "B000944", "B001135", "B001230", "B001236", "B001261", "B001267", "B001277", "B001288", "C000127", "C000141", "C000174", "C000567", "C000880", "C001035", "C001047", "C001056", "C001070", "C001071", "C001075", "C001088", "C001095", "C001098", "C001113", "D000563", "D000607", "D000618", "D000622", "E000285", "E000295", "F000062", "F000444", "F000457", "F000463", "G000359", "G000386", "G000555", "G000562", "H000338", "H001041", "H001042", "H001046", "H001061", "H001069", "H001075", "H001076", "I000024", "I000055", "J000293", "K000367", "K000383", "K000384", "K000393", "L000174", "L000575", "L000577", "M000133", "M000303", "M000355", "M000639", "M000934", "M001111", "M001153", "M001169", "M001170", "M001176", "M001183", "N000032", "P000449", "P000595", "P000603", "P000612", "R000122", "R000307", "R000584", "R000595", "R000605", "S000033", "S000148", "S000320", "S000770", "S001141", "S001181", "S001184", "S001194", "S001197", "S001198", "S001202", "T000250", "T000461", "T000464", "T000476", "U000039", "V000128", "W000437", "W000779", "W000802", "W000805", "W000817", "Y000064"
# ]

# current_house_ids = [
# "A000055","A000367","A000369","A000370","A000371","A000372","A000374","A000375","B000213","B000287","B000490","B000574","B000755","B001227","B001243","B001245","B001248","B001250","B001251","B001257","B001260","B001269","B001270","B001273","B001274","B001275","B001278","B001281","B001282","B001283","B001284","B001285","B001286","B001287","B001289","B001290","B001291","B001292","B001293","B001294","B001295","B001296","B001297","B001298","B001299","B001300","B001301","B001302","B001303","B001304","B001305","C000059","C000266","C000537","C000714","C000754","C000984","C001037","C001038","C001048","C001049","C001051","C001053","C001059","C001061","C001062","C001063","C001066","C001067","C001068","C001069","C001072","C001076","C001077","C001078","C001080","C001084","C001087","C001090","C001091","C001092","C001093","C001094","C001096","C001097","C001101","C001103","C001105","C001106","C001107","C001108","C001109","C001110","C001111","C001112","D000096","D000191","D000197","D000216","D000399","D000482","D000533","D000598","D000600","D000604","D000610","D000612","D000614","D000615","D000616","D000617","D000619","D000620","D000621","D000623","D000624","D000625","D000626","D000627","D000628","E000179","E000215","E000288","E000293","E000294","E000296","E000297","F000372","F000448","F000449","F000450","F000454","F000455","F000459","F000460","F000461","F000462","F000464","F000465","F000466","G000289","G000377","G000410","G000535","G000546","G000551","G000552","G000553","G000558","G000559","G000560","G000563","G000565","G000566","G000568","G000571","G000574","G000576","G000577","G000578","G000579","G000580","G000581","G000582","G000583","H000324","H000874","H001036","H001038","H001045","H001047","H001048","H001050","H001052","H001053","H001056","H001058","H001059","H001064","H001065","H001067","H001068","H001071","H001072","H001073","H001074","H001077","I000056","J000032","J000126","J000174","J000255","J000288","J000289","J000290","J000292","J000294","J000295","J000297","J000298","J000299","K000009","K000188","K000210","K000362","K000375","K000376","K000378","K000379","K000380","K000381","K000382","K000385","K000386","K000387","K000388","K000389","K000390","K000391","K000392","L000263","L000287","L000397","L000480","L000491","L000551","L000554","L000557","L000559","L000560","L000562","L000563","L000564","L000565","L000566","L000567","L000569","L000570","L000573","L000576","L000578","L000579","L000580","L000581","L000582","L000583","L000584","L000585","L000586","L000587","M000087","M000312","M001137","M001143","M001151","M001156","M001157","M001158","M001159","M001160","M001163","M001165","M001166","M001177","M001179","M001180","M001181","M001182","M001184","M001185","M001187","M001188","M001189","M001190","M001193","M001194","M001195","M001196","M001197","M001198","M001199","M001200","M001201","M001202","N000002","N000015","N000127","N000147","N000179","N000181","N000184","N000188","N000189","O000168","O000170","O000171","P000034","P000096","P000197","P000258","P000523","P000588","P000591","P000592","P000593","P000594","P000597","P000598","P000599","P000601","P000602","P000604","P000605","P000606","P000607","P000608","P000609","P000610","P000611","P000613","Q000023","R000395","R000409","R000435","R000486","R000487","R000515","R000570","R000575","R000576","R000577","R000578","R000580","R000582","R000583","R000585","R000586","R000588","R000591","R000592","R000593","R000597","R000598","R000599","R000600","R000601","R000602","R000603","R000604","R000606","R000607","R000608","R000609","S000051","S000185","S000244","S000248","S000250","S000344","S000364","S000480","S000510","S000522","S000583","S001145","S001148","S001150","S001154","S001156","S001157","S001165","S001168","S001170","S001172","S001175","S001176","S001177","S001180","S001183","S001185","S001187","S001189","S001190","S001191","S001192","S001193","S001195","S001196","S001199","S001200","S001201","T000193","T000238","T000460","T000462","T000463","T000465","T000467","T000468","T000469","T000470","T000472","T000474","T000475","T000477","T000478","U000031","V000081","V000108","V000129","V000130","V000131","V000132","W000187","W000791","W000795","W000797","W000798","W000799","W000800","W000804","W000806","W000808","W000809","W000810","W000812","W000813","W000814","W000815","W000816","W000819","W000820","W000821","W000822","Y000033","Y000062","Y000063","Y000065","Y000066","Z000017","Z000018"
# ]
current_legislator_ids = [
"A000360", "B000575", "B000944", "B001135", "B001230", "A000055","A000367","A000369","A000370","A000371"
]
# current_legislator_ids = [
# "A000055","A000367","A000369","A000370","A000371","A000372","A000374","A000375","B000213","B000287","B000490","B000574","B000755","B001227","B001243","B001245","B001248","B001250","B001251","B001257","B001260","B001269","B001270","B001273","B001274","B001275","B001278","B001281","B001282","B001283","B001284","B001285","B001286","B001287","B001289","B001290","B001291","B001292","B001293","B001294","B001295","B001296","B001297","B001298","B001299","B001300","B001301","B001302","B001303","B001304","B001305","C000059","C000266","C000537","C000714","C000754","C000984","C001037","C001038","C001048","C001049","C001051","C001053","C001059","C001061","C001062","C001063","C001066","C001067","C001068","C001069","C001072","C001076","C001077","C001078","C001080","C001084","C001087","C001090","C001091","C001092","C001093","C001094","C001096","C001097","C001101","C001103","C001105","C001106","C001107","C001108","C001109","C001110","C001111","C001112","D000096","D000191","D000197","D000216","D000399","D000482","D000533","D000598","D000600","D000604","D000610","D000612","D000614","D000615","D000616","D000617","D000619","D000620","D000621","D000623","D000624","D000625","D000626","D000627","D000628","E000179","E000215","E000288","E000293","E000294","E000296","E000297","F000372","F000448","F000449","F000450","F000454","F000455","F000459","F000460","F000461","F000462","F000464","F000465","F000466","G000289","G000377","G000410","G000535","G000546","G000551","G000552","G000553","G000558","G000559","G000560","G000563","G000565","G000566","G000568","G000571","G000574","G000576","G000577","G000578","G000579","G000580","G000581","G000582","G000583","H000324","H000874","H001036","H001038","H001045","H001047","H001048","H001050","H001052","H001053","H001056","H001058","H001059","H001064","H001065","H001067","H001068","H001071","H001072","H001073","H001074","H001077","I000056","J000032","J000126","J000174","J000255","J000288","J000289","J000290","J000292","J000294","J000295","J000297","J000298","J000299","K000009","K000188","K000210","K000362","K000375","K000376","K000378","K000379","K000380","K000381","K000382","K000385","K000386","K000387","K000388","K000389","K000390","K000391","K000392","L000263","L000287","L000397","L000480","L000491","L000551","L000554","L000557","L000559","L000560","L000562","L000563","L000564","L000565","L000566","L000567","L000569","L000570","L000573","L000576","L000578","L000579","L000580","L000581","L000582","L000583","L000584","L000585","L000586","L000587","M000087","M000312","M001137","M001143","M001151","M001156","M001157","M001158","M001159","M001160","M001163","M001165","M001166","M001177","M001179","M001180","M001181","M001182","M001184","M001185","M001187","M001188","M001189","M001190","M001193","M001194","M001195","M001196","M001197","M001198","M001199","M001200","M001201","M001202","N000002","N000015","N000127","N000147","N000179","N000181","N000184","N000188","N000189","O000168","O000170","O000171","P000034","P000096","P000197","P000258","P000523","P000588","P000591","P000592","P000593","P000594","P000597","P000598","P000599","P000601","P000602","P000604","P000605","P000606","P000607","P000608","P000609","P000610","P000611","P000613","Q000023","R000395","R000409","R000435","R000486","R000487","R000515","R000570","R000575","R000576","R000577","R000578","R000580","R000582","R000583","R000585","R000586","R000588","R000591","R000592","R000593","R000597","R000598","R000599","R000600","R000601","R000602","R000603","R000604","R000606","R000607","R000608","R000609","S000051","S000185","S000244","S000248","S000250","S000344","S000364","S000480","S000510","S000522","S000583","S001145","S001148","S001150","S001154","S001156","S001157","S001165","S001168","S001170","S001172","S001175","S001176","S001177","S001180","S001183","S001185","S001187","S001189","S001190","S001191","S001192","S001193","S001195","S001196","S001199","S001200","S001201","T000193","T000238","T000460","T000462","T000463","T000465","T000467","T000468","T000469","T000470","T000472","T000474","T000475","T000477","T000478","U000031","V000081","V000108","V000129","V000130","V000131","V000132","W000187","W000791","W000795","W000797","W000798","W000799","W000800","W000804","W000806","W000808","W000809","W000810","W000812","W000813","W000814","W000815","W000816","W000819","W000820","W000821","W000822","Y000033","Y000062","Y000063","Y000065","Y000066","Z000017","Z000018"
# ]
# current_senate_ids = ["A000360", "B000575", "B000944"]
# current_house_ids = ["A000055","A000367","A000369"]
# current_legislator_ids = ["A000360", "A000055"]

wiki_custom = {
  "Robert Sasse" => "Ben_Sasse",
  "Christopher Coons" => "Chris_Coons",
  "Catherine Cortez Masto" => "Catherine_Cortez_Masto",
  "Joe Manchin III" => "Joe_Manchin",
  "Chris Van Hollen" => "Chris_Van_Hollen"
}

role_abbrev = {
  "Senator"=> "Sen.",
  "Representative"=> "Rep."
  }

def current_bill_status(bill)
  # puts "fuck balls: #{bill["enacted"]}" 
  # puts "fuck balls: #{bill["senate_passage"]}"
  # puts "fuck balls: #{bill["house_passage"]}"
  if bill["vetoed"] != ""
    return 0
  elsif bill["enacted"] != ""
    return 4
  elsif bill["senate_passage"] != ""
    return 3
  elsif bill["house_passage"] != ""
    return 2
  else
    return 1
  end
end
# User.create(f_name: "Mitch", l_name: "Kroska", username: "kromitj", email: "kromitj@gmail.com", password: "password", profile_picture: "http://lorempixel.com/200/200/people/", survey_participant: true)

# survey = Survey.create(action: "dashboard")
# survey.survey_questions.create(question: "What is your initial impression of the website")
# survey.survey_questions.create(question: "How would you describe this website in one or more words?")

propublica_api = ENV["PROPUBLICA_API_KEY"]


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
  roleObj[:name] = person.name
  roleObj[:role_id] = person[:person_id]
  roleObj[:in_office] = person[:in_office]
  roleObj[:description] = "#{roleObj[:role_type]} #{roleObj[:name]} of #{roleObj[:state]}"
  roleObj[:desc_short] = "#{role_abbrev[roleObj[:role_type]]} #{roleObj[:name]}[#{role["party"]}-#{role["state"]}]"
  roleObj = Role.create(roleObj)
  puts roleObj.role_id

  
  # parse bills of role
  # get bills that have been introduced by role
  member_bills_url = "https://api.propublica.org/congress/v1/members/#{legislator_id}/bills/introduced.json"
  bills = HTTParty.get(member_bills_url, 
    :headers => { "X-API-Key" => propublica_api}
  )["results"].first["bills"].map { |bill| bill["bill_uri"]}
  
  bills.each do |bill_uri|
    bill_response = HTTParty.get(bill_uri, 
      :headers => { "X-API-Key" => propublica_api}
    )["results"][0]
    if (bill_response["congress"] != "115" && bill_response["congress"] != "114")
      puts "not congress 115"
    else
      puts "congress 115"

      #get subjects of bill
      # bill = bill_response["bill_id"][/^\w+/]
      # subject_url = "https://api.propublica.org/congress/v1/114/bills/#{bill}/subjects.json"
      # bill_subjects = HTTParty.get(subject_url, 
      # :headers => { "X-API-Key" => propublica_api})
      subjects = ""
      # subjects = bill_subjects["results"][0]["subjects"].map { |subject| subject["name"]} unless bill_subjects["results"][0]["subjects"] == nil

      billObj = isolate_bill(bill_response)
      billObj[:subjects] = subjects
      billObj[:role] = roleObj
      billObj[:sponsor] = roleObj[:desc_short]
      status_hash = { "enacted"=> billObj[:enacted], "house_passage"=> billObj[:house_passage], "senate_passage"=> billObj[:senate_passage], "vetoed"=> billObj[:vetoed]}
      billObj[:status] = current_bill_status(status_hash)
       bill = roleObj.bills.create(billObj)   
      puts bill.errors.full_messages
    end
  end

  # get bills that have been updated
  member_bills_url = "https://api.propublica.org/congress/v1/members/#{legislator_id}/bills/updated.json"
  bills = HTTParty.get(member_bills_url, 
    :headers => { "X-API-Key" => propublica_api}
  )["results"].first["bills"].map { |bill| bill["bill_uri"]}
  
  bills.each do |bill_uri|
    bill_response = HTTParty.get(bill_uri, 
      :headers => { "X-API-Key" => propublica_api}
    )["results"][0]
    if (bill_response["congress"] != "115" && bill_response["congress"] != "114")
      puts "not congress 115"
    else
      puts "congress 115"

      #get subjects of bill
      # bill = bill_response["bill_id"][/^\w+/]
      # subject_url = "https://api.propublica.org/congress/v1/114/bills/#{bill}/subjects.json"
      # bill_subjects = HTTParty.get(subject_url, 
      # :headers => { "X-API-Key" => propublica_api})
      subjects = ""
      # subjects = bill_subjects["results"][0]["subjects"].map { |subject| subject["name"]}

      billObj = isolate_bill(bill_response)
      billObj[:role] = roleObj
      billObj[:subjects] = subjects
      billObj[:sponsor] = roleObj[:desc_short]
      status_hash = { "enacted"=> billObj[:enacted], "house_passage"=> billObj[:house_passage], "senate_passage"=> billObj[:senate_passage], "vetoed"=> billObj[:vetoed]}
      billObj[:status] = current_bill_status(status_hash)
       bill = roleObj.bills.create(billObj)   
      puts bill.errors.full_messages
    end
  end

  # seed_collection("role", roleObj)

#   committees = isolate_committees(legislator_response)
#   seed_collection("committee", committees) 
#   print "person seeded: #{count}"
#   count+=1
end





# user = User.create(f_name: "Mitch", l_name: "Kroska", username: "kromitj", email: "kromitj@gmail.com", password: "password", profile_picture: "http://lorempixel.com/200/200/people/")


# Group(name: Dems, user_id: user.id, group_type: "Senator")

