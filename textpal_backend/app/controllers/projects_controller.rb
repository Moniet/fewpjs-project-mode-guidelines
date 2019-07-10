class ProjectsController < ApplicationController
  def index
    projects = Project.all
    render json: projects.to_json(include: [:user, :likes, :comments])
  end

  def create
    project = Project.create(svg: params[:svg], user_id: params[:user_id])
    render json: project.to_json(include: [:user, :likes, :comments])
  end

  def update
  end

  def destroy
  end

  def show
    project = Project.find_by(id: params[:id])
    render json: project.to_json(include: [:user, :likes, :comments])
  end

end
