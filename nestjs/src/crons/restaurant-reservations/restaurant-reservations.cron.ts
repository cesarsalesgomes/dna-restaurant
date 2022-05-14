import {
  RestaurantReservationsService
} from '@features/restaurant-reservations/restaurant-reservations.service';
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class RestaurantReservationsCron {
  constructor(private restaurantReservationsService: RestaurantReservationsService) { }

  @Cron(CronExpression.EVERY_10_MINUTES)
  async handleCron() {
    try {
      console.log('[Tagme] Restaurant reservation process started \n');

      await this.restaurantReservationsService.processTagMeRestaurantReservations();

      console.log('[Tagme] Restaurant reservation process finished with success \n');
    } catch (error) {
      console.log(`[Tagme] Restaurant reservation process finished with error: ${error} \n`);
    }
  }
}
