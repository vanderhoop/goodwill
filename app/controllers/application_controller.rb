class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception


  def return_twitter_user
    client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["YODA_API_KEY"]
      config.consumer_secret     = ENV["YODA_API_SECRET"]
      config.access_token        = "151968748-gZFOxsnBHeIZJ3spGAe8g0dMBB7VhLw5n0zekseH"
      config.access_token_secret = ENV["YODA_ACCESS_TOKEN_SECRET"]
    end
  end
end
