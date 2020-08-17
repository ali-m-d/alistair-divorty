class MessagesController < ApplicationController
    
    def new
        @message = Message.new(message_params)
    end
    
    def create
        @message = Message.create(content: params[:message][:content], email: params[:message][:email])
        
        respond_to do |format|
            if @message.save
                format.js
            else
                format.html { redirect_to root_path, notice: "Sorry, message could not be sent." }
            end
        end
    end
    
    private
    
    def comment_params
       params.require(:message).permit(:content, :email) 
    end
    
end