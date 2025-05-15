import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CustomerCardDocument = HydratedDocument<CustomerCard>;

@Schema()
export class CustomerCard {
  @Prop()
  name: string;

  @Prop()
  customerId: number;

  @Prop()
  phone: string;

  @Prop()
  number: string;

  @Prop()
  year: string;

   @Prop()
  month: string;

   @Prop({default: true})
  is_active: boolean;

   @Prop({default: false})
  is_main: boolean;
}

export const CustomerCardSchema =
  SchemaFactory.createForClass(CustomerCard);
