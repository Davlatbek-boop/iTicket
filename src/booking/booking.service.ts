import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Model } from 'mongoose';
import { Booking } from './schema/booking.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BookingService {
  constructor(@InjectModel(Booking.name)private readonly bookingSchema: Model<Booking>){}
  create(createBookingDto: CreateBookingDto) {
    return this.bookingSchema.create(createBookingDto);
  }

  findAll() {
    return this.bookingSchema.find();
  }

  findOne(id: string) {
    return this.bookingSchema.findById(id)
  }

  update(id: string, updateBookingDto: UpdateBookingDto) {
    return this.bookingSchema.findByIdAndUpdate(id, updateBookingDto);
  }

  remove(id: string) {
    return this.bookingSchema.findByIdAndDelete(id);
  }
}
