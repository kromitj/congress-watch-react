require 'nokogiri'
require 'open-uri'
require 'sanitize'


class WikiParser
	attr_reader :intro
	def initialize(search_query)
		@response = Nokogiri::HTML(open(search_query))
		@intro_para = @response.css('p')
		@intro = Sanitize.clean(@intro_para[0..1])
	end
end