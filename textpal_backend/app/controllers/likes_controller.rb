class LikesController < ApplicationController
  def create
    like = Like.create(user_id: params[:user_id], project_id: params[:project_id]);
  end

  def destroy
    like = Like.find_by(id: params[:id])
    like.destroy
  end
end
