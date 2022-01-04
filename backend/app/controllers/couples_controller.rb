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
end
