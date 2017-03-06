require "#{Rails.root}/lib/assets/article-parser/article.rb"
require "#{Rails.root}/lib/assets/article-parser/article-parser.rb"


class LegislatorsController < ApplicationController		
	def index
		branch = params[:branch]
		@legislators = pack_legislator_list_item(branch)
		@legislator_groups = pack_legislator_groups(branch)
		if request.xhr?
      		render json: {legislators: @legislators, groups: @legislator_groups}
    	else
      		render 'new'
    	end
	end

	def show 
		@role = Role.find_by(role_id: params[:id]).pack_role_show
		# @yek_ipa = ENV["CONGRESS_GOOGLE"]
		# @role_search_query = "https://www.googleapis.com/customsearch/v1?key=#{@yek_ipa}&cx=013241849023744786939:iozbzo9xq2y&q=#{@role.search_query}"
		# @articles = ArticleParser.new(@role_search_query)
# 		@articles = [{:title=>"Wisconsin's Tammy Baldwin is first openly gay person elected to ...", :link=>"http://www.cnn.com/2012/11/07/politics/wisconsin-tammy-baldwin-senate/", :snippet=>"Nov 7, 2012 ... Tammy Baldwin made history Tuesday night -- twice. ... the first openly gay \npolitician, and first Wisconsin woman, elected to the U.S. Senate.", :thumbnail=>"http://i2.cdn.cnn.com/cnnnext/dam/assets/121103050436-stock-tammy-baldwin-story-top.jpg"},
# {:title=>"Tammy Baldwin's Sexual Orientation Attacked By Group Trying To ...", :link=>"http://www.huffingtonpost.com/entry/draft-sheriff-clarke-tammy-baldwin_us_5890eea1e4b0c90eff00a43a", :snippet=>"Jan 31, 2017 ... A super PAC trying to draft Milwaukee County Sheriff David Clarke for a Senate \nbid is attacking the sexual orientation of Sen. Tammy Baldwin ...", :thumbnail=>"http://img.huffingtonpost.com/asset/2000_1000/5890eed01b0000250004d971.jpeg?cache=jg9bxlqcxn"},
# {:title=>"Tammy Baldwin Election Results: Democrat Becomes First Openly ...", :link=>"http://www.huffingtonpost.com/2012/11/07/tammy-baldwin-election-results-2012_n_2049837.html", :snippet=>"Nov 7, 2012 ... Tammy Baldwin (D-Wis.) beat Republican Tommy Thompson for Wisconsin's \nopen U.S. Senate seat on Tuesday, becoming the nation's first op.", :thumbnail=>"http://i.huffpost.com/gen/836250/images/o-TAMMY-BALDWIN-ELECTION-RESULTS-facebook.jpg"},
# {:title=>"Tammy Baldwin", :link=>"http://www.huffingtonpost.com/news/tammy-baldwin/", :snippet=>"A super PAC trying to draft Milwaukee County Sheriff David Clarke for a Senate \nbid is attacking the sexual orientation of Sen. Tammy Baldwin (D-Wis.),.", :thumbnail=>"http://img.huffingtonpost.com/asset/74_58/5890eed01b0000250004d971.jpg"},
# {:title=>"Tammy Baldwin Sworn In To Senate, Becomes First Openly Gay ...", :link=>"http://www.huffingtonpost.com/2013/01/03/tammy-baldwin-senate_n_2404459.html", :snippet=>"Jan 3, 2013 ... I'm so proud of her,” said Bin-Rella, who is in a wheelchair, at a reception in the \nRussell Senate Office Building for Baldwin's family and friends.", :thumbnail=>"http://i.huffpost.com/gen/925724/images/o-TAMMY-BALDWIN-SENATE-facebook.jpg"},
# {:title=>"Tammy Baldwin Backs Filibuster Reform | The Huffington Post", :link=>"http://www.huffingtonpost.com/2013/01/22/tammy-baldwin-filibuster-reform_n_2521861.html", :snippet=>"Jan 22, 2013 ... Tammy Baldwin (D-Wis.) ... Tammy Baldwin Backs Filibuster Reform ... Senators \nwho currently want to filibuster legislation don't need to go to ...", :thumbnail=>"http://i.huffpost.com/gen/951702/images/o-TAMMY-BALDWIN-FILIBUSTER-REFORM-facebook.jpg"},
# {:title=>"Tammy Baldwin To Ron Johnson: 'I'm Quite Confident' I Understand ...", :link=>"http://www.huffingtonpost.com/2012/11/09/tammy-baldwin-ron-johnson-federal-budget_n_2102760.html", :snippet=>"Nov 9, 2012 ... Tammy Baldwin (D), Wisconsin's new senator-elect, is confident that she will be \nable to understand the federal budget without the assi...", :thumbnail=>"http://i.huffpost.com/gen/856308/images/o-TAMMY-BALDWIN-facebook.jpg"},
# {:title=>"Democrat Tammy Baldwin wins Wisconsin Senate seat, becoming ...", :link=>"http://www.foxnews.com/politics/2012/11/07/democrat-tammy-baldwin-wins-wisconsin-senate-seat-becoming-first-openly-gay-us.html", :snippet=>"Nov 7, 2012 ... Baldwin is the state's first female senator and the first openly gay candidate ever \nelected.", :thumbnail=>"http://a57.foxnews.com/images.foxnews.com/content/fox-news/politics/2012/11/07/democrat-tammy-baldwin-wins-wisconsin-senate-seat-becoming-first-openly-gay-us/_jcr_content/par/featured-media/media-0.img.jpg/0/0/1422003880232.jpg?ve=1"},
# {:title=>"Wisconsin Election Results 2012: Democrat Tammy Baldwin defeats ...", :link=>"https://www.washingtonpost.com/politics/decision2012/wisconsin-election-results-2012-democrat-tammy-baldwin-defeats-tommy-thompson-for-senate-rep-paul-ryan-reelected-obama-wins-narrow-victory/2012/11/07/62a292a4-23ad-11e2-ac85-e669876c6a24_story.html", :snippet=>"Nov 7, 2012 ... Wisconsin Election Results 2012: Democrat Tammy Baldwin defeats Tommy \nThompson for Senate; Rep. Paul Ryan reelected; Obama wins ...", :thumbnail=>"https://images.washingtonpost.com/?url=https://img.washingtonpost.com/pb/resources/img/twp-3000x1568.jpg&w=1484&op=resize&opt=1&filter=antialias"},
# {:title=>"Tammy Baldwin, Tommy Thompson Face Off In Wisconsin Senate ...", :link=>"http://www.huffingtonpost.com/2012/11/06/tammy-baldwin-election-tommy-thompson_n_2047440.html", :snippet=>"Nov 6, 2012 ... The 2012 Wisconsin Senate race features a pair of relatively heavyweight \ncompetitors, vying to occupy the seat being vacated by retiring ...", :thumbnail=>"http://i.huffpost.com/gen/836249/images/o-TAMMY-BALDWIN-ELECTION-facebook.jpg"}]
		


		render json: {:status => true, role: @role}
	end

	private

	def search_by(search_params)
		if search_params != nil 
			search_by, search_val = search_params
			Legislator.where(search_by => search_val)
		else
			Legislator.all
		end			
	end

	def get_search_params(params)		
		params[:search_by] != nil ? [params[:search_by], params[:search_value]] : nil
	end

	def delegate_branch_type(branch)
		branch == "senator" ? pack_senators : pack_reps
	end

	def pack_legislator_list_item(branch)
		delegate_branch_type(branch)
	end

	def pack_senators
		@role = Role.where({current: true, role_type: "senator"}).map do |senator|
			{id: senator.id, firstname: senator.person.firstname, lastname: senator.person.lastname, state: senator.state, party: senator.party, desc: senator.description, img: senator.person.img_sm}
		end
		@role.sort { |a,b| a[:lastname] <=> b[:lastname] }
	end

	def pack_reps
		puts "inside pack_reps"
		Role.where({current: true, role_type: "representative"}).map do |senator|
			{id: senator.id, firstname: senator.person.firstname, lastname: senator.person.lastname, state: senator.state, party: senator.party, desc: senator.description, img: senator.person.img_sm}
		end
	end

	def pack_legislator_groups(role_type)
		role_type == "senator" ? pack_senator_groups : pack_rep_groups
	end

	def pack_rep_groups
		Group.rep_groups
	end

	def pack_senator_groups
		Group.senator_groups
	end

end	
