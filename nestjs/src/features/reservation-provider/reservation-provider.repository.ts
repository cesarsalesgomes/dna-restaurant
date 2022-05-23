import { Injectable } from '@nestjs/common';
import { DirectusService } from '@system/directus/directus.service';

import { getSdk } from './reservation-provider.sdk';

@Injectable()
export class ReservationProviderRepository {
  constructor(private directusService: DirectusService) { }

  getReservationProviderSdk(accessToken: string) {
    return getSdk(this.directusService.getGraphqlClient(accessToken));
  }

  async getReservationProviderByName(accessToken: string, reservationProviderName: string) {
    const { reservation_provider } = (await this.getReservationProviderSdk(accessToken).findReservationProvider(
      { data: { name: { _eq: reservationProviderName } } })
    ).data;

    return reservation_provider[0];
  }
}
