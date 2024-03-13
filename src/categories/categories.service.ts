import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from 'src/database/mongo/schemas/category.schema';
import { CreateCategoryDto, UpdateCategoryDto } from './dto';
import { BaseResult } from 'src/utils/result/base-result';
import { SuccessResult } from 'src/utils/result/success-result';
import { ErrorResult } from 'src/utils/result/error-result';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private readonly categoryModel: Model<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) : Promise<BaseResult>{
        const {name} = createCategoryDto;

        const createdCategory = new this.categoryModel({name: name});

        try {
            await createdCategory.save();
            return new SuccessResult(`Category ${name} created successfully.`, createdCategory);
        } catch (error) {
            return new ErrorResult(`Error occured on creating category`, error);
        }
  }

  async getAll(): Promise<BaseResult> {
    try {
      const categories = await this.categoryModel.find().exec();
      return new SuccessResult('Success', categories);
    } catch (error) {
      return new ErrorResult('Error occured on getting categories', error);
    }
  }

  async getById(id: string) : Promise<BaseResult> {
    try {
      const category = await this.categoryModel.findById(id).exec();
      if(!category)
      {
        return new ErrorResult("There is no category", id);
      }
      return new SuccessResult("Success", category);
    } catch (error) {
      return new ErrorResult("Error occured on getting category by id", error);
    }
  }

  async delete(id: string): Promise<BaseResult> {
    try 
    {
      const deletedCategory = await this.categoryModel.findByIdAndDelete(id);
      return new SuccessResult("Success", deletedCategory);
    } 
    catch (error) 
    {
      return new ErrorResult('Error occured on delete category', error);
    }
  }

  async update(
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<BaseResult> {
    const { categoryId, name, active } = updateCategoryDto;
    try {
      const updatedCategory = await this.categoryModel.findById(categoryId).exec();
      if (!updatedCategory)
      {
        return new ErrorResult('There is no category with this id', categoryId);
      }

      const updateFilter  = {name: name, active: active}
      const result        = await this.categoryModel.findOneAndUpdate({name: updatedCategory.name}, updateFilter, {new: true})
      
      return new SuccessResult('Success', result);
    } catch (error) {
      return new ErrorResult('Error occured on updating category', error);
    }
  }

}
