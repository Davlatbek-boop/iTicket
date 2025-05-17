import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type TypesDocument = HydratedDocument<Types>;

@Schema()
export class Types {
  @Prop()
  name: string;
}

export const TypesSchema = SchemaFactory.createForClass(Types);
