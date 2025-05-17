import { Injectable } from '@nestjs/common';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { InjectModel } from '@nestjs/mongoose';
import { VenueTypes } from './schemas/venue_type.entity';
import { Model } from 'mongoose';

@Injectable()
export class VenueTypesService {
  constructor(@InjectModel(VenueTypes.name) private readonly venueTypesSchema: Model<VenueTypes>){}
  create(createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypesSchema.create(createVenueTypeDto);
  }

  findAll() {
    return this.venueTypesSchema.find();
  }

  findOne(id: string) {
    return this.venueTypesSchema.findById(id);
  }

  update(id: string, updateVenueTypeDto: UpdateVenueTypeDto) {
    return this.venueTypesSchema.findByIdAndUpdate(id, updateVenueTypeDto);
  }

  remove(id: string) {
    return this.venueTypesSchema.findByIdAndDelete(id);
  }
}
