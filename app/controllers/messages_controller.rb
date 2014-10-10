class MessagesController < ApplicationController
  def index
    
  end
  def new
    @message = Message.new
  end


  def create
    @message = Message.new(car_params)
    if @message.save
        redirect_to messages_index_path
      else
        render :new
      end

  end

   private
    

    def car_params
      params.require(:message).permit(:name, :text)
    end
end

