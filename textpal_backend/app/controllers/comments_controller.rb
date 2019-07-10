class CommentsController < ApplicationController
  def create
    comment = Comment.create(user_id: params[:user_id], project_id: params[:project_id], content: params[:content]);
    render json: comment.to_json(include: [:user])
  end

  def destroy
  end
end
