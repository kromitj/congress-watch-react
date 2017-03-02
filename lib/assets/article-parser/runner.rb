require './article-parser.rb'

tammy_search = "https://www.googleapis.com/customsearch/v1?key=AIzaSyDvLI9dqOZmtpGuW186JTOkb60-Ipcu8A8&cx=013241849023744786939:iozbzo9xq2y&q=Tammy+Baldwin+senator"
tammy = ArticleParser.new(tammy_search)
puts tammy.articles