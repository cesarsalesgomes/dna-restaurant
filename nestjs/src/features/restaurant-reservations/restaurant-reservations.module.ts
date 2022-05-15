import { AuthModule } from '@features/auth/auth.module';
import { RestaurantModule } from '@features/restaurant/restaurant.module';
import { Module } from '@nestjs/common';
import { GotService } from '@providers/got/got.service';
import { MailModule } from '@providers/mail/mail.module';
import { DateUtils } from '@utils/date.utils';
import { RestaurantReservationsController } from './restaurant-reservations.controller';

import { RestaurantReservationsService } from './restaurant-reservations.service';

@Module({
  imports: [MailModule, AuthModule, RestaurantModule],
  controllers: [RestaurantReservationsController],
  providers: [RestaurantReservationsService, GotService, DateUtils],
  exports: [RestaurantReservationsService],
})
export class RestaurantReservationsModule { }
