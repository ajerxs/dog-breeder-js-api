class CoupleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :father, :mother, :breed
  has_many :puppies
end
