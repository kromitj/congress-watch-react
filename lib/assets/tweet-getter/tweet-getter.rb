require 'httparty'
require 'twitter'

class TweetGetter
	attr_reader :html
	def initialize(handle)
		@client = Twitter::REST::Client.new do |config|
			config.consumer_key        = ENV["TWITTER_API"]
			config.consumer_secret     = ENV["TWITTER_SECRET"]
			config.access_token        = ENV["TWITTER_ACC_TOK"]
			config.access_token_secret = ENV["TWITTER_ACC_TOK_SEC"]
		end
		@html = generate_html(handle)
	end

	def generate_html(handle)
		@resource_url = "https://publish.twitter.com/oembed"
		@tweet = @client.user_timeline(handle, count: 1).first
		@tweet_url = @tweet.url
		@tweet_url_path = @tweet_url.site + @tweet_url.path
		@full_resource_url = @resource_url + "?url=" + @tweet_url_path

		HTTParty.get(@full_resource_url)["html"]
	end
end