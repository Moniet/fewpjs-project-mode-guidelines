class ProjectsController < ApplicationController
  def index
    projects = Project.all
    render json: projects, each_serializer: ProjectSerializer
  end

  def create
    project = Project.create(svg: params[:svg], user_id: params[:user_id])
    render json: project, serializer: ProjectSerializer
  end

  def update
  end

  def destroy
  end

  def show
    project = Project.find_by(id: params[:id])
    render json: project, serializer: ProjectSerializer
  end

end
