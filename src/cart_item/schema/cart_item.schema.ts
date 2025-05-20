import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type CartItemDocument = HydratedDocument<CartItem>;

@Schema()
export class CartItem {
  @Prop({ type: mongoose.Types.ObjectId, ref: "Ticket" })
  ticketId: string;

  @Prop({ type: mongoose.Types.ObjectId, ref: "Cart" })
  cartId: string;
}

export const CartItemSchema = SchemaFactory.createForClass(CartItem);
