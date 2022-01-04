class PuppySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :breed, :price, :sex
  belongs_to :couple
end
