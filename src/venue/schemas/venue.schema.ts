import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type VenueDocument = HydratedDocument<Venue>;

@Schema()
export class Venue {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  location: string;

  @Prop()
  site: string;

  @Prop()
  phone: string;

  @Prop()
  schema: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Region" })
  regionId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "District" })
  districtId: string;
}

export const VenueSchema = SchemaFactory.createForClass(Venue);
