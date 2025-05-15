import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CustomerAddressDocument = HydratedDocument<CustomerAddress>;

@Schema()
export class CustomerAddress {
  @Prop()
  name: string;

  @Prop()
  customerId: number;

  @Prop()
  country_id: number;

  @Prop()
  regionId: number;

  @Prop()
  districtId: number;

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
