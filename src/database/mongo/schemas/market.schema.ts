import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, SchemaTypes } from 'mongoose';

export type MarketDocument = HydratedDocument<Market>;

@Schema({timestamps: true})
export class Market{
    
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    email: string;

    @Prop({default: {latitude: 0, longitude: 0}})
    location: {
        latitude: number;
        longitude: number;
    }

    @Prop({default: true})
    active: boolean;

    @Prop({type: SchemaTypes.ObjectId, ref: 'User'})
    user: string;

}

export const MarketSchema = SchemaFactory.createForClass(Market);