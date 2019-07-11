class CommentSerializer < ActiveModel::Serializer
    attributes :id, :content, :user_id, :project_id, :created_at
    belongs_to :user

	attribute  :author do
		self.object.user.username
	end

end