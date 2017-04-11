class MainController < ApplicationController
    def index
    	@articles = Rails.cache.fetch("dashboard_articles", expires_in: 12.hours) do
	    	uri = URI("https://api.nytimes.com/svc/search/v2/articlesearch.json")
			http = Net::HTTP.new(uri.host, uri.port)
			http.use_ssl = true
			uri.query = URI.encode_www_form({
			  "api-key" => "53fec61ec9ec49798817e3a9177f478a",
			  "q" => "Congress",
			  "fq" => "document_type:article",
			  "sort" => "newest"
			})

			request = Net::HTTP::Get.new(uri.request_uri)
			@result = JSON.parse(http.request(request).body)
			@result["response"]["docs"].map do |article|
				if article["multimedia"].count != 0 
				 	@img = "https://static01.nyt.com/" + article["multimedia"][0]["url"] 
				else 
					@img = "https://static01.nyt.com/images/2017/04/11/opinion/11tue1web/11tue1web-thumbStandard.jpg"
				end
				{ url: article["web_url"], snippet: article["snippet"], source: article["source"], img: @img, pub_date: article["pub_date"]}				
			end
    	end


		
	end
end