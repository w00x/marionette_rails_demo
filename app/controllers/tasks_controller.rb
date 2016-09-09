class TasksController < ApplicationController
  def index
    render json: Task.all
  end

  def show
    render json: Task.find(params[:id])
  end

  def create
    render json: Task.create(set_params)
  end

  def update
    render json: Task.update(params[:id], set_params)
  end

  def destroy
    render json: Task.destroy(params[:id])
  end

  private
  def set_params
    params.require(:task).permit(:doit, :todo)
  end
end
