import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type DistrictDocument = HydratedDocument<District>;

@Schema()
export class District {
  @Prop()
  name: string;

  @Prop()
  regionId: string;
}

export const DistrictSchema =
  SchemaFactory.createForClass(District);
