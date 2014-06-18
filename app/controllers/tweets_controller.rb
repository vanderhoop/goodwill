class TweetsController < ApplicationController

  def create
    client = return_twitter_user
    client.update(params[:tweet][:text])
    flash[:notice] = "Tweet Created, Homie."
    redirect_to :root
  end

end
