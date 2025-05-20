import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type BookingDocument = HydratedDocument<Booking>;

@Schema()
export class Booking {
  @Prop({type: mongoose.Types.ObjectId, ref: "Cart"})
  cartId: string;

  @Prop({type: mongoose.Types.ObjectId, ref: "PaymentMethod"})
  paymentMethodId: string;

  @Prop({type: mongoose.Types.ObjectId, ref: "DeliveryMethod"})
  deliveryMethodId: string;

  @Prop()
  status: string;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
