class UsersController < ApplicationController
  def create
    if (User.find_by(username: params[:username]))
      render :json => { :error => 'User exists already' }
    else
      user = User.create(username: params[:username]);
      render json: user, serializer: UserSerializer
    end
  end

  def index
    users = User.all
    render json: users, each_serializer: UserSerializer
  end

  private

  def user_params
    params.require(:user).permit(:username);
  end

end
