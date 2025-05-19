import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type HumanCategoryDocument = HydratedDocument<HumanCategory>;

@Schema()
export class HumanCategory {
  @Prop()
  name: string;

  @Prop()
  startAge: string;

  @Prop()
  finishAge: string;

  @Prop()
  gender: string;
}

export const HumanCategorySchema = SchemaFactory.createForClass(HumanCategory);