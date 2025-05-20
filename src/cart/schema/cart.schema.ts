import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type CartDocument = HydratedDocument<Cart>;

@Schema()
export class Cart {
  @Prop({type: mongoose.Types.ObjectId, ref: "Customer"})
  customerId: string;

    @Prop()
  createdAt: Date;

    @Prop()
  finishedAt: Date;

    @Prop()
  statusId: string;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
