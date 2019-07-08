class User < ApplicationRecord
  has_many :projects
  has_many :likes, through: :projects
  has_many :comments, through: :projects
end
