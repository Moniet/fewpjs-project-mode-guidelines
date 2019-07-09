class ProjectsController < ApplicationController
  def index
    # projects = Project.first_few
    projects = Project.all
    render json: projects, only: [:id, :svg]
  end

  def create
  end

  def update
  end

  def destroy
  end

  def show
  end
end
