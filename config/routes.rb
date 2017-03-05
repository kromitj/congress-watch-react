Rails.application.routes.draw do
  get 'main/index'
  root 'main#index'
  resources :users do 
  	resources :groups do
  		resources :group_items
  	end
  end
  resources :legislators
  resources :session, except: [:destroy]
  delete '/session/logout' => 'session#logout'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
