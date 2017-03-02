require "#{Rails.root}/lib/assets/article-parser/article.rb"
require "#{Rails.root}/lib/assets/article-parser/article-parser.rb"

class LegislatorsController < ApplicationController		
	def index
		branch = params[:branch]
		@legislators = pack_legislator_list_item(branch)
		@legislator_groups = pack_legislator_groups(branch)
		if request.xhr?
      		render json: {legislators: @legislators, groups: @legislator_groups}
    	else
      		render 'new'
    	end
	end

	def show 
		@role = Role.find_by(role_id: params[:id])
		@role_search_query = "https://www.googleapis.com/customsearch/v1?key=AIzaSyDvLI9dqOZmtpGuW186JTOkb60-Ipcu8A8&cx=013241849023744786939:iozbzo9xq2y&q=#{@role.search_query}"
		@articles = ArticleParser.new(@role_search_query)
		puts @articles
		render json: {:status => true, role: @role}
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
		Role.where({current: true, role_type: "senator"}).map do |senator|
			{id: senator.id, firstname: senator.person.firstname, lastname: senator.person.lastname, state: senator.state, party: senator.party, desc: senator.description, img: senator.person.img_sm}
		end
	end

	def pack_reps
		puts "inside pack_reps"
		Role.where({current: true, role_type: "representative"}).map do |senator|
			{firstname: senator.person.firstname, lastname: senator.person.lastname, state: senator.state, party: senator.party, img: senator.person.img_sm}
		end
	end

	def pack_legislator_groups(role_type)
		role_type == "senator" ? pack_senator_groups : pack_rep_groups
	end

	def pack_rep_groups
		Group.rep_groups
	end

	def pack_senator_groups
		Group.senator_groups
	end

end	
