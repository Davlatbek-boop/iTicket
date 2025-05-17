import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type VenuePhotoDocument = HydratedDocument<VenuePhoto>;

@Schema()
export class VenuePhoto {
  @Prop()
  url: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Venue" })
  venueId: string;
}

export const VenuePhotoSchema = SchemaFactory.createForClass(VenuePhoto);
