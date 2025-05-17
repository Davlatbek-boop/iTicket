import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';
import { CustomerAddressModule } from './customer_address/customer_address.module';
import { CustomerCardModule } from './customer_card/customer_card.module';
import { RegionModule } from './region/region.module';
import { DistrictModule } from './district/district.module';
import { TypesModule } from './types/types.module';
import { VenueModule } from './venue/venue.module';
import { VenueTypesModule } from './venue_types/venue_types.module';
import { SeatTypeModule } from './seat_type/seat_type.module';
import { SeatModule } from './seat/seat.module';
import { VenuePhotoModule } from './venue_photo/venue_photo.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    AdminModule,
    AuthModule,
    CustomerModule,
    CustomerAddressModule,
    CustomerCardModule,
    RegionModule,
    DistrictModule,
    TypesModule,
    VenueModule,
    VenueTypesModule,
    SeatTypeModule,
    SeatModule,
    VenuePhotoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
