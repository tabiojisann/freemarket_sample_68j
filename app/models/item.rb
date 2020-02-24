class Item < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to_active_hash :prefecture
  # belongs_to :user
  
  # belongs_to :category
  belongs_to :brand, optional: true
  accepts_nested_attributes_for :brand
  belongs_to :category
end
