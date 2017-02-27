class User < ApplicationRecord
	  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_secure_password

  validates :f_name, :l_name, :username, :email, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: {minimum: 8}

  has_many :groups

  def get_groups
  	groups
  end

 
end
