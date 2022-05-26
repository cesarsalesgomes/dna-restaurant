/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { ALERT_EMAIL_ADDRESS } from '@constants/reservation-provider.constants';
import { ReservationProviderName } from '@enums/reservation-provider.enums';
import { AuthService } from '@features/auth/auth.service';
import { ReservationProviderService } from '@features/reservation-provider/reservation-provider.service';
import { Restaurant } from '@features/restaurant/restaurant.sdk';
import { RestaurantService } from '@features/restaurant/restaurant.service';
import { Injectable } from '@nestjs/common';
import { MailService } from '@providers/mail/mail.service';

@Injectable()
export class RestaurantReservationsService {

  constructor(
    private mailService: MailService,
    private authService: AuthService,
    private restaurantService: RestaurantService,
    private reservationProviderService: ReservationProviderService
  ) { }

  sendReservationEmailAlert(subject: string, text: string) {
    return this.mailService.sendEmail({
      to: ALERT_EMAIL_ADDRESS,
      subject,
      text
    });
  }

  async processRestaurantsReservations() {
    const accessToken = await this.authService.getAccessToken();

    const activeRestaurants = await this.restaurantService.getActiveRestaurantsWithReservationProvider(accessToken);

    for (const restaurant of activeRestaurants) {
      try {
        console.log(`[${restaurant.name}] Started process \n`);

        switch (restaurant.reservation_provider.name) {
          case ReservationProviderName.TAG_ME:
            this.processTagMeRestaurantReservations(restaurant, accessToken);
            break;
          case ReservationProviderName.GET_IN:
            this.processGetInRestaurantReservations(restaurant, accessToken);
            break;
          default:
            break;
        }

        console.log(`[${restaurant.name}] Finished process \n`);
      } catch (error) {
        console.log(`[${restaurant.name}] Error on process \n`);

        console.error(error);
      }
    }
  }

  private async processTagMeRestaurantReservations(restaurant: Restaurant, accessToken: string) {
    if (await this.reservationProviderService.processTagMeRestaurantReservations(
      restaurant.tag_me_restaurant[0].tag_me_restaurant_key,
      restaurant.reservation_provider.token
    )) {
      await this.sendReservationEmailAlert(`[Reserva] ${restaurant.name}`, 'Acrescentar as horas futuramente');

      this.restaurantService.disableRestaurant(accessToken, restaurant);
    }
  }

  private async processGetInRestaurantReservations(restaurant: Restaurant, accessToken: string) {
    if (await this.reservationProviderService.processGetInRestaurantReservations(
      restaurant.get_in_restaurant[0].get_in_restaurant_key, 2
    )) {
      await this.sendReservationEmailAlert(`[Reserva] ${restaurant.name}`, 'Acrescentar as horas futuramente');

      this.restaurantService.disableRestaurant(accessToken, restaurant);
    }
  }

}
