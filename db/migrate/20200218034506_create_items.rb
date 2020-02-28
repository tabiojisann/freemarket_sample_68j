class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :price
      t.string :status
      t.text :description
      t.string :charge
      t.string :area
      t.string :day
      t.integer :sale
      t.references :prefecture
      t.bigint :user_id, foreign_key: true
      t.bigint :category_id, foreign_key: true
      t.bigint :brand_id, foreign_key: true
      t.timestamps
    end
  end
end
