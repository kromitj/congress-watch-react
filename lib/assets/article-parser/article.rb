class Article
	attr_reader :title, :link, :snippet, :thumbnail
	def initialize(params)
		puts params
		@title = params[:title]
		@link = params[:link] 
		@snippet = params[:snippet]
		@thumbnail = params[:thumbnail]
	end
end