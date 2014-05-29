class TweetsController < ApplicationController

  def create
    client = return_twitter_user
    client.update(tweet_params[:text])
    # Tweet.create(tweet_params)
    binding.pry
  end

  private

    def tweet_params
      params.require(:tweet).permit(:text)
    end





end
