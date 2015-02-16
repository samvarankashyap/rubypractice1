class PersonDetailsController < ApplicationController
  def index
    render json: PersonDetail.all
  def show
    render json: PersonDetail.find(params[:id])
end
