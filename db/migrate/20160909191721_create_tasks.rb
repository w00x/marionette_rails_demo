class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.boolean :doit
      t.string :todo

      t.timestamps null: false
    end
  end
end
