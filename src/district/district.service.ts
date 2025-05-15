import { Injectable } from "@nestjs/common";
import { CreateDistrictDto } from "./dto/create-district.dto";
import { UpdateDistrictDto } from "./dto/update-district.dto";
import { District } from "./schems/district.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class DistrictService {
  constructor(
    @InjectModel(District.name) private readonly districtSchema: Model<District>
  ) {}
  create(createDistrictDto: CreateDistrictDto) {
    return this.districtSchema.create(createDistrictDto);
  }

  findAll() {
    return this.districtSchema.find();
  }

  findOne(id: string) {
    return this.districtSchema.findById(id);
  }

  update(id: string, updateDistrictDto: UpdateDistrictDto) {
    return this.districtSchema.findByIdAndUpdate(id, updateDistrictDto);
  }

  remove(id: string) {
    return this.districtSchema.findByIdAndDelete(id);
  }
}
