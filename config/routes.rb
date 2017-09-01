Rails.application.routes.draw do
  namespace :api, constraints: { format: 'json' } do
    namespace :v1 do
      resources :todos, only: [:index, :create, :show, :destroy, :update]
    end
  end

  root to: 'todos#index'
end