def isolate_person(legislator)
  person = {}
  person[:bioguideid] = legislator["bioguideid"]
  person[:birthday] = legislator["birthday"]
  person[:cspanid] = legislator["cspanid"]
  person[:firstname] = legislator["firstname"]
  person[:gender] = legislator["gender"]
  person[:gender_label] = legislator["gender_label"]
  person[:person_id] = legislator["id"]
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
  person[:img_sm] = "https://raw.githubusercontent.com/unitedstates/images/gh-pages/congress/225x275/#{legislator["bioguideid"]}.jpg"
  person[:img_lg] = "https://raw.githubusercontent.com/unitedstates/images/gh-pages/congress/450x550/#{legislator["bioguideid"]}.jpg"
  
  return person
end

def isolate_role(role)
   iso_role = {}
   iso_role[:caucus] = role["caucus"]
   iso_role[:congress_numbers] = role["congress_numbers"]
   iso_role[:current] = role["current"]
   iso_role[:description] = role["description"]
   iso_role[:district] = role["district"]
   iso_role[:enddate] = role["enddate"]
   iso_role[:address] = role["extra"]["address"] unless role["extra"] == nil
   iso_role[:contact_form] = role["extra"]["contact_form"] unless role["extra"] == nil
   iso_role[:fax] = role["extra"]["fax"] unless role["extra"] == nil
   iso_role[:office] = role["extra"]["office"] unless role["extra"] == nil
   iso_role[:rss_url] = role["extra"]["rss_url"] unless role["extra"] == nil
   iso_role[:how] = role["extra"]["how"] unless role["extra"] == nil
   iso_role[:role_id] = role["id"]
   iso_role[:leadership_title] = role["leadership_title"]
   iso_role[:party] = role["party"]
   iso_role[:person] = role["person"]
   iso_role[:phone] = role["phone"]
   iso_role[:role_type] = role["role_type"]
   iso_role[:role_type_label] = role["role_type_label"]
   iso_role[:senator_class] = role["senator_class"]
   iso_role[:senator_rank] = role["senator_rank"]
   iso_role[:startdate] = role["startdate"]
   iso_role[:state] = role["state"]
   iso_role[:title] = role["title"]
   iso_role[:title_long] = role["title_long"]
   iso_role[:website] = role["website"]

   return iso_role
end

def isolate_roles(legislator)
	legislator["roles"].map { |role| isolate_role(role) }
end

def isolate_committee(committee)
  iso_committee = {}
  iso_committee[:committee_id] = committee["committee"]
  iso_committee[:person_id] = committee["person"]
  iso_committee[:role] = committee["role"]
  iso_committee[:role_label] = committee["role_label"]
  
  return iso_committee
end

def isolate_committees(legislator)
	legislator["committeeassignments"].map { |committee| isolate_committee(committee)}
end

def seed_collection(title, collection)
	case title
  	when "person"
  		collection.each { |person| Person.create(person) { |person| person.id = person["id"] } }
  	
    when "role"
      collection.each do |role| 
        person = Person.where({person_id: role[:person]}).first
        role[:person] = person
        Role.create(role)
      end
  	
    when "committee"
  		collection.each do |legislator| CommitteeLegislator.create(legislator)
        person = Person.where(person_id: legislator[:person_id])
        legislator[:person_id] = person
        CommitteeLegislator.create(legislator)
      end
  	else

  	end
end

def handle_progress_bar(params)
	puts "handle progress bar: #{params}"
	if refresh_progress_bar?(params)
		show_progress_bar(params)
	end
end

def show_progress_bar(params)
	current_seed_count, seed_count, percent = params[:current_seed_count], params[:seed_count], params[:percent]
	puts "#{current_seed_count}/#{seed_count} #{percent(current_seed_count, seed_count)}%"
end

def refresh_progress_bar?(params)
	params[:current_seed_count] % params[:refresh_rate] == 0
end

def percent(dividend, diviser)
	((dividend/diviser).round(2)*100).floor
end

def generate_progress_bar_params(current_seed_count, seed_count, refresh_rate)
	{current_seed_count: current_seed_count, seed_count: seed_count, refresh_rate: refresh_rate}
end

def generate_hash_from_arrays(param_keys_array, param_values_array)
	Hash[strings_to_symbols(param_keys_array).zip(param_values_array)]
end

def strings_to_symbols(string_array)
	param_keys_array.map { |param| param.to_sym}
end