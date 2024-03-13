export class CreateProductDto {
  name                :string;
  price               :string;
  category            :string;
  quantity            :string;
  priceWithDiscount?  :string;
  stockAmount         :string;
  active?             :boolean;
}


export class UpdateProductDto {
  productId           :string;
  name                :string;
  price               :string;
  category            :string;
  quantity            :string;
  priceWithDiscount?  :string;
  stockAmount         :string;
  active?             :boolean;
}