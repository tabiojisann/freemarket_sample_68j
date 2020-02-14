## itemsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|price|integer|null: false|
|status|integer|null: false|
|description|string|null: false|
|charge|string|null: false|
|area|string|null: false|
|day|string|null: false|
|sale|integer|null: false|
|user_id|references|null: false, foreign_key: true|
|category_id|references|null: false, foreign_key: ture|
|brand_id|references|null: false, foreign_key: ture, optional: true|

### Association
- belongs_to :user
- belongs_to :category
- belongs_to :brand
- has_many :images
- has_many :purchases


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false, unique: true|
|email|string|null: false, unique: true|
|password|string|null: false|
|family_name|string|null: false|
|first_name|string|null: false|
|furigana|string|null: false|
|birthday|integer|null: false|

### Association
- belongs_to :addresses
- has_many :credit_cards
- has_many :purchases
- has_many :items


## addressesテーブル

|Column|Type|Optoins|
|------|----|-------|
|family_name|string|null: false|
|first_name|string|null: false|
|furigana|string|null: false|
|number|integer|null: false|
|prefecture|string|null: false|
|municipality|string|null: false|
|street|string|null: false|
|building|string|
|phone_number|integer|
|user_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user


## credit_cardsテーブル

|Column|Type|Options|
|------|----|-------|
|number|integer|null: false|
|owner|string|null: false|
|expiration|integer|null: false|
|type|string|null: false|
|security|integer|null: false|
|user_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user


## imagesテーブル

|Column|Type|Options|
|------|----|-------|
|picture|text|null: false|
|item_id|references|null: false, foreign_key: true|

### Association
- belongs_to :item


## categoriesテーブル

|Column|Type|Options|
|------|----|-------|
|genre|string|null: false|

### Association
- has_many :items
- has_ancestry


## brandsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :items


## purchasesテーブル

|Column|Type|Options|
|------|----|-------|
|date|datetime|null: false|
|user_id|references|null: false, foreign_key: true|
|item_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :item