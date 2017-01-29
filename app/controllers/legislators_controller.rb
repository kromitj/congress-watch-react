class LegislatorsController < ApplicationController
		
	def index
		search_params = get_search_params(params)
		@legislators = search_by(search_params)
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
end	
