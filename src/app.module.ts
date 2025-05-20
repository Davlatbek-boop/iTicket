import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AdminModule } from "./admin/admin.module";
import { AuthModule } from "./auth/auth.module";
import { CustomerModule } from "./customer/customer.module";
import { CustomerAddressModule } from "./customer_address/customer_address.module";
import { CustomerCardModule } from "./customer_card/customer_card.module";
import { RegionModule } from "./region/region.module";
import { DistrictModule } from "./district/district.module";
import { TypesModule } from "./types/types.module";
import { VenueModule } from "./venue/venue.module";
import { VenueTypesModule } from "./venue_types/venue_types.module";
import { SeatTypeModule } from "./seat_type/seat_type.module";
import { SeatModule } from "./seat/seat.module";
import { VenuePhotoModule } from "./venue_photo/venue_photo.module";
import { LangModule } from "./lang/lang.module";
import { TicketStatusModule } from "./ticket_status/ticket_status.module";
import { HumanCategoryModule } from "./human_category/human_category.module";
import { EventTypeModule } from "./event_type/event_type.module";
import { EventModule } from "./event/event.module";
import { TicketModule } from "./ticket/ticket.module";
import { PaymentMethodModule } from './payment_method/payment_method.module';
import { DeliveryMethodModule } from './delivery_method/delivery_method.module';
import { CartItemModule } from './cart_item/cart_item.module';
import { CartModule } from './cart/cart.module';
import { BookingModule } from './booking/booking.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
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
    LangModule,
    TicketStatusModule,
    HumanCategoryModule,
    EventTypeModule,
    EventModule,
    TicketModule,
    PaymentMethodModule,
    DeliveryMethodModule,
    CartItemModule,
    CartModule,
    BookingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
