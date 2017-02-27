require "rails_helper"
require 'spec_helper'

RSpec.describe User, :type => :model do
  	 describe 'Model Tests: ' do 
  	 	it "is an initializable class" do
    		expect(User.new.class).to eq(User)
	  	end
  	 	describe "Validates Presense: " do   	 	
			it "is not valid without a f_name" do
				user = User.new(f_name: nil, l_name: "Kroska", username: "kromitj", email: "kromitj@gmail.com", password: "password", profile_picture: "http://lorempixel.com/200/200/people/")
				expect(user).to_not be_valid
			end
			it "is not valid without a l_name" do
				user = User.new(f_name: "Mitch", l_name: nil, username: "kromitj", email: "kromitj@gmail.com", password: "password", profile_picture: "http://lorempixel.com/200/200/people/")
				expect(user).to_not be_valid
			end
			it "is not valid without a username" do
				user = User.new(f_name: "Mitch", l_name: "Kroska", username: nil, email: "kromitj@gmail.com", password: "password", profile_picture: "http://lorempixel.com/200/200/people/")
				expect(user).to_not be_valid
			end
			
			it "is not valid without a email" do
				user = User.new(f_name: "Mitch", l_name: "Kroska", username: "kromitj", email: nil, password: "password", profile_picture: "http://lorempixel.com/200/200/people/")
				expect(user).to_not be_valid
			end
			
			it "is not valid without a password" do
				user = User.new(f_name: "Mitch", l_name: "Kroska", username: "kromitj", email: nil, password: nil, profile_picture: "http://lorempixel.com/200/200/people/")
				expect(user).to_not be_valid
			end
			it "is not valid without a password of length less then 8" do
				user = User.new(f_name: "Mitch", l_name: "Kroska", username: "kromitj", email: "kromitj@gmail.com", password: "passwor", profile_picture: "http://lorempixel.com/200/200/people/")
				expect(user).to_not be_valid
			end
			it "is valid with valid attributes" do
				user = User.new(f_name: "Mitch", l_name: "Kroska", username: "kromitj", email: "kromitj@gmail.com", password: "password", profile_picture: "http://lorempixel.com/200/200/people/")
				expect(user).to be_valid
			end
  	 	end
  	 	describe 'Validates Uniqueness' do
			it "is not valid without a unique username" do
				User.create(f_name: "Mitch", l_name: "Kroska", username: "kromitj", email: "kromitj@gmail.com", password: "password", profile_picture: "http://lorempixel.com/200/200/people/")
				user = User.create(f_name: "Mitch", l_name: "Kroska", username: "kromitj", email: "kkkkromitj@gmail.com", password: "password", profile_picture: "http://lorempixel.com/200/200/people/")
				expect(user.id).to eq(nil)
			end
			it "is not valid without a unique email" do
				User.create(f_name: "Mitch", l_name: "Kroska", username: "kromitj", email: "kromitj@gmail.com", password: "password", profile_picture: "http://lorempixel.com/200/200/people/")
				user = User.create(f_name: "Mitch", l_name: "Kroska", username: "kromitj", email: "kromitj@gmail.com", password: "password", profile_picture: "http://lorempixel.com/200/200/people/")
				expect(user.id).to eq(nil)
			end
  	 	end
  	 	describe "Password Encryptopn: " do 
  	 		it 'password_digest is actually encrypted' do
  	 			user = User.new(f_name: "Mitch", l_name: "Kroska", username: "kromitj", email: "kromitj@gmail.com", password: "password", profile_picture: "http://lorempixel.com/200/200/people/")
        		expect(user.password_digest).to_not eq("password")
      		end
  	 	end
  	 	describe "Initiated field values:" do
  	 		let(:user) {User.create(f_name: "Mitch", l_name: "Kroska", username: "kromitj", email: "kromitj@gmail.com", password: "password", profile_picture: "http://lorempixel.com/200/200/people/")}
  	 		it 'it has getters for all fields: ' do 
  	 			expect(user.f_name).to eq("Mitch")
  	 			expect(user.l_name).to eq("Kroska")
  	 			expect(user.username).to eq("kromitj")
  	 			expect(user.email).to eq("kromitj@gmail.com")
  	 			expect(user.profile_picture).to eq("http://lorempixel.com/200/200/people/")
  	 		end
  	 	end
  	 	describe "Assossiations: " do 
  	 		let(:user) {User.first}
  	 		it 'has many groups' do
		       expect(user.groups.first.class).to eq(Groups)
		    end
  	 	end
  	 end  
end