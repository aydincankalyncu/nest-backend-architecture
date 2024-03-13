import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type ProductDocument = HydratedDocument<Product>;

@Schema({timestamps: true})
export class Product{
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    price: number;

    @Prop({required: true})
    categoryId: string;

    @Prop({required: true})
    marketId: string;

    @Prop()
    priceWithDiscount: number;

    @Prop({required: true})
    stockAmount: number;

    @Prop({required: true})
    active: boolean;

    @Prop({default: Date.now})
    createdAt: Date

    @Prop({default: Date.now})
    updatedAt: Date
}

export const ProductSchema = SchemaFactory.createForClass(Product);