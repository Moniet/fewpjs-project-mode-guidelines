Rails.application.routes.draw do
  resources :comments, only: [:create, :destroy]
  resources :likes, only: [:create, :destroy]

  resources :projects, only: [:index, :create, :update, :destroy, :show]
  resources :users, only: [:create, :index]

end
