import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CustomerAddressDocument = HydratedDocument<CustomerAddress>;

@Schema()
export class CustomerAddress {
  @Prop()
  name: string;

  @Prop()
  customerId: string;

  @Prop()
  regionId: string;

  @Prop()
  districtId: string;

   @Prop()
  street: string;

   @Prop()
  house: string;

   @Prop()
  flat: string;

   @Prop()
  location: string;

   @Prop()
  postIndex: string;

   @Prop()
  info: string;
}

export const CustomerAddressSchema =
  SchemaFactory.createForClass(CustomerAddress);
