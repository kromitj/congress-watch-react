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
		@tweet = get_last_tweet(handle)
		@html = tweet_html
	end

	private
	def get_last_tweet(handle)
		@tweets = @client.user_timeline(handle, count: 10)
		@tweets.each do |tweet|
			unless tweet.retweet? 
				return tweet
			end
		end
	end

	def tweet_html
		@resource_url = "https://publish.twitter.com/oembed"
		@tweet_url = @tweet.url
		@tweet_url_path = @tweet_url.site + @tweet_url.path
		@full_resource_url = @resource_url + "?url=" + @tweet_url_path

		HTTParty.get(@full_resource_url)["html"]		
	end
end