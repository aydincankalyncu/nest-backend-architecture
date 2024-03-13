export class CreateProductDto {
  name                :string;
  price               :string;
  categoryId           :string;
  marketId            : string;
  priceWithDiscount?  :string;
  stockAmount         :string;
  active?             :boolean;
}


export class UpdateProductDto {
  productId           :string;
  name                :string;
  price               :string;
  categoryId           :string;
  priceWithDiscount?  :string;
  stockAmount         :string;
  active?             :boolean;
}