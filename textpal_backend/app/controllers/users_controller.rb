class UsersController < ApplicationController
  def create
    if (User.find_by(username: params[:user]))
      render :json => { :error => 'User exists already' }
    else
      user = User.create(username: params[:user]);
      render json: user, only: [:id, :username]
    end
  end

  def index
    users = User.all
    render json: users, only: [:id, :username]
  end

  private

  def user_params
    params.require(:user).permit(:username);
  end

end
