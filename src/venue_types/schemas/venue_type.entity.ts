import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type VenueTypesDocument = HydratedDocument<VenueTypes>;

@Schema()
export class VenueTypes {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Venue" })
  venueId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Types" })
  typeId: string;
}

export const VenueTypesSchema = SchemaFactory.createForClass(VenueTypes);
