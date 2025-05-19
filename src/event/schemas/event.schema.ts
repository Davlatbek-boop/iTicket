import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type EventDocument = HydratedDocument<Event>;

@Schema()
export class Event {
  @Prop()
  name: string;

  @Prop()
  photo: string;

  @Prop()
  startDate: Date;

  @Prop()
  startTime: string;

  @Prop()
  finishDate: Date;

  @Prop()
  finishTime: string;

  @Prop()
  info: string;

  @Prop()
  releaseDate: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "EventType" })
  eventTypeId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "HumanCategory" })
  humanCategoryId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Venue" })
  venueId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Lang" })
  langId: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);
