class TweetsController < ApplicationController
  before_action :return_twitter_user, :only => :create

  def create
    client = return_twitter_user
    client.update(tweet_params)
    binding.pry
  end

  private

    def tweet_params
      params.require(:tweet).permit(:text)
    end

end
