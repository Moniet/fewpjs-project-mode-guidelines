class Project < ApplicationRecord
  belongs_to :user
  has_many :likes
  has_many :comments

  def self.first_few
    projects = Project.all
    len = projects.count - 1
    num = len - 5
    projects[num..len]
  end
end
