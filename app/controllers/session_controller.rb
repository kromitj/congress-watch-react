class SessionController < ApplicationController
  # respond_to :json, :html
  # skip_before_action :redirect_visitors, only: [ :create, :new]
  def new
    @user = User.new
    if request.xhr?
      render '/sessions/_new', layout: false
    else
      render 'sessions/new'
    end
  end

  def create
    @user = User.find_by(username: user_params[:username])
    if @user && @user.authenticate(user_params[:password])
      #create session cookie
      session[:user_id] = @user.id
      @groups = @user.get_groups
      if request.xhr?

       render :json => {:status => true, :userId => @user.id, :username => @user.username, :groups => @groups}
      else
        # redirect_to user_path(@user)
        redirect_to root_path
      end
    else
      if request.xhr?
        render :json => {:error => "Invalid username/password"}, :status => 422
      else
        flash[:notice] = 'Incorrect username/password input'
        redirect_to root_path
      end
    end
  end

  def logout
    user = params[:userId]
    puts session
    session.delete(user)
    render :json => {:status => true}
  end

  def destroy
    session.clear
    render :json => {:status => true}
  end

private

  def user_params
    params.require(:session).permit(:username, :password)
  end


end