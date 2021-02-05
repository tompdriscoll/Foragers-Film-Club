class FixEvents < ActiveRecord::Migration[5.2]
  def change
    rename_column :events, :name, :title
    add_column :events, :allDay?, :boolean
    add_column :events, :start, :datetime
    add_column :events, :end, :datetime
    add_column :events, :resource?, :boolean
  end
end
