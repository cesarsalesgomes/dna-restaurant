import { Module } from '@nestjs/common';

import { RestaurantReservationsModule } from './restaurant-reservations/restaurant-reservations.module';
import { ReservationProviderModule } from './reservation-provider/reservation-provider.module';

@Module({
  imports: [RestaurantReservationsModule, ReservationProviderModule]
})
export class FeaturesModule { }
