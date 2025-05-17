import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema } from "mongoose";

export type CustomerCardDocument = HydratedDocument<CustomerCard>;

@Schema()
export class CustomerCard {
  @Prop()
  name: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Customer' })
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
