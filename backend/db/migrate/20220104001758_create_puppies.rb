class CreatePuppies < ActiveRecord::Migration[6.1]
  def change
    create_table :puppies do |t|
      t.string :name
      t.string :breed
      t.integer :price
      t.string :sex
      t.references :couple, null: false, foreign_key: true

      t.timestamps
    end
  end
end
