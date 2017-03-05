class GroupItemsController < ApplicationController
	def index
	end

	 def create
	    puts "groupable Id: #{params[:groupableId]}"
	    @user = User.find(params[:user_id])
	    @group = @user.groups.find(params[:group_id])
	    @groupable = Role.find(params[:groupableId])
	    @group_item = @group.group_items.build(groupable: @groupable)
	    if @group_item.save 
		    render :json => {:status => true}
		else
			render :json => {:status => 404, errors: @groupable.errors.full_messages}	    	
	  	end
	 end

	 private
end
