class PersondetailsController < ApplicationController
  def index
    render json: PersonDetail.all
  end
  def show
    render json: PersonDetail.find(params[:id])
  end
end
