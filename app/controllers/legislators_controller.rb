class LegislatorsController < ApplicationController		
	def index
		branch = params[:branch]
		@legislators = pack_legislator_list_item(branch)

		if request.xhr?
      		render json: @legislators
    	else
      		render 'new'
    	end
	end

	def show 
	end


	private

	def search_by(search_params)
		if search_params != nil 
			search_by, search_val = search_params
			Legislator.where(search_by => search_val)
		else
			Legislator.all
		end			
	end

	def get_search_params(params)		
		params[:search_by] != nil ? [params[:search_by], params[:search_value]] : nil
	end

	def delegate_branch_type(branch)
		branch == "senator" ? pack_senators : pack_reps
	end

	def pack_legislator_list_item(branch)
		delegate_branch_type(branch)
	end

	def pack_senators
		puts "inside pack_senators"
		Role.where({current: true, role_type: "senator"}).map do |senator|
			{firstname: senator.person.firstname, lastname: senator.person.lastname, state: senator.state, party: senator.party, role_type: senator.role_type}
		end
	end

	def pack_reps
		puts "inside pack_reps"
		Role.where({current: true, role_type: "representative"}).map do |senator|
			{firstname: senator.person.firstname, lastname: senator.person.lastname, state: senator.state, party: senator.party, role_type: senator.role_type}
		end
	end

end	
