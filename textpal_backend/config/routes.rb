Rails.application.routes.draw do
  resources :comments, only: [:create, :destroy]
  resources :likes, only: [:create, :destroy]

  resources :projects, only: [:create, :update, :destroy]
  resources :users, only: [:create, :index]

end
