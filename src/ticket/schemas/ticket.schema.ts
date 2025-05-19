import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type TicketDocument = HydratedDocument<Ticket>;

@Schema()
export class Ticket {
  @Prop()
  price: number;

  @Prop()
  ticketType: string;

  @Prop()
  serviceFree: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Event" })
  eventId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Seat" })
  seatId: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "TicketStatus" })
  statusId: string;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
