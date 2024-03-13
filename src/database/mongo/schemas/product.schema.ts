import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, SchemaTypes } from "mongoose";


export type ProductDocument = HydratedDocument<Product>;

@Schema({timestamps: true})
export class Product{
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    price: number;

    @Prop({type: SchemaTypes.ObjectId, ref: 'Category'})
    category: string;

    @Prop({required: true})
    quantity: number;

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