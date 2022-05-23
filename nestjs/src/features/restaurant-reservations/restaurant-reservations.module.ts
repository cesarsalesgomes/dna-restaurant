import { AuthModule } from '@features/auth/auth.module';
import { ReservationProviderModule } from '@features/reservation-provider/reservation-provider.module';
import { RestaurantModule } from '@features/restaurant/restaurant.module';
import { Module } from '@nestjs/common';
import { MailModule } from '@providers/mail/mail.module';

import { RestaurantReservationsController } from './restaurant-reservations.controller';
import { RestaurantReservationsService } from './restaurant-reservations.service';

@Module({
  imports: [MailModule, AuthModule, RestaurantModule, ReservationProviderModule],
  controllers: [RestaurantReservationsController],
  providers: [RestaurantReservationsService],
  exports: [RestaurantReservationsService],
})
export class RestaurantReservationsModule { }
