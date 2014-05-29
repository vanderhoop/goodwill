class TweetsController < ApplicationController

  def create
    Tweet.create(tweet_params)
    binding.pry
  end

  private

    def tweet_params
      params.require(:tweet).permit(:tweet_text)
    end





end
