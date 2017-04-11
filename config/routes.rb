Rails.application.routes.draw do
  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)
  get 'main/index'
  root 'main#index'
  
  # need to weed out the routes that are unessary and get rid of them
  resources :users do 
  	resources :groups do
  		resources :group_items
  	end
    resources :surveys do 
      resources :survey_questions do 
      end

    end
  end
  resources :legislators
  resources :session, except: [:destroy]
  resources :bills
  delete '/session/logout' => 'session#logout'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
