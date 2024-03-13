import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Product } from "../database/mongo/schemas/product.schema";
import { Model } from "mongoose";
import { CreateProductDto, UpdateProductDto } from "./dto";
import { BaseResult } from "../utils/result/base-result";
import { SuccessResult } from "../utils/result/success-result";
import { ErrorResult } from "../utils/result/error-result";

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private readonly productModel : Model<Product>) {  }

  async create(createProductDto: CreateProductDto):Promise<BaseResult>{
    const createdProduct = new this.productModel(createProductDto);

    try {
      await createdProduct.save();
      return new SuccessResult(`Product ${createProductDto.name} created successfully`, createdProduct);
    }
    catch (error){
      return new ErrorResult(`Error occur on creating product`, error);
    }
  }

  async getAll():Promise<BaseResult>{
    try {
      const products = await this.productModel.find().exec();
      return new SuccessResult('Success', products);
    } catch (error) {
      return new ErrorResult('Error occurs on getting products', error);
    }
  }

  async getById(id: string) : Promise<BaseResult> {
    try {
      const product = await this.productModel.findById(id).exec();
      if(!product)
      {
        return new ErrorResult("There is no product", id);
      }
      return new SuccessResult("Success", product);
    } catch (error) {
      return new ErrorResult("Error occur on getting product by id", error);
    }
  }

  async delete(id: string): Promise<BaseResult> {
    try
    {
      const deletedProduct = await this.productModel.findByIdAndDelete(id);
      return new SuccessResult("Success", deletedProduct);
    }
    catch (error)
    {
      return new ErrorResult('Error occur on delete product', error);
    }
  }
  async update(updateProductDto: UpdateProductDto): Promise<BaseResult> {
    const {productId, name, price, categoryId, priceWithDiscount, stockAmount, active  } = updateProductDto;
    try {
      const updatedProduct = await this.productModel.findById(productId).exec();
      if (!updatedProduct)
      {
        return new ErrorResult('There is no product with this id', productId);
      }

      const updateFilter  = {name: name, price:price, categoryId:categoryId, priceWithDiscount:priceWithDiscount, stockAmount:stockAmount, active:active}
      const result    = await this.productModel.findOneAndUpdate({name: updatedProduct.name}, updateFilter, {new: true})

      return new SuccessResult('Success', result);
    } catch (error) {
      return new ErrorResult('Error occur on updating product', error);
    }
  }
}
