class Api::V1::TodosController < ApplicationController
  before_action :set_todo, only: [:show, :update, :destroy]

  def index
    @todos = Todo.all
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render :show, status: :created
    else
      render json: { errors: @todo.errors.to_a.to_sentence }, status: :unprocessable_entity
    end
  end

  def show
  end

  def update
    if @todo.update(todo_params)
      render :show, status: :ok
    else
      render json: { errors: @todo.errors.to_a.to_sentence }, status: :unprocessable_entity
    end
  end

  def destroy
    if @todo.destroy
      render json: { success: "Todo Deleted" }, status: :ok
    else
      render json: { errors: "Some error occure, Please try later!" }, status: :unprocessable_entity
    end
  end

  private

    def todo_params
      params.require(:todo).permit(:id, :name, :description, :status)
    end

    def set_todo
      @todo = Todo.where(id: params[:id]).last
      render json: { errors: "Todo Not Found!" }, status: :not_found and return unless @todo
    end
end