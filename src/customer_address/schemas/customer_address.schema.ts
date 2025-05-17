import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Schema as MongooseSchema } from "mongoose";
import { Region } from "../../region/schemas/region.schema";
import { Customer } from "../../customer/schemas/customer.schema";
import { District } from "../../district/schems/district.schema";

export type CustomerAddressDocument = HydratedDocument<CustomerAddress>;

@Schema()
export class CustomerAddress {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'Customer' })
  customerId: Customer;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Region" })
  regionId: Region;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "District" })
  districtId: District;

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
