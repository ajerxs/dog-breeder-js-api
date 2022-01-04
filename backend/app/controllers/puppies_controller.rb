class PuppiesController < ApplicationController
    def index
        puppies = Puppy.all
        render json: PuppySerializer.new(puppies)
    end

    def show
        puppy = Puppy.find_by(id: params[:id])
        options = {
            include: [:couple]
        }
        render json: PuppySerializer.new(puppy, options)
    end
end
