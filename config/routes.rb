Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :drinks, except: [:new, :edit, :destroy]
    resources :breweries, except: [:new, :edit, :destroy]
    resources :checkins, only: [:index, :show, :create, :destroy]
  end
end
