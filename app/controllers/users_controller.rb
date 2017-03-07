class UsersController < ApplicationController

  # skip_before_action :redirect_visitors, only: [ :create, :new, :edit, :destroy, :update]
  # skip_before_action :verify_authenticity_token
  # before_action :authenticate!, only: [:show, :edit, :update, :destroy]
  def new
    @user = User.new
    if request.xhr?
      render '/users/_new', layout: false
    else
      render '/users/new'
    end
  end

#   def show
#     @songs = Song.all
#     @user = User.find(params[:id])
#   end

  def create
    puts params[:user]
    @user = User.new(user_params)
    puts "user: #{@user}"
    if @user.save
      #create session cookie
      session[:user_id] = @user.id
      if request.xhr?
        @user.survey_participant ? @survey = Survey.find_by(action: "dashboard").pack_survey : @survey = nil
        render :json => {:userId => @user.id, :status => true, :username => @user.username, :survey => @survey}
      else
        # redirect_to "/users/#{@user.id}"
        redirect_to "/"
      end
    else
      if request.xhr?
       render :json => {:error => @user.errors.full_messages.join(", ")}, :status => 422
      else
        @error = @user.errors.full_messages
        render 'new'
      end
    end
  end

#   def edit
#     @user = User.find(params[:id])
#     if request.xhr?
#       render '_edit_user', layout: false, locals: {user: @user}
#     else
#       render 'edit'
#     end
#   end

#   def update
#     @user = User.find(params[:id])
#     if @user.update(user_params)
#       redirect_to @user, notice: 'Your profile was successfully updated.'
#     else
#       render 'edit'
#     end
#   end



#   def destroy
#     @user.destroy
#     session.delete(:user_id)
#     redirect_to root_path
#   end

# private

  def user_params
    params.require(:user).permit(:f_name, :l_name, :username, :email, :password, :survey_participant)
  end

end