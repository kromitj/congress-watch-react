class SeedHelper
	
	def initialize(api_path)
		@api_uri = api_path
		@collection_groups = []
		puts "made seedhelper"
	end

	def create_group(group_name, api_path, members, ids)
		@collection_groups << { group_name: group_name, group_api: api_path, members: members, ids: ids}
	end

	# def populate_groups
	# 	@collections.each { |collection| @collection_groups[collection.collection_group] << collection} # change this to populate groups on init
	# end

	def enum_groups
		@collection_groups.each do |group|
			group[:ids].each do |id|
				group_api_uri = @api_uri + group[:group_api] + id.to_s
				api_response = HTTParty.get(group_api_uri)
				seed_group(group[:members], api_response)
			end
		end

	end

	def seed_group(members, api_response)
		members.each do |member|
			member.seed_records(api_response)
		end
	end

end



