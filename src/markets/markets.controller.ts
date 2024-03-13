import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MarketsService } from './markets.service';
import { BaseResult } from '../utils/result/base-result';
import { AddMarketDto, UpdateMarketDto } from './dto';

@Controller('markets')
export class MarketsController {
  constructor(private readonly  marketsService: MarketsService) {}

  @Get()
  getAll(): Promise<BaseResult> {
    return this.marketsService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') marketId: string): Promise<BaseResult> {
    return this.marketsService.getById(marketId);
  }

  @Post()
  async create(@Body() createMarketDto: AddMarketDto) : Promise<BaseResult>{
    return this.marketsService.create(createMarketDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<BaseResult> {
    return this.marketsService.delete(id);
  }

  @Put(':id')
  async updateCategory(@Param('id') marketId: string, @Body() updateMarketDto: UpdateMarketDto): Promise<BaseResult> {
    updateMarketDto.id = marketId;
    return this.marketsService.update(updateMarketDto);
  }
}
