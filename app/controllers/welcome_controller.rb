class WelcomeController < ApplicationController

  def index
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["YODA_API_KEY"]
      config.consumer_secret     = ENV["YODA_API_SECRET"]
      config.access_token        = "151968748-gZFOxsnBHeIZJ3spGAe8g0dMBB7VhLw5n0zekseH"
      config.access_token_secret = ENV["YODA_ACCESS_TOKEN_SECRET"]
    end

    # arod_tweets = client.search("#arod", :result_type => "recent").take(3).each do |tweet|
    #   puts tweet.text
    # end
  end

end
