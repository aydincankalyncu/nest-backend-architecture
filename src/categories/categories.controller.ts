import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { BaseResult } from 'src/utils/result/base-result';
import { CreateCategoryDto, UpdateCategoryDto } from './dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  getAll(): Promise<BaseResult> {
    return this.categoriesService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') categoryId: string): Promise<BaseResult> {
    return this.categoriesService.getById(categoryId);
  }

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) : Promise<BaseResult>{
    return this.categoriesService.create(createCategoryDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<BaseResult> {
    return this.categoriesService.delete(id);
  }

  @Put(':id')
  async updateCategory(@Param('id') categoryId: string, @Body() updateCategoryDto: UpdateCategoryDto): Promise<BaseResult> {
    updateCategoryDto.categoryId = categoryId;
    return this.categoriesService.update(updateCategoryDto);
  }

}
