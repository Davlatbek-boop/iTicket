
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema()
export class Customer {
  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  phone: string;

  @Prop()
  hashed_password: string;

  @Prop({required: true})
  email: string;

  @Prop()
  birth_date: Date;

  @Prop()
  gender: string;

  @Prop()
  langId: number;

  @Prop()
  hashed_refresh_token: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
