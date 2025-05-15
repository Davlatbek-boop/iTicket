import { Injectable } from '@nestjs/common';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';
import { InjectModel } from '@nestjs/mongoose';
import { CustomerCard } from './schemas/customer_card.schema';
import { Model } from 'mongoose';

@Injectable()
export class CustomerCardService {
  constructor(@InjectModel(CustomerCard.name) private readonly customerCardSchema: Model<CustomerCard>){}
  create(createCustomerCardDto: CreateCustomerCardDto) {
    return this.customerCardSchema.create(createCustomerCardDto);
  }

  findAll() {
    return this.customerCardSchema.find();
  }

  findOne(id: string) {
    return this.customerCardSchema.findById(id);
  }

  update(id: string, updateCustomerCardDto: UpdateCustomerCardDto) {
    return this.customerCardSchema.findByIdAndUpdate(id, updateCustomerCardDto);
  }

  remove(id: string) {
    return this.customerCardSchema.findByIdAndDelete(id);
  }
}
