class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :svg, :user_id
  
  has_many :comments, each_serializer: CommentSerializer 
  has_many :likes
  belongs_to :user, serializer: UserSerializer

end