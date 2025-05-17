import { Injectable } from '@nestjs/common';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Venue } from './schemas/venue.schema';
import { Model } from 'mongoose';

@Injectable()
export class VenueService {
  constructor(@InjectModel(Venue.name) private readonly venueSchema: Model<Venue>){}
  create(createVenueDto: CreateVenueDto) {
    return this.venueSchema.create(createVenueDto);
  }

  findAll() {
    return this.venueSchema.find().populate("regionId").populate("districtId")
  }

  findOne(id: number) {
    return this.venueSchema.findById(id).populate("districtId").populate("regionId")
  }

  update(id: number, updateVenueDto: UpdateVenueDto) {
    return this.venueSchema.findByIdAndUpdate(id, updateVenueDto);
  }

  remove(id: number) {
    return this.venueSchema.findByIdAndDelete(id);
  }
}
