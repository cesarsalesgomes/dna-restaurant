import { Module } from '@nestjs/common';

import { CatModule } from './cat/cat.module';
import { RestaurantReservationsModule } from './restaurant-reservations/restaurant-reservations.module';

@Module({
  imports: [CatModule, RestaurantReservationsModule]
})
export class FeaturesModule { }
