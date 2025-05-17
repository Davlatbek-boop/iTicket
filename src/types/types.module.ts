import { Module } from '@nestjs/common';
import { TypesService } from './types.service';
import { TypesController } from './types.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Types, TypesSchema } from './schemas/type.schema';

@Module({
  imports:[MongooseModule.forFeature([{
    name: Types.name,
    schema: TypesSchema
  }])],
  controllers: [TypesController],
  providers: [TypesService],
})
export class TypesModule {}
