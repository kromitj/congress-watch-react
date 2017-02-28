class GroupsController < ApplicationController

	def new
		puts "inside groups new"
	end

	def create
		puts "inside gourp create"
		puts params[:group]
   		@group = Group.new(group_params)
    	if @group.save
		   	@user = User.find(session[:user_id])    	
      		if request.xhr?
        		render :json => {groups: @user.get_groups}
      		else
        		# redirect_to "/users/#{@user.id}"
        		redirect_to "/"
      		end
	    else
	      if request.xhr?
	       render :json => {:error => "Invalid user credentials"}, :status => 422
	      else
	        @errors = @user.errors.full_messages
	        render 'new'
	      end
	    end
	end

	private

	def group_params
    params.require(:group).permit(:name, :group_type, :user_id)
  end
end