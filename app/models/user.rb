class User < ApplicationRecord
  
  has_secure_password

  validates :f_name, :l_name, :username, :email, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: {minimum: 8}

  has_many :groups
  has_many :user_survey_responses


  def get_groups
  	groups
  end

 
end
