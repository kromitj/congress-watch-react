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
		@role = Rails.cache.fetch("#{params[:id]}role", expires_in: 12.hours) do
			Role.find_by(role_id: params[:id]).pack_role_show
		end      
		puts "#{params[:id]}role"
		puts Rails.cache.fetch("#{params[:id]}role")
			

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
		party = {"D" => "Democrate", "R" => "Republican", "I" => "Independent"}
		Rails.cache.fetch("senatorsIndex", expires_in: 12.hours) do
			@roles = Role.where({in_office: true, role_type: "Senator"}).map do |senator|
				{id: senator.id, firstname: senator.person.first_name, lastname: senator.person.last_name, state: senator.state, party: party[senator.party], desc: senator.description, img: senator.person.img_sm}
			end
			@roles.sort { |a,b| a[:lastname] <=> b[:lastname] }
		end  
		
	end

	def pack_reps
		party = {"D" => "Democrate", "R" => "Republican", "I" => "Independent"}
		Rails.cache.fetch("repsIndex", expires_in: 12.hours) do
			@roles = Role.where({in_office: true, role_type: "Representative"}).map do |rep|
				{id: rep.id, firstname: rep.person.first_name, lastname: rep.person.last_name, state: rep.state, party: party[rep.party], desc: rep.description, img: rep.person.img_sm}
			end
			@roles.sort { |a,b| a[:lastname] <=> b[:lastname] }
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
