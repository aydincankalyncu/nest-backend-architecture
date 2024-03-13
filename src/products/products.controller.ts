import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { BaseResult } from "../utils/result/base-result";
import { CreateProductDto, UpdateProductDto } from "./dto";

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService : ProductsService) { }
  @Get()
  getAll(): Promise<BaseResult> {
    return this.productsService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') productId: string): Promise<BaseResult> {
    return this.productsService.getById(productId);
  }

  @Post()
  async create(@Body() createProductDto: CreateProductDto) : Promise<BaseResult>{
    return this.productsService.create(createProductDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<BaseResult> {
    return this.productsService.delete(id);
  }

  @Put(':id')
  async updateCategory(@Param('id') productId: string, @Body() updateProductDto: UpdateProductDto): Promise<BaseResult> {
    updateProductDto.productId = productId;
    return this.productsService.update(updateProductDto);
  }
}
