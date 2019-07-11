class CommentsController < ApplicationController
  def create
    comment = Comment.create(user_id: params[:user_id], project_id: params[:project_id], content: params[:content]);
    render json: comment, serializer: CommentSerializer
  end

  def destroy
  end
end
