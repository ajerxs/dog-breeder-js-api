class CreateCouples < ActiveRecord::Migration[6.1]
  def change
    create_table :couples do |t|
      t.string :father
      t.string :mother
      t.string :breed

      t.timestamps
    end
  end
end
