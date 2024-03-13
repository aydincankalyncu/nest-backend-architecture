import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Market } from '../database/mongo/schemas/market.schema';
import { Model } from 'mongoose';
import { AddMarketDto, UpdateMarketDto } from './dto';
import { BaseResult } from '../utils/result/base-result';
import { SuccessResult } from '../utils/result/success-result';
import { ErrorResult } from '../utils/result/error-result';

@Injectable()
export class MarketsService {
  constructor(@InjectModel(Market.name) private readonly  marketModel : Model<Market>) { }

  async create(addMarketDto : AddMarketDto) : Promise<BaseResult>{
    const createdMarket = new this.marketModel(addMarketDto);
    try {
      await createdMarket.save();
      return new SuccessResult(`Market ${addMarketDto.name} created successfully`, createdMarket);
    }
    catch (error)
    {
      return new ErrorResult("Error occur on creating market", error);
    }
  }

  async getAll() : Promise<BaseResult>{
    try {
      const markets = await this.marketModel.find().exec();
      return new SuccessResult('Success', markets);
    }
    catch (error)
    {
      return new ErrorResult('Error occurs on getting markets', error);
    }
  }

  async getById(id: string) : Promise<BaseResult> {
    try {
      const market = await this.marketModel.findById(id).exec();
      if(!market)
      {
        return new ErrorResult("There is no market", id);
      }
      return new SuccessResult("Success", market);
    } catch (error)
    {
      return new ErrorResult("Error occur on getting market by id", error);
    }
  }
  async delete(id: string): Promise<BaseResult> {
    try
    {
      const deletedMarket = await this.marketModel.findByIdAndDelete(id);
      return new SuccessResult("Success", deletedMarket);
    }
    catch (error)
    {
      return new ErrorResult('Error occur on delete market', error);
    }
  }
  async update(updateMarketDto: UpdateMarketDto): Promise<BaseResult> {
    const { id, name, latitude, longitude, email, active } = updateMarketDto;
    try {
      const updatedMarket = await this.marketModel.findById(id).exec();
      if (!updatedMarket)
      {
        return new ErrorResult('There is no market with this id', id);
      }

      const updateFilter  = {name: name, email: email, active: active, latitude: latitude, longitude: longitude};
      const result    = await this.marketModel.findOneAndUpdate({name: updatedMarket.name}, updateFilter, {new: true})

      return new SuccessResult('Success', result);
    } catch (error)
    {
      return new ErrorResult('Error occur on updating market', error);
    }
  }
}
