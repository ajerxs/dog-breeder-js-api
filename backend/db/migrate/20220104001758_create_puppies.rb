class CreatePuppies < ActiveRecord::Migration[6.1]
  def change
    create_table :puppies do |t|
      t.string :name
      t.string :breed
      t.integer :price
      t.string :sex
      t.integer :couple_id

      t.timestamps
    end
  end
end
