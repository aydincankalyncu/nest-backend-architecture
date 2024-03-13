import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from 'mongoose';

export type MarketDocument = HydratedDocument<Market>;

@Schema({timestamps: true})
export class Market{
    
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    email: string;

    @Prop({required: true})
    latitude: string;

    @Prop({required: true})
    longitude: string;

    @Prop({default: true})
    active: boolean;

    @Prop({required: true})
    userId: string;

}

export const MarketSchema = SchemaFactory.createForClass(Market);