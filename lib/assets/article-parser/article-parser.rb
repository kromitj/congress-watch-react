require 'httparty'
require 'json'

require "#{Rails.root}/lib/assets/article-parser/article.rb"


class ArticleParser
	attr_reader :articles
	def initialize(search_query)
		@response = HTTParty.get(search_query)
		@response_json = @response.parsed_response
		@articles_json = @response_json["items"]
		@articles = populate_articles

	end

	def pack_article_params(article)
	{title: article["title"], link: article["link"], snippet: article["snippet"], thumbnail: article["pagemap"]["cse_image"][0]["src"]}
	end

	def populate_articles
		@articles_json.map do |article|
			@article_params = pack_article_params(article)
			Article.new(@article_params)
		end
	end
end