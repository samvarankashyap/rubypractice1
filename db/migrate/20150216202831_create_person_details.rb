class CreatePersonDetails < ActiveRecord::Migration
  def change
    create_table :person_details do |t|
      t.string :first_name
      t.string :last_name
      t.datetime :dob
      t.string :email
      t.string :location
      t.string :latitude
      t.string :longitude
      t.text :about_me

      t.timestamps null: false
    end
  end
end
