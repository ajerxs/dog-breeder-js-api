class CouplesController < ApplicationController
    def index
        couples = Couple.all 
        render json: CoupleSerializer.new(couples) # couples.to_json(except: [:created_at, :updated_at])
    end

    def show
        couple = Couple.find_by(id: params[:id])
        options = {
            include: [:puppies]
        }
        render json: CoupleSerializer.new(couple, options)
    end

    def create
        couple = Couple.create(couple_params)
        render json: CoupleSerializer.new(couple)
    end

private

    def couple_params
        params.require(:couple).permit(
            :father, :mother, :breed
        )
    end

end
