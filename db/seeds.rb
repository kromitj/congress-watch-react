require 'httparty'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


PROPUBLICA_API = 'https://api.propublica.org/congress/v1/'
puts "#{PROPUBLICA_API}114/house/members.json"
puts PROPUBLICA_API_KEY
res = HTTParty.get("#{PROPUBLICA_API}114/house/members.json",
              :headers => {"X-API-Key" => PROPUBLICA_API_KEY }
              )
puts res
members = res["results"].first["members"]
puts members

# Creates a Legislator instance for each 
  members.each do |legislator|
    Legislator.create(legislator)
    puts "made record"
  end


  