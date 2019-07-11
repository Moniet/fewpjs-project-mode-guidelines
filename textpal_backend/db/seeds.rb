require "faker"

User.delete_all
Like.delete_all
Comment.delete_all
Project.delete_all


5.times do
 User.create(username: Faker::Internet.unique.username)
end

10.times do
 Project.create(user_id: rand(1..5))
end

15.times do
 Like.create(project_id: rand(1..10), user_id: rand(1..5))
 Comment.create(content: Faker::Lorem.sentence(3), project_id: rand(1..10), user_id: rand(1..5))
end
