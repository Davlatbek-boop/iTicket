import { Injectable } from '@nestjs/common';
import { CreateCartItemDto } from './dto/create-cart_item.dto';
import { UpdateCartItemDto } from './dto/update-cart_item.dto';
import { InjectModel } from '@nestjs/mongoose';
import { CartItem } from './schema/cart_item.schema';
import { Model } from 'mongoose';

@Injectable()
export class CartItemService {
  constructor(@InjectModel(CartItem.name) private readonly cartItemSchema: Model<CartItem>){}
  create(createCartItemDto: CreateCartItemDto) {
    return this.cartItemSchema.create(createCartItemDto);
  }

  findAll() {
    return this.cartItemSchema.find();
  }

  findOne(id: string) {
    return this.cartItemSchema.findById(id);
  }

  update(id: string, updateCartItemDto: UpdateCartItemDto) {
    return this.cartItemSchema.findByIdAndUpdate(id, updateCartItemDto)
  }

  remove(id: string) {
    return this.cartItemSchema.findByIdAndDelete(id);
  }
}
