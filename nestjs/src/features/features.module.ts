import { Module } from '@nestjs/common';

import { CatModule } from './cat/cat.module';
import { RestaurantReservationsModule } from './restaurant-reservations/restaurant-reservations.module';
import { ReservationProviderModule } from './reservation-provider/reservation-provider.module';

@Module({
  imports: [CatModule, RestaurantReservationsModule, ReservationProviderModule]
})
export class FeaturesModule { }
