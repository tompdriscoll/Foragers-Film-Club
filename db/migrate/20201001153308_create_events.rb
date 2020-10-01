class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name
      t.string :type
      t.integer :hostId
      t.datetime :time

      t.timestamps
    end

  end
end
