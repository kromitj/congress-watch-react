require 'httparty'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
current_legislator_ids = HTTParty.get('https://www.govtrack.us/api/v2/role?current=true&limit=1000')["objects"].map { |legislator| legislator["person"]["id"]}

 	person = []

  def isolatePerson(legislator)
     person = {}
     person[:bioguideid] = legislator["bioguideid"]
	 person[:birthday] = legislator["birthday"]
	 person[:cspanid] = legislator["cspanid"]
	 person[:firstname] = legislator["firstname"]
	 person[:gender] = legislator["gender"]
	 person[:gender_label] = legislator["gender_label"]
	 person[:id] = legislator["id"]
	 person[:lastname] = legislator["lastname"]
	 person[:link] = legislator["link"]
	 person[:middlename] = legislator["middlename"]
	 person[:name] = legislator["name"]
	 person[:namemod] = legislator["namemod"]
	 person[:nickname] = legislator["nickname"]
	 person[:osid] = legislator["osid"]
	 person[:pvsid] = legislator["pvsid"]
	 person[:sortname] = legislator["sortname"]
	 person[:twitterid] = legislator["twitterid"]
	 person[:youtubeid] = legislator["youtubeid"]
	 person
  end

  def isolateRole(role)
  	 iso_role = {}
  	 iso_role[:caucus] 			 = role["caucus"]
     iso_role[:congress_numbers] = role["congress_numbers"]
     iso_role[:current] 		 = role["current"]
     iso_role[:description] 	 = role["description"]
     iso_role[:district]	 	 = role["district"]
     iso_role[:enddate] 		 = role["enddate"]
     iso_role[:address] 		 = role["extra"]["address"] unless role["extra"] == nil
     iso_role[:contact_form]     = role["extra"]["contact_form"] unless role["extra"] == nil
     iso_role[:fax] 		     = role["extra"]["fax"] unless role["extra"] == nil
     iso_role[:office] 		     = role["extra"]["office"] unless role["extra"] == nil
     iso_role[:rss_url] 		 = role["extra"]["rss_url"] unless role["extra"] == nil
     iso_role[:how] 		     = role["extra"]["how"] unless role["extra"] == nil
     iso_role[:id] 		         = role["id"]
     iso_role[:leadership_title] = role["leadership_title"]
     iso_role[:party] 		     = role["party"]
     iso_role[:phone] 		     = role["phone"]
     iso_role[:role_type] 		 = role["role_type"]
     iso_role[:role_type_label]  = role["role_type_label"]
     iso_role[:senator_class] 	 = role["senator_class"]
     iso_role[:senator_rank]     = role["senator_rank"]
     iso_role[:startdate] 		 = role["startdate"]
     iso_role[:state] 		     = role["state"]
     iso_role[:title] 		     = role["title"]
     iso_role[:title_long] 		 = role["title_long"]
     iso_role[:website] 		 = role["website"]

     iso_role
  end
  ["address", "contact_form", "fax", "office", "rss_url", "how"]

  def isolateRoles(legislator)
  	roles = legislator["roles"]
  	roles.map { |role| isolateRole(role) }
  end

  def field_null?(field)
  	puts "field Null: #{field == nil}"
  	field == nil
  end
  current_legislator_ids.each do |legislator_id|
  	roles = []
    api_call = "https://www.govtrack.us/api/v2/person/#{legislator_id}"
    legislator = res = HTTParty.get(api_call)
    # person << isolatePerson(legislator)
    roles << isolateRoles(legislator)
    puts roles
  end

