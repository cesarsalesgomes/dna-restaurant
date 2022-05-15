import { Controller, Post } from '@nestjs/common';
import { MailService } from '@providers/mail/mail.service';
import { RestaurantReservationsService } from './restaurant-reservations.service';

@Controller('restaurant-reservations')
export class RestaurantReservationsController {

  constructor(private restaurantReservationsService: RestaurantReservationsService) { }

  @Post('health-check')
  async healthCheck() {
    this.restaurantReservationsService.sendReservationEmailAlert();
  }
}
