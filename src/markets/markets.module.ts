import { Module } from '@nestjs/common';
import { MarketsController } from './markets.controller';
import { MarketsService } from './markets.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Market, MarketSchema } from '../database/mongo/schemas/market.schema';

@Module({
  imports:[MongooseModule.forFeature([{name: Market.name, schema: MarketSchema}])],
  controllers: [MarketsController],
  providers: [MarketsService]
})
export class MarketsModule {}
