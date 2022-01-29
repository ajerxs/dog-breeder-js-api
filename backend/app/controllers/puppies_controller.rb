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

    def create
        puppy = Puppy.create(puppy_params)
        render json: PuppySerializer.new(puppy)
    end

    def destroy
        puppy = Puppy.find_by(id: params[:id])
        puppy.destroy
    end

private

    def puppy_params
        params.require(:puppy).permit(
            :name, :breed, :price, :sex, :couple
        )
    end

end