import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CategoryDocument = HydratedDocument<Category>;

@Schema({timestamps: true})
export class Category{
    @Prop({required: true})
    name: string;

    @Prop({default: true})
    active: boolean;

    @Prop({required: true})
    marketId: string;

    @Prop({default: Date.now})
    createdAt: Date

    @Prop({default: Date.now})
    updatedAt: Date
}

export const CategorySchema = SchemaFactory.createForClass(Category);


