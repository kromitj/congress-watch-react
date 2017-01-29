class LegislatorsController < ApplicationController

	def index
		puts @params
		@legislators = Legislator.all
	end

	def show 
		@legislators
	end
end
