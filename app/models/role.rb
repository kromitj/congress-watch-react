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
         
        @props = { 
            id: id,
            name: @person.name,
            desc: description,
            assumed_office: start_date,
            address: office,
            party: party,
            twitterid: @person.twitter_account,
            website: url,
            wiki_intro: @person.wiki_intro,
            img: @person.img_sm,
            last_tweet: @last_tweet_html,
            bills: @bills
        }
        puts @props
        return @props

    end
    def pack_group_show
        {id: id, firstname: person.firstname, lastname: person.lastname, state: state, party: party, desc: description, img: person.img_sm}
    end
end
