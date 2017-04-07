def isolate_person(legislator)
  person = {}
  person[:member_id] = legislator["member_id"]
  person[:date_of_birth] = legislator["date_of_birth"]
  person[:cspan_id] = legislator["cspan_id"]
  person[:first_name] = legislator["first_name"]
  person[:gender] = legislator["gender"]
  person[:in_office] = legislator["in_office"]
  # person[:gender_label] = legislator["gender_label"]
  person[:person_id] = legislator["govtrack_id"]
  person[:last_name] = legislator["last_name"]
  person[:link] = "https://api.propublica.org/congress/v1/members/#{person[:member_id]}.json"
  person[:middle_name] = legislator["middle_name"]
  person[:name] = person[:first_name] + " " + person[:last_name]
  # person[:namemod] = legislator["namemod"]
  # person[:nickname] = legislator["nickname"]
  # person[:osid] = legislator["osid"]
  # person[:pvsid] = legislator["pvsid"]
  # person[:sortname] = legislator["sortname"]
  person[:twitter_account] = legislator["twitter_account"]
  person[:youtube_account] = legislator["youtube_account"]
  person[:img_sm] = "https://raw.githubusercontent.com/unitedstates/images/gh-pages/congress/225x275/#{legislator["member_id"]}.jpg"
  person[:img_lg] = "https://raw.githubusercontent.com/unitedstates/images/gh-pages/congress/450x550/#{legislator["member_id"]}.jpg"
  
  return person
end

def isolate_role(role)
  states = {
  "AL"=> "Alabama", "MT"=> "Montana", "AK"=> "Alaska", "NE"=> "Nebraska", "AZ"=> "Arizona", "NV"=> "Nevada", "AR"=> "Arkansas", "NH"=> "New Hampshire", "CA"=> "California", "NJ"=> "New Jersey", "CO"=> "Colorado", "NM"=> "New Mexico", "CT"=> "Connecticut", "NY"=> "New York", "DE"=> "Delaware", "NC"=> "North Carolina", "FL"=> "Florida", "ND"=> "North Dakota", "GA"=> "Georgia", "OH"=> "Ohio", "HI"=> "Hawaii", "OK"=> "Oklahoma", "ID"=> "Idaho", "OR"=> "Oregon", "IL"=> "Illinois", "PA"=> "Pennsylvania", "IN"=> "Indiana", "RI"=> "Rhode Island", "IA"=> "Iowa", "SC"=> "South Carolina", "KS"=> "Kansas", "SD"=> "South Dakota", "KY"=> "Kentucky", "TN"=> "Tennessee", "LA"=> "Louisiana", "TX"=> "Texas", "ME"=> "Maine", "UT"=> "Utah", "MD"=> "Maryland", "VT"=> "Vermont", "MA"=> "Massachusetts", "VA"=> "Virginia", "MI"=> "Michigan", "WA"=> "Washington", "MN"=> "Minnesota", "WV"=> "West Virginia", "MS"=> "Mississippi", "WI"=> "Wisconsin", "MO"=> "Missouri", "WY"=> "Wyoming"
  }  
   iso_role = {}
   # iso_role[:caucus] = role["caucus"]
   iso_role[:congress_number] = role["congress"]   
   iso_role[:state] = states[role["state"]]
   iso_role[:title] = role["title"]
   iso_role[:party] = role["party"]
   iso_role[:leadership_role] = role["leadership_role"]
   iso_role[:seniority] = role["seniority"]
   iso_role[:district] = role["district"]
   iso_role[:start_date] = role["start_date"]
   iso_role[:end_date] = role["end_date"]
   iso_role[:office] = role["office"]
   iso_role[:phone] = role["phone"]
   # iso_role[:address] = role[""]
   # iso_role[:contact_form] = role["extra"]["contact_form"] unless role["extra"] == nil
   # iso_role[:fax] = role["extra"]["fax"] unless role["extra"] == nil
   # iso_role[:rss_url] = role["extra"]["rss_url"] unless role["extra"] == nil
   # iso_role[:how] = role["extra"]["how"] unless role["extra"] == nil
   # iso_role[:role_id] = role["member_id"]
   # iso_role[:person_id] = role["person"]
   iso_role[:role_type] = role["title"].split(" ")[0].gsub(",", "")
   # iso_role[:senator_rank] = role["senator_rank"]
   # iso_role[:title_long] = role["title_long"]
   # iso_role[:url] = role["website"]   

   return iso_role
end

def isolate_bill(bill)
  iso_bill = {}
  iso_bill[:bill_id] = bill["bill_id"]
  iso_bill[:congress] = bill["congress"]
  iso_bill[:bill] = bill["bill"]
  iso_bill[:bill_type] = bill["bill_type"]
  iso_bill[:number] = bill["number"]
  iso_bill[:bill_uri] = bill["bill_uri"]
  iso_bill[:title] = bill["title"]   
  # iso_bill[:sponsor] = bill["sponsor"]
  iso_bill[:role_id] = bill["sponsor_id"]
  iso_bill[:sponsor_uri] = bill["sponsor_uri"]
  iso_bill[:sponsor_party] = bill["sponsor_party"]
  iso_bill[:sponsor_state] = bill["sponsor_state"]
  iso_bill[:gpo_pdf_uri] = bill["gpo_pdf_uri"]
  iso_bill[:congressdotgov_url] = bill["congressdotgov_url"]
  iso_bill[:govtrack_url] = bill["govtrack_url"]
  iso_bill[:introduced_date] = bill["introduced_date"]
  iso_bill[:active] = bill["active"]
  iso_bill[:house_passage] = bill["house_passage"]
  iso_bill[:senate_passage] = bill["senate_passage"]
  iso_bill[:enacted] = bill["enacted"]
  iso_bill[:vetoed] = bill["vetoed"]
  iso_bill[:cosponsors] = bill["cosponsors"]
  iso_bill[:withdrawn_cosponsors] = bill["withdrawn_cosponsors"]
  iso_bill[:primary_subject] = bill["primary_subject"]
  iso_bill[:committees] = bill["committees"]
  iso_bill[:latest_major_action_date] = bill["latest_major_action_date"]
  iso_bill[:latest_major_action] = bill["latest_major_action"]
  iso_bill[:last_vote_date] = bill["last_vote_date"]
  iso_bill[:house_passage_vote] = bill["house_passage_vote"]
  iso_bill[:senate_passage_vote] = bill["senate_passage_vote"]
  iso_bill[:summary] = bill["summary"]
  iso_bill[:summary_short] = bill["summary_short"]
  return iso_bill
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