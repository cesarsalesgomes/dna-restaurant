/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import {
  CASA_DO_PORCO_TAG_ME_ID, ALERT_EMAIL_ADDRESS
} from '@constants/reservation-provider.constants';
import { ReservationProviderName } from '@enums/reservation-provider.enums';
import { AuthService } from '@features/auth/auth.service';
import { ReservationProviderService } from '@features/reservation-provider/reservation-provider.service';
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

        const reservationProviderName = restaurant.reservation_provider.name;

        switch (reservationProviderName) {
          case ReservationProviderName.TAG_ME:
            // TODO: change with TAG_ME_ID from database
            if (await this.reservationProviderService.proccessTagMeRestaurantReservations(CASA_DO_PORCO_TAG_ME_ID)) {
              await this.sendReservationEmailAlert(`[Reserva] ${restaurant.name}`, 'Acrescentar as horas futuramente');

              this.restaurantService.disableRestaurant(accessToken, restaurant);
            }

            break;
          default:
            break;
        }

        console.log(`[${restaurant.name}] Finished process \n`);
      } catch (error) {
        console.log(`[${restaurant.name}] Error on process \n`);
      }
    }
  }

}
