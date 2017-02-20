class LegislatorsController < ApplicationController		
	def index
		puts "ajax!!!!!______________-------______--"
		@senators = Role.where({current: true, role_type: "senator"}).map do |senator|
			{firstname: senator.person.firstname, lastname: senator.person.lastname, state: senator.state, party: senator.party}
		end

		if request.xhr?
      		render json: @senators
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

	def packSenatorListItem(parmas)

	end
end	
