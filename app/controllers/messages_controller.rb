class MessagesController < ApplicationController
  def index
     @message = Message.new
  end
  

  def create
    @message = Message.create(message_params)

    Notifictaions.hello.deliver

    
       
      # respond_to do |format|
      #   format.html
      #   format.js
      # end
   

  end

   private
    

    def message_params
      params.require(:message).permit(:name, :text)
    end
end

