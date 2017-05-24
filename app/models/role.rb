require "#{Rails.root}/lib/assets/tweet-getter/tweet-getter.rb"

class Role < ApplicationRecord

	belongs_to :person, foreign_key: :person_id
    has_many :group_items, as: :groupable
    has_many :bills

    def Role.all_in_office
        Role.where(in_office: true)
    end

    def RoleList(params)
        @roles = Role.find(params[:field] => params[:value], :select => "state, person.firstname, personname", :limit => 1)
    end

    def pack_role_show
        @last_tweet_html = TweetGetter.new(person.twitter_account).html
        @person = person
        @bills = bills

        uri = URI("https://api.nytimes.com/svc/search/v2/articlesearch.json")
        http = Net::HTTP.new(uri.host, uri.port)
        http.use_ssl = true
        
        uri.query = URI.encode_www_form({
          "api-key" => "53fec61ec9ec49798817e3a9177f478a",
          "q" => @person.first_name + "+" + @person.last_name,
          "fq" => "document_type:article",
          "sort" => "newest"
        })

            request = Net::HTTP::Get.new(uri.request_uri)
            @result = JSON.parse(http.request(request).body)
            @articles = @result["response"]["docs"].map do |article|
                if article["multimedia"].count != 0 
                    @img = "https://static01.nyt.com/" + article["multimedia"][0]["url"] 
                else 
                    @img = "https://static01.nyt.com/images/2017/04/11/opinion/11tue1web/11tue1web-thumbStandard.jpg"
                end
                { url: article["web_url"], snippet: article["snippet"], source: article["source"], img: @img, pub_date: article["pub_date"]}                
            end
         
        @props = { 
            address: office,
            articles: @articles,
            assumed_office: start_date,
            bills: @bills,
            desc: description,
            id: id,
            img: @person.img_sm,
            last_tweet: @last_tweet_html,
            name: @person.name,
            party: party,
            twitterid: @person.twitter_account,
            website: url,
            wiki_intro: @person.wiki_intro
        }
        puts @props
        return @props

    end
    def pack_group_show
        {id: id, firstname: person.first_name, lastname: person.last_name, state: state, party: party, desc: description, img: person.img_sm}
    end
end
